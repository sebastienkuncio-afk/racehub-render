import React from 'react';
import type { Race, RaceStatus } from '../types';
import { CalendarIcon, LocationIcon } from '../constants';

interface RaceCardProps {
  race: Race;
}

const statusStyles: { [key in RaceStatus]: string } = {
  Upcoming: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20',
  Live: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20',
  Finished: 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20',
};

const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl dark:shadow-black/20">
      <img className="w-full h-40 object-cover" src={race.imageUrl} alt={race.name} />
      <div className="p-5">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{race.name}</h3>
            <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                statusStyles[race.status]
                }`}
            >
                {race.status}
            </span>
        </div>
        
        <div className="space-y-3 mt-3">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                <span>{race.date}</span>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <LocationIcon className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                <span>{race.location}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCard;