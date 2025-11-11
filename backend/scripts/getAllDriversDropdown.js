import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

const URL = 'https://www.apex-timing.com/live-timing/circuit-europe/';

export async function getAllDrivers() {
  console.log('Launching browser to scrape Apex Timing...');
  
  // CRITICAL FIX: Add these arguments for running in a container
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('#tgrid', { timeout: 5000 });

  const tableHTML = await page.$eval('#tgrid', el => el.outerHTML);
  const $ = cheerio.load(tableHTML);

  const drivers = [];

  $('#tgrid tr').each((i, elem) => {
    if ($(elem).hasClass('head')) return;
    const driverBaseCode = $(elem).attr('data-id');
    const driverTD = $(elem).find('td[data-type="dr"]');
    const driverName = driverTD.text().trim();

    if (driverBaseCode && driverName) {
      drivers.push({ name: driverName, code: driverBaseCode });
    }
  });
  
  await browser.close();
  console.log('Browser closed.');

  let outputString = '';
  if (drivers.length) {
    outputString += '--- All Drivers in Live Grid (from apex-timing.com) ---\n';
    drivers.forEach(driver => {
      outputString += `${driver.name} (Code: ${driver.code})\n`;
    });
    outputString += `\nTotal drivers found: ${drivers.length}`;
  } else {
    outputString = 'No drivers found in live grid.';
  }

  return outputString;
}
