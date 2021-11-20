import { Box, BoxExtendedProps, BoxProps, Text } from 'grommet';
import { AlignContentType, JustifyContentType } from 'grommet/utils';
import * as React from 'react';
import { BigNumber } from 'ethers';


export interface InfoPanelData {
  value?: string;
  textSize?: string;
  bold?: boolean;
  color?: string;
}

export enum InfoPanelItemStyles {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface InfoPanelItemProps {
  title: string;
  data: InfoPanelData[];
  style?: InfoPanelItemStyles;
  centered?: boolean;
  justify?: BoxProps['justify'];
  subTitle?: string;
  textSize?: string;
}

const InfoPanelItem = ({
  data,
  title,
  justify,
  subTitle,
  textSize,
  centered,
  style = InfoPanelItemStyles.Vertical,
}: InfoPanelItemProps) => {
  const VerticalItem = () => (
    <Box justify={justify ? justify : 'center'} pad={{ vertical: 'xsmall' }} align={centered ? 'center' : 'end'} flex>
      <Text size={textSize || 'medium'}>{title}</Text>
      <Box direction="row" align={centered ? 'center' : 'end'} gap="xsmall">
        {data &&
          data.map((datum) => (
            <Text
              key={`${title}-${datum.value}`}
              size={datum.textSize || 'medium'}
              weight={datum.bold ? 'bold' : 'normal'}
              color={datum.color}
            >
              {datum.value}
            </Text>
          ))}
      </Box>
    </Box>
  );

  const HorizontalItem = () => (
    <Box direction="row" align="center" flex justify="between">
      <Box justify="start">
        <Text size={textSize || 'medium'}>{title}</Text>
        {!!subTitle && <Text size="xsmall">{subTitle}</Text>}
      </Box>
      <Box align="end">
        {data &&
          data.map((datum) => (
            <Text
              key={`${title}-${datum.value}`}
              size={datum.textSize || 'medium'}
              weight={datum.bold ? 'bold' : 'normal'}
              color={datum.color}
            >
              {datum.value}
            </Text>
          ))}
      </Box>
    </Box>
  );

  return style === InfoPanelItemStyles.Vertical ? <VerticalItem /> : <HorizontalItem />;
};

export default InfoPanelItem;
