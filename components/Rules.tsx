import React from 'react';
import DurationCard from './DurationCard.tsx';
import StandsCard from './StandsCard.tsx';
import PilotesCard from './PilotesCard.tsx';
import PoidsCard from './PoidsCard.tsx';

const Rules: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto px-6 pt-28 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-col gap-6">
          <DurationCard />
          <PilotesCard />
        </div>
        <div className="flex flex-col gap-6">
          <StandsCard />
          <PoidsCard />
        </div>
      </div>
    </div>
  );
};

export default Rules;