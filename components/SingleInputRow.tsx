import React from 'react';

interface SingleInputRowProps {
  label: string;
  placeholder?: string;
  widthClass?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: number;
  max?: number;
}

const SingleInputRow: React.FC<SingleInputRowProps> = ({
  label,
  placeholder,
  widthClass = 'w-20',
  value,
  onChange,
  type = 'text',
  min,
  max,
}) => {
  return (
    <div className="flex items-center justify-between">
      <label className="font-bold text-white text-lg">{label}</label>
      <div className="flex items-center">
        <input
          type={type}
          inputMode={type === 'number' ? 'numeric' : 'text'}
          placeholder={placeholder}
          aria-label={label}
          value={value === undefined ? '' : value}
          onChange={onChange}
          min={min}
          max={max}
          className={`bg-slate-700 border border-slate-600 text-center rounded-lg p-2 text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-custom-teal text-lg font-bold ${widthClass}`}
        />
      </div>
    </div>
  );
};

export default SingleInputRow;