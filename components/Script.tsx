import React, { useState } from 'react';

const Script: React.FC = () => {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStartScript = async () => {
    setIsLoading(true);
    setOutput('Running script: getAllDriversDropdown.js...\nContacting remote server...');

    try {
      // This is the live URL for your server deployed on Render.com
      const response = await fetch('https://racehub-render-backend.onrender.com/run-script');

      // Check if the server responded with an error (e.g., script failed)
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      // Get the script's output from the server's successful response
      const scriptResult = await response.text();
      
      setOutput(`Script finished successfully.\n\n--- RESULTS ---\n${scriptResult}`);

    } catch (error) {
      // This will catch network errors or the error thrown above
      console.error("Failed to run script:", error);
      setOutput(
        `ERROR: Could not run the script.\n\n` +
        `Please ensure your server is deployed correctly on Render.com and that the URL is correct.\n\n` +
        `The server may be starting up or waking from sleep, which can take up to a minute. Please try again.\n\n` +
        `Details: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    } finally {
      // This ensures the loading state is turned off, whether the script succeeded or failed
      setIsLoading(false);
    }
  };

  const handleErase = () => {
    setOutput('');
  };

  return (
    <div className="flex-1 flex flex-col p-6 h-full">
        <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={handleStartScript}
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Running...' : 'Start Script'}
            </button>
            <button
              onClick={handleErase}
              className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg transition-colors border border-slate-500"
            >
              Erase
            </button>
        </div>
        <div className="flex-1">
            <textarea
              readOnly
              value={output}
              placeholder="Script output will be shown here..."
              className="w-full h-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-custom-teal resize-none shadow-inner"
            ></textarea>
        </div>
    </div>
  );
};

export default Script;
