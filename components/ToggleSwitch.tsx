import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const trackClasses = isOn ? 'bg-custom-teal' : 'bg-slate-700';

  const thumbClasses = isOn
    ? 'bg-white translate-x-7'
    : 'bg-slate-400 translate-x-1';

  return (
    <button
      onClick={toggleSwitch}
      aria-pressed={isOn}
      className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-custom-teal ${trackClasses}`}
    >
      <span
        className={`inline-block w-6 h-6 transform rounded-full transition-transform duration-200 ease-in-out ${thumbClasses}`}
      />
    </button>
  );
};

export default ToggleSwitch;