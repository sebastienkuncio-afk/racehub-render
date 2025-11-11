import React, { useState } from 'react';
import TimeInputRow from './TimeInputRow.tsx';
import SingleInputRow from './SingleInputRow.tsx';
import ToggleSwitch from './ToggleSwitch.tsx';

const StandsCard: React.FC = () => {
  const [nombrePit, setNombrePit] = useState('');
  const [dureePitStop, setDureePitStop] = useState({ mm: '', ss: '' });
  const [autonomieKart, setAutonomieKart] = useState({ hh: '', mm: '' });
  const [ouverturePit, setOuverturePit] = useState('');
  const [fermeturePit, setFermeturePit] = useState('');

  const handleLimitedTimeChange = (value: string, setter: (val: string) => void) => {
    // Allow empty string or a valid number between 0 and 59 with at most 2 digits.
    if (value === '' || (/^\d{1,2}$/.test(value) && parseInt(value, 10) <= 59)) {
      setter(value);
    }
    // Otherwise, do nothing to prevent invalid input.
  };
  
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Stands</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="font-bold text-white text-lg">Quick Change</label>
          <ToggleSwitch />
        </div>
        <SingleInputRow
          label="Nombre Pit"
          widthClass="w-28"
          type="number"
          value={nombrePit}
          onChange={(e) => setNombrePit(e.target.value)}
        />
        <TimeInputRow
          label="Durée Pit Stop"
          placeholder1="mm"
          placeholder2="ss"
          min1={0}
          max1={59}
          min2={0}
          max2={59}
          value1={dureePitStop.mm}
          value2={dureePitStop.ss}
          onChange1={(e) =>
            handleLimitedTimeChange(e.target.value, (val) => setDureePitStop({ ...dureePitStop, mm: val }))
          }
          onChange2={(e) =>
            handleLimitedTimeChange(e.target.value, (val) => setDureePitStop({ ...dureePitStop, ss: val }))
          }
        />
        <TimeInputRow
          label="Autonomie Kart"
          placeholder1="hh"
          placeholder2="mm"
          min2={0}
          max2={59}
          value1={autonomieKart.hh}
          value2={autonomieKart.mm}
          onChange1={(e) =>
            setAutonomieKart({ ...autonomieKart, hh: e.target.value })
          }
          onChange2={(e) =>
            handleLimitedTimeChange(e.target.value, (val) => setAutonomieKart({ ...autonomieKart, mm: val }))
          }
        />
        <SingleInputRow
          label="Ouverture Pit après Début"
          placeholder="mm"
          widthClass="w-20"
          type="number"
          min={0}
          max={59}
          value={ouverturePit}
          onChange={(e) => handleLimitedTimeChange(e.target.value, setOuverturePit)}
        />
        <SingleInputRow
          label="Fermeture Pit avant Fin"
          placeholder="mm"
          widthClass="w-20"
          type="number"
          min={0}
          max={59}
          value={fermeturePit}
          onChange={(e) => handleLimitedTimeChange(e.target.value, setFermeturePit)}
        />
      </div>
    </div>
  );
};

export default StandsCard;