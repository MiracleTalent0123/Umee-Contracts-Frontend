import { Box, DataChart, Text } from 'grommet';
import * as React from 'react';

export interface InfoPanelChartProps {
  data: any[];
  series: string[];
  title?: string;
}

const InfoPanelChart = ({ data, series, title }: InfoPanelChartProps) => {
  return (
    <Box border={{ color: 'neutral-2' }} round="3px" pad="xxsmall">
      <Box direction="row" pad="small" justify="between">
        <Text size="small">{title}</Text>
        <Box direction="row" align="center" gap="xsmall">
          <Box width="10px" height="10px" round="100%" background="accent-4" />
          <Text size="small">APY</Text>
        </Box>
      </Box>
      <Box direction="row">
        <DataChart
          data={data}
          series={series}
          chart={[
            {
              property: 'apy',
              color: 'accent-4',
              thickness: 'xxsmall',
              type: 'line',
            },
            {
              property: 'apy',
              color: 'accent-4',
              thickness: 'small',
              type: 'point',
              point: 'circle',
            },
          ]}
          guide={{ y: { granularity: 'fine', }, x: false }}
          size={{ width: 'fill', height: 'xsmall' }}
          detail
        />
      </Box>
    </Box>
  );
};

export default InfoPanelChart;
