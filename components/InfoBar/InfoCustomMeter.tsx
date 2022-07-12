import { Meter, ResponsiveContext } from 'grommet'
import { Theme, useTheme } from 'lib/hooks/theme/context'
import React, { useContext, useEffect, useState } from 'react'

const InfoCustomMeter = ({ value }: { value?: number }) => {
  const size = useContext(ResponsiveContext)

  const [strokeDasharray1, setStrokeDasharray1] = useState<string>('0, 376.8')
  const [strokeDasharray2, setStrokeDasharray2] = useState<string>('376.8, 376.8')
  const { themeMode } = useTheme()

  useEffect(() => {
    if (value) {
      const length1 = 376.8 * value
      const length2 = 376.8 - length1
      setStrokeDasharray1(length1 + ', 376.8')
      setStrokeDasharray2(length2 + ', 376.8')
    }
  }, [value])

  return size !== 'small' ? (
    <svg width="150" height="150">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#F386FF" />
          <stop offset="100%" stopColor="#43E0FD" />
        </linearGradient>
      </defs>
      <circle
        style={{
          transform: 'rotateY(180deg) rotateZ(-90deg)',
          transformOrigin: 'center',
          transition: 'ease-in-out 1.2s',
        }}
        cx="75"
        cy="75"
        r="60"
        stroke={themeMode === Theme.dark ? 'white' : '#131A33'}
        strokeWidth="10"
        fill="none"
        strokeDasharray={strokeDasharray2}
      />
      <path
        d="M 75,15 A 60 60 0 1 1 75 135 A 60 60 0 1 1 75 15"
        stroke="url(#linear)"
        strokeWidth="10"
        fill="none"
        strokeDasharray={strokeDasharray1}
        style={{ transition: 'ease-in-out 1.2s' }}
      />
    </svg>
  ) : value ? (
    <Meter
      values={[
        {
          value: value * 100,
          color: 'var(--umee-full-green)',
        },
      ]}
      aria-label="meter"
      type='circle'
      thickness='xsmall'
      background={'var(--umee-full-pink)'}
      size='full'
    />
  ) : null
}

export default InfoCustomMeter
