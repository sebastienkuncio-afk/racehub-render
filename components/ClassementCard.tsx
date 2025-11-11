import React from 'react';
import SingleInputRow from './SingleInputRow';
import ToggleRow from './ToggleRow';

const ClassementCard: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6 h-[268px]">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Classement</h3>
      <div className="space-y-4">
        <SingleInputRow label="Points Victoire" widthClass="w-20" />
        <SingleInputRow label="Points Pôle Position" widthClass="w-20" />
        <SingleInputRow label="Points Meilleur Tour" widthClass="w-20" />
        <ToggleRow label="Points pour tous" className="pt-2" />
      </div>
    </div>
  );
};

export default ClassementCard;