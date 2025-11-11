import React, { useState } from 'react';
import TimeInputRow from './TimeInputRow.tsx';

const DurationCard: React.FC = () => {
  const items = [
    'Durée Course',
    'Durée Relai Minimum',
    'Durée Relai Maximum',
    'Durée Minimum par Pilote',
  ];

  const [durations, setDurations] = useState(
    items.map(() => ({ hh: '', mm: '' }))
  );

  const handleDurationChange = (
    index: number,
    part: 'hh' | 'mm',
    value: string
  ) => {
    if (part === 'mm') {
      // Allow empty string or a valid number between 0 and 59 with at most 2 digits.
      if (value === '' || (/^\d{1,2}$/.test(value) && parseInt(value, 10) <= 59)) {
        const newDurations = [...durations];
        newDurations[index] = { ...newDurations[index], [part]: value };
        setDurations(newDurations);
      }
      // Otherwise, do nothing to prevent invalid input.
    } else {
      // For 'hh', just update the value
      const newDurations = [...durations];
      newDurations[index] = { ...newDurations[index], [part]: value };
      setDurations(newDurations);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Durée</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <TimeInputRow
            key={item}
            label={item}
            min2={0}
            max2={59}
            value1={durations[index].hh}
            value2={durations[index].mm}
            onChange1={(e) => handleDurationChange(index, 'hh', e.target.value)}
            onChange2={(e) => handleDurationChange(index, 'mm', e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default DurationCard;