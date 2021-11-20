import React from 'react';

import { InfoPanelItem } from 'components';
import { InfoPanelItemStyles } from 'components/InfoBar/InfoPanelItem';
import { BoxProps } from 'grommet';

export const InfoWindowTableItem = ({
  title,
  data,
  vert,
  textSize = 'small',
  centered = false,
  justify = undefined,
}: {
  textSize?: string;
  title: string;
  justify?: BoxProps['justify'];
  data: any;
  vert?: boolean;
  centered?: boolean;
}) => {
  return (
    <InfoPanelItem
      justify={justify}
      centered={centered}
      title={title}
      textSize={textSize}
      data={data}
      style={vert ? InfoPanelItemStyles.Vertical : InfoPanelItemStyles.Horizontal}
    />
  );
};
