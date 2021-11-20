import React from 'react';
import { Box, Button, Text, Table, TableBody, TableRow, TableCell } from 'grommet';
import { BigNumber, ethers } from 'ethers';
import { bigNumberToString } from 'lib/number-utils';
import { TextItem, PrimaryText, SubText } from '../DataList';
import { Close } from 'grommet-icons';
import { LozengeBtn } from 'components/common/Buttons/LozengeBtn';
import { BaseModal } from 'components/common/BaseModal';
import { constants } from 'buffer';
import { parse } from '@ethersproject/transactions';
export interface IInfoDetailPopUp {
  userData: {
    totalCollateralETH: BigNumber;
    totalDebtETH: BigNumber;
    availableBorrowsETH: BigNumber;
    currentLiquidationThreshold: BigNumber;
    ltv: BigNumber;
    healthFactor: BigNumber;
  };
  show: boolean;
  setShow(show: boolean): void;
  showButton: boolean;
}

const InfoDetailPopUp = ({ userData, show, setShow, showButton }: IInfoDetailPopUp) => {
  return (
    <Box pad={{ vertical: 'xsmall' }}>
      {showButton && <LozengeBtn label="Details" onClick={() => setShow(true)} />}
      {show && (
        <BaseModal onClose={() => setShow(false)}>
          <Box pad="small" width="medium" background="neutral-1" basis="auto">
            <Box pad="small">
              <Text color="clrMessageTitle" weight="bold" alignSelf="center">
                Liquidation Overview
              </Text>
              <Text alignSelf="center">
                <SubText color="black">Details about your Loan to Value (LTV) ratio and liquidation.</SubText>
              </Text>
            </Box>
            <Box
              justify="center"
              alignContent="center"
              alignSelf="center"
              pad="small"
              border={{ color: 'brand', size: 'small' }}
            >
              <Table alignSelf="stretch">
                <TableBody>
                  <TableRow>
                    <TableCell scope="row" alignSelf="stretch">
                      Current LTV
                    </TableCell>
                    <TableCell alignSelf="stretch">
                      <TextItem> 
                        <PrimaryText>{bigNumberToString((userData.totalDebtETH.mul(ethers.constants.WeiPerEther).div(userData.totalCollateralETH).mul(100)), 18)}%</PrimaryText>
                      </TextItem>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row" alignSelf="stretch">
                      Maximum LTV
                    </TableCell>
                    <TableCell alignSelf="stretch">
                      <TextItem>
                        <PrimaryText>{bigNumberToString(userData.ltv, 2)}% </PrimaryText>
                      </TextItem>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row" alignSelf="stretch">
                      Liquidation Threshold
                    </TableCell>
                    <TableCell alignSelf="stretch">
                      <TextItem>
                        <PrimaryText>{bigNumberToString(userData.currentLiquidationThreshold, 2)}%</PrimaryText>
                      </TextItem>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        </BaseModal>
      )}
    </Box>
  );
};

export default InfoDetailPopUp;
