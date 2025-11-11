import React, { useState, useEffect } from 'react';
import SingleInputRow from './SingleInputRow.tsx';

interface Pilote {
  name: string;
  weight: string;
}

const PilotesCard: React.FC = () => {
  const [numberOfPilotes, setNumberOfPilotes] = useState('');
  const [pilotes, setPilotes] = useState<Pilote[]>([]);

  useEffect(() => {
    const num = parseInt(numberOfPilotes, 10);
    if (!isNaN(num) && num > 0) {
      setPilotes((currentPilotes) => {
        const newPilotes = Array.from({ length: num }, (_, i) => {
          return currentPilotes[i] || { name: '', weight: '' };
        });
        return newPilotes;
      });
    } else {
      setPilotes([]);
    }
  }, [numberOfPilotes]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
        setNumberOfPilotes('');
        return;
    }

    let numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
        numValue = Math.max(1, Math.min(numValue, 12));
        setNumberOfPilotes(String(numValue));
    }
  };
  
  const handlePiloteDataChange = (
    index: number,
    field: keyof Pilote,
    value: string
  ) => {
    const newPilotes = [...pilotes];
    newPilotes[index] = { ...newPilotes[index], [field]: value };
    setPilotes(newPilotes);
  };


  const renderPiloteRows = () => {
    return pilotes.map((pilote, i) => (
      <tr key={i} className="border-b border-slate-700 last:border-b-0">
        <td className="py-3 pr-2 text-white font-medium whitespace-nowrap">
          Pilote {i + 1}
        </td>
        <td className="py-2 px-2">
          <input
            type="text"
            aria-label={`Nom Pilote ${i + 1}`}
            value={pilote.name}
            onChange={(e) => handlePiloteDataChange(i, 'name', e.target.value)}
            className="bg-slate-700 border border-slate-600 w-full rounded-lg p-2 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-teal font-bold text-lg"
          />
        </td>
        <td className="py-2 pl-2">
          <input
            type="number"
            inputMode="numeric"
            aria-label={`Poids Pilote ${i + 1}`}
            value={pilote.weight}
            onChange={(e) => handlePiloteDataChange(i, 'weight', e.target.value)}
            className="bg-slate-700 border border-slate-600 w-full text-center rounded-lg p-2 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-teal font-bold text-lg"
          />
        </td>
      </tr>
    ));
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6 transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        Pilotes
      </h3>
      <SingleInputRow
        label="Nombre de Pilotes"
        placeholder="1-12"
        widthClass="w-28"
        value={numberOfPilotes}
        onChange={handleNumberChange}
        type="number"
        min={1}
        max={12}
      />

      {pilotes.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b-2 border-slate-600">
                <th className="py-2 pr-2 font-semibold text-slate-400 text-sm tracking-wider uppercase">
                  Liste Pilotes
                </th>
                <th className="py-2 px-2 font-semibold text-slate-400 text-sm tracking-wider uppercase text-center">
                  Nom Pilotes
                </th>
                <th className="py-2 pl-2 font-semibold text-slate-400 text-sm tracking-wider uppercase text-center">
                  Poids (KG)
                </th>
              </tr>
            </thead>
            <tbody>{renderPiloteRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PilotesCard;