import React from 'react';
import { SearchIcon, PlusIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 w-full p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Races</h2>
          <p className="text-gray-500 dark:text-gray-400">Browse and manage your upcoming races.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search races..."
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">
            <PlusIcon className="w-5 h-5 mr-2" />
            Create Race
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;