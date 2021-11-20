import { Box, BoxProps, Text } from 'grommet';

import React, { useEffect } from 'react';
import { ETxnSteps } from 'lib/types';

const tabDetails = {
  0: {
    clrBorder: 'status-error',
    activeHeaderBg: 'status-error',
    inactiveHeaderBg: 'status-error',
    color: 'white',
    side: null,
  },
  1: { clrBorder: 'status-ok', activeHeaderBg: 'status-ok', inactiveHeaderBg: 'status-ok', color: 'white', side: null },
  init: { clrBorder: 'clrTabBorder', activeHeaderBg: 'clrTabActive', inactiveHeaderBg: 'clrTabInactive', color: undefined, side: null },
};
export interface BaseTabProps {
  mode: string; // SB: 'active' | 'inactive' | 'final', but getting a warning on TxnOverview for some reason.
  stepVal: string;
  label: string;
  txnStep: ETxnSteps; 
  round: BoxProps['round'];
  borderCB: (color: string) => void;
}

/**
 * @param mode 'active' | 'inactive' | 'final'. Final is used for success/failure to ensure the tabs show proper side colors.
 * @param stepVal Which txn step is happening.
 * @param label What text goes into the tab.
 * @param txnStep Per the enum; mainly used to confirm Failure or Success initTabModes.
 * @param borderCB Allows the parent to draw the outer border in the expected color.
 */
export const BaseTab = ({ round, mode, stepVal, label, txnStep, borderCB }: BaseTabProps) => {
  const txnIdx = txnStep === ETxnSteps.Failure || txnStep === ETxnSteps.Success ? txnStep : 'init';
  const tabTypeBg = mode === 'active' ? 'activeHeaderBg' : 'inactiveHeaderBg';
  const textColor = (mode === 'active' || mode === 'final') ? 'clrTabActiveText' : 'clrTabInactiveText';

  /** Send the right color back to the parent, since it's the one thing we don't control here. */
  useEffect(() => {
    borderCB(tabDetails[txnIdx].clrBorder);
  }, [borderCB, txnIdx]);

  return (
    <Box
      background={{ color: tabDetails[txnIdx][tabTypeBg]}}
      border={ mode === 'final' ?  { color: tabDetails[txnIdx].color, side: 'left'} : false }
      pad="xsmall"
      direction="row"
      justify="center"
      gap="xsmall"
      round={round}
      flex
    >
      <Text size="small" color={textColor} weight="bold">
        {stepVal}
      </Text>
      <Text size="small" color={textColor} weight="bold">
        {label}
      </Text>
    </Box>
  );
};
