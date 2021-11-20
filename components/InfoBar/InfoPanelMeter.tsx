import { Box, Meter, MeterProps, Stack, Text, Tip } from 'grommet';
import Theme from 'lib/theme';
import React, { useEffect, useState } from 'react';

export enum InfoPanelMeterTypeEnums {
  Circle = 'circle',
  Bar = 'bar',
}

export interface InfoPanelMeterProps {
  values: MeterProps['values'];
  background?: string;
  color?: string;
  title?: string;
  textSize?: string;
  type?: InfoPanelMeterTypeEnums;
}

const InfoPanelMeter = ({
  background,
  color,
  values,
  title,
  textSize = 'medium',
  type = InfoPanelMeterTypeEnums.Circle,
}: InfoPanelMeterProps) => {

  const [themedValues, setThemedValues] = useState<MeterProps['values']>();

  const [tipTitle, setTipTitle] = useState(title);

  useEffect(() => {
    if (!values?.length) {
      return;
    }

    setThemedValues(values.map((v, i) => ({
      ...v,
      color: v.color || Theme.global.colors[`clrMeter-${i % 23 + 1}`],
      onHover: (t) => t ? setTipTitle(`${(v.value * 100).toFixed(1)}% ${v.label}`) : setTipTitle(title)
    })));
    
  }, [values, title]);

  return (
    <>
      {type === InfoPanelMeterTypeEnums.Circle && (
        <Box align="center">
          <Stack anchor="center">
            <Meter
              size="small"
              thickness="small"
              color={color || 'clrHeaderText'}
              background={background || 'clrHeaderBg'}
              type="circle"
              values={themedValues}
            />
            <Box>
              <Text textAlign="center" size={textSize}>
                {tipTitle}
              </Text>
            </Box>
          </Stack>
        </Box>
      )}
      {type === InfoPanelMeterTypeEnums.Bar && (
        <Box direction="row" align="center" gap="small" flex>
          <Box direction="column" flex>
            <Text size={textSize}>{title}</Text>
          </Box>
          <Box border={{ color: 'white' }} round={true} flex>
            <Tip content={tipTitle} dropProps={{ align: { bottom: 'top' } }} plain={true} >
              <Meter
                round={true}
                thickness="small"
                color={color || 'clrHeaderText'}
                background={background || 'clrHeaderBg'}
                type="bar"
                values={themedValues}
              />
            </Tip>
          </Box>
        </Box>
      )}
    </>
  );
};

export default InfoPanelMeter;
