import React from 'react';
import ToggleSwitch from './ToggleSwitch';

interface ToggleRowProps {
  label: string;
  className?: string;
}

const ToggleRow: React.FC<ToggleRowProps> = ({ label, className = '' }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <label className="font-bold text-white text-lg">{label}</label>
      <ToggleSwitch />
    </div>
  );
};

export default ToggleRow;