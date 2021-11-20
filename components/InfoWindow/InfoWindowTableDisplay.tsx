import { InfoBar, InfoBarHeader, InfoBarBody, InfoPanel } from 'components';
import React from 'react';
import { Box } from 'grommet';

/**
 *
 * @param flat To account for withdrawToken's different bar
 */
export const infoWinTblItemStyle = { bold: true, textSize: 'small' };
export const InfoWindowTableDisplay: React.FC<{ title: string; flat?: boolean }> = ({
  children,
  title,
  flat = false,
}) => {
  return (
    <InfoBar>
      <InfoBarHeader />
      <InfoBarBody>
        <InfoPanel title={title}>
          {flat ? (
            <>{children}</>
          ) : (
            <Box direction="row" width="75%" margin={{ right: 'medium' }}>
              {children}
            </Box>
          )}
        </InfoPanel>
      </InfoBarBody>
    </InfoBar>
  );
};
