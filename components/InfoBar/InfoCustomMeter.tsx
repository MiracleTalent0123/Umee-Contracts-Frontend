import React, { useEffect, useState } from 'react';

const InfoCustomMeter = ({ value }: { value?: number }) => {
  const [strokeDasharray, setStrokeDasharray] = useState<string>('0, 376.8');
  useEffect(() => {
    if (value) {
      const length = 376.8 * value;
      setStrokeDasharray(length + ', 376.8');
    }
  }, [value]);

  return (
    <svg width="150" height="150">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#F386FF" />
          <stop offset="100%" stopColor="#43E0FD" />
        </linearGradient>
      </defs>
      <circle cx="75" cy="75" r="60" stroke="#131A33" strokeWidth="10" fill="none" />
      <path
        d="M 75,15 A 60 60 0 1 1 75 135 A 60 60 0 1 1 75 15"
        stroke="url(#linear)"
        strokeWidth="10"
        fill="none"
        strokeDasharray={strokeDasharray}
        style={{ transition: 'ease-in-out 1.2s' }}
      />
    </svg>
  );
};

export default InfoCustomMeter;
