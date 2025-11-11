import React from 'react';

interface TimeInputRowProps {
  label: string;
  placeholder1?: string;
  placeholder2?: string;
  min1?: number;
  max1?: number;
  min2?: number;
  max2?: number;
  value1?: string | number;
  value2?: string | number;
  onChange1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeInputRow: React.FC<TimeInputRowProps> = ({
  label,
  placeholder1 = 'hh',
  placeholder2 = 'mm',
  min1,
  max1,
  min2,
  max2,
  value1,
  value2,
  onChange1,
  onChange2,
}) => {
  return (
    <div className="flex items-center justify-between">
      <label className="font-bold text-white text-lg">{label}</label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          inputMode="numeric"
          min={min1}
          max={max1}
          placeholder={placeholder1}
          aria-label={`${label} ${placeholder1}`}
          value={value1}
          onChange={onChange1}
          className="bg-slate-700 border border-slate-600 w-20 text-center rounded-lg p-2 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-teal text-lg font-bold"
        />
        <span className="text-slate-400 text-2xl">:</span>
        <input
          type="number"
          inputMode="numeric"
          min={min2}
          max={max2}
          placeholder={placeholder2}
          aria-label={`${label} ${placeholder2}`}
          value={value2}
          onChange={onChange2}
          className="bg-slate-700 border border-slate-600 w-20 text-center rounded-lg p-2 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-teal text-lg font-bold"
        />
      </div>
    </div>
  );
};

export default TimeInputRow;