import express from 'express';
import cors from 'cors';
import { getAllDrivers } from './scripts/getAllDriversDropdown.js';

const app = express();
// Render provides the PORT environment variable. We should use it.
const port = process.env.PORT || 4000;

// Set up CORS to allow your frontend to communicate with this server
app.use(cors());

// Define the endpoint that will trigger the script
app.get('/run-script', async (req, res) => {
  console.log('Received request to run getAllDrivers script...');
  
  try {
    // Call the imported script function and wait for its result
    const result = await getAllDrivers();
    console.log('Script executed successfully. Sending result to frontend.');
    // Send the string result back to the client
    res.status(200).send(result);
  } catch (error) {
    console.error('!!! An error occurred while running the script:', error);
    // Send a detailed error message back to the client
    res.status(500).send(`Script Execution Error: ${error.message}`);
  }
});

// CRITICAL FIX: Listen on host '0.0.0.0' to be accessible within the Render container.
// This allows Render's health checks to see that the server has started.
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server listening on port ${port}`);
});