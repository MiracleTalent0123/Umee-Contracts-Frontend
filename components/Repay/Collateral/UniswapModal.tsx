import React from 'react';
import { Box, Text } from 'grommet';
import { BaseModal } from 'components/common/BaseModal';
import { StdBtn } from 'components/common';

export const UniswapModal = ({ onClose }: { onClose: any }) => {
  return (
    <BaseModal onClose={onClose}>
      <Box
        direction="column"
        alignContent="center"
        alignSelf="center"
        border={{ color: 'clrInfoPanelBorder', size: 'large' }}
        pad="medium"
        width="medium"
        background="clrDefaultBg"
      >
        <Box justify="center" pad="small">
          <Text size="medium">
						To repay with collateral: 
            <ul>
              <li>withdraw available collateral from Umee</li>
              <li>swap it for the token you need to repay on a DEX like 
                <Text size="medium" color="clrUrlLink">
                  <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer">
                    {' '}
										Uniswap
                  </a>.
                </Text>
              </li>
              <li>return to Umee to complete your repayment using the &quot;from your wallet balance&quot; option</li>
            </ul>
          </Text>
        </Box>
        <Box justify="center" pad="small">
          <a href="https://app.uniswap.org/#/swap" target="_blank" rel="noreferrer">
            <StdBtn text="Proceed to Uniswap" onClick={onClose}/>
          </a>
        </Box>
      </Box>
    </BaseModal>
  );
};
