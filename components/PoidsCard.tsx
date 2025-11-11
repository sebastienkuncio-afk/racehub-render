import React, { useState } from 'react';
import SingleInputRow from './SingleInputRow.tsx';

const PoidsCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Pilote' | 'Total'>('Pilote');
  const [poidsMinPilote, setPoidsMinPilote] = useState('');
  const [poidsMinTotal, setPoidsMinTotal] = useState('');
  const [poidsKartingPlein, setPoidsKartingPlein] = useState('');
  const [poidsKartingVide, setPoidsKartingVide] = useState('');

  const getButtonClasses = (tabName: 'Pilote' | 'Total') => {
    const baseClasses =
      'w-1/2 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none text-lg';
    if (activeTab === tabName) {
      return `${baseClasses} bg-custom-teal text-white shadow-sm`;
    }
    return `${baseClasses} text-slate-300 hover:bg-slate-600`;
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Poids</h3>

      <div className="bg-slate-900/50 rounded-full p-1 flex mb-6 mx-auto max-w-xs">
        <button
          onClick={() => setActiveTab('Pilote')}
          className={getButtonClasses('Pilote')}
          aria-pressed={activeTab === 'Pilote'}
        >
          Pilote
        </button>
        <button
          onClick={() => setActiveTab('Total')}
          className={getButtonClasses('Total')}
          aria-pressed={activeTab === 'Total'}
        >
          Total
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'Pilote' ? (
          <SingleInputRow
            label="Poids Minimum Pilote"
            placeholder="kg"
            widthClass="w-20"
            type="number"
            value={poidsMinPilote}
            onChange={(e) => setPoidsMinPilote(e.target.value)}
          />
        ) : (
          <>
            <SingleInputRow
              label="Poids Minimum Total"
              placeholder="kg"
              widthClass="w-20"
              type="number"
              value={poidsMinTotal}
              onChange={(e) => setPoidsMinTotal(e.target.value)}
            />
            <SingleInputRow
              label="Poids Karting Plein"
              placeholder="kg"
              widthClass="w-20"
              type="number"
              value={poidsKartingPlein}
              onChange={(e) => setPoidsKartingPlein(e.target.value)}
            />
            <SingleInputRow
              label="Poids Karting Vide"
              placeholder="kg"
              widthClass="w-20"
              type="number"
              value={poidsKartingVide}
              onChange={(e) => setPoidsKartingVide(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PoidsCard;