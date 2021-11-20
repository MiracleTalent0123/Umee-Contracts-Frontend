import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ToggleSwitch.css';
  
export interface ToggleSwitchProps {
  choiceA?: string;
  choiceB?: string;
  label?: string;
  defaultSelected?: string;
  handler?:string;
  handleClick?: (event: any) => void;
  enabled?: boolean;
}


const ToggleSwitch = ({ label, choiceA, choiceB, defaultSelected, handler, handleClick, enabled }: ToggleSwitchProps) => {
  const [selected, setSelected] = useState(defaultSelected || choiceA);
  useEffect(() => {
    if (handler) {
      handler(selected);
    }
  }, [handler, selected]);

  const getToggleColor = (currency: string) => (selected === currency ? 'clrToggleOffText' : 'clrToggleOnText');

  return (
    <div className="container">
      <div className="toggle-switch">
        <input checked={enabled} onChange={handleClick} type="checkbox" className="checkbox" 
          name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;