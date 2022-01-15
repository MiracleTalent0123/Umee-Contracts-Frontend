import React from 'react';
import { InfoPanel, InfoPanelItem, InfoPanelMeter } from 'components';
import { Box } from 'grommet';

/** TODO: ADK: Fix the anys */
export const DepositPanel = ({ total: myDepositsTotal, chart: userDepositChartData }: { total: any; chart: any }) => {
  return (
    <InfoPanel title="Deposit Information" >
      <Box flex direction="column" alignSelf="center">
        <InfoPanelItem
          centered
          title="Approximate balance"
          data={[{ value: myDepositsTotal.toFixed(2), bold: true }, { value: 'USD' }]}
        />
        <InfoPanelMeter
          title="Deposit Composition"
          values={userDepositChartData}
          // values={depositMeter}
        />
      </Box>
    </InfoPanel>
  );
};
