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
  align?: BoxProps['align'];
  justify?: BoxProps['justify'];
  subTitle?: string;
  textSize?: string;
  titleBg?: string;
  titleDirection?: BoxProps['direction'];
}

const InfoPanelItem = ({
  data,
  title,
  justify,
  subTitle,
  textSize,
  align,
  titleBg,
  titleDirection,
  style = InfoPanelItemStyles.Vertical,
}: InfoPanelItemProps) => {
  const VerticalItem = () => (
    <Box justify={justify ? justify : 'center'} pad={{ vertical: 'xsmall' }} align={align ? align : 'end'} flex>
      {titleBg ? (
        <Box align="center" direction={titleDirection}>
          <Box margin={{ top: '2px', horizontal: '2px' }} width="10px" height="10px" background={titleBg} />
          <Text size={textSize || 'medium'}>{title}</Text>
        </Box>
      ) : (
        <Text size={textSize || 'medium'}>{title}</Text>
      )}
      <Box direction="row" align={align ? align : 'end'}>
        {data &&
          data.map((datum) => (
            <Text
              key={`${title}-${datum.value}`}
              size={datum.textSize || 'medium'}
              weight={datum.bold ? 'bold' : 'normal'}
              color={datum.color}
              style={{ lineHeight: '22px' }}
            >
              {datum.value}
            </Text>
          ))}
      </Box>
    </Box>
  );

  const HorizontalItem = () => (
    <Box direction="row" align="center" flex justify={justify ? justify : 'between'}>
      <Box justify="start">
        <Text size={textSize || 'medium'}>{title}</Text>
        {!!subTitle && <Text size="xsmall">{subTitle}</Text>}
      </Box>
      <Box direction="row" align="end" margin={{ left: 'xsmall' }}>
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
