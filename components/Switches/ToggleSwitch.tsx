import { Box, ResponsiveContext, Text, Image } from 'grommet';
import { Chain } from 'lib/hooks/chain/context';
import * as React from 'react';
import './ToggleSwitch.css';
import CosmosWhite from '../../public/images/cosmos_white.png';
import CosmosDark from '../../public/images/cosmos_navy.png';
import EthWhite from '../../public/images/ethereum_white.png';
import EthDark from '../../public/images/ethereum_navy.png';
import { Theme, useTheme } from 'lib/hooks/theme/context';

const { useEffect, useState } = React;

export interface ToggleSwitchProps {
  choiceA: Chain;
  choiceB: Chain;
  defaultSelected?: Chain;
  handler?(selected: Chain): void;
  isMobile?: boolean;
}

const ToggleSwitch = ({ choiceA, choiceB, defaultSelected, handler, isMobile }: ToggleSwitchProps) => {
  const [selected, setSelected] = useState(defaultSelected || choiceA);
  const size = React.useContext(ResponsiveContext);
  const { themeMode } = useTheme();

  useEffect(() => {
    if (handler) {
      handler(selected);
    }
  }, [handler, selected]);

  const getToggleColor = (currency: string) => (selected === currency ? 'clrToggleOnText' : 'clrToggleOffText');

  return (
    <Box
      round={'xlarge'}
      width={size === 'small' || size === 'medium' ? '64px' : 'small'}
      className="toggle-box"
      pad="2px"
      background="clrToggleBG"
      height={size === 'small' || size === 'medium' ? '30px' : '36px'}
      onClick={() => setSelected(selected === choiceA ? choiceB : choiceA)}
    >
      <Box style={{ position: 'relative' }} direction="row" height={'100%'}>
        <Box
          round={'xlarge'}
          pad="xsmall"
          height="100%"
          className="toggle-active"
          width={'50%'}
          background="clrBackground"
          style={selected === choiceA ? { left: 0 } : { left: '100%', transform: 'translatex(-100%)' }}
        />
        <Box
          round={'xlarge'}
          focusIndicator={false}
          justify="center"
          align="center"
          width={size === 'small' || size === 'medium' ? 'xxsmall' : 'xsmall'}
          pad="xsmall"
          height="100%"
        >
          {size === 'small' || size === 'medium' ? (
            <Image
              src={
                isMobile
                  ? CosmosWhite
                  : themeMode == Theme.dark
                    ? CosmosWhite
                    : defaultSelected === choiceB
                      ? CosmosWhite
                      : CosmosDark
              }
              alt=""
              style={{ zIndex: 1 }}
            />
          ) : (
            <Text className="toggle-label letter-spacing" size="xsmall" color={getToggleColor(choiceA)}>
              {choiceA}
            </Text>
          )}
        </Box>
        <Box
          round={'xlarge'}
          focusIndicator={false}
          justify="center"
          align="center"
          width={size === 'small' || size === 'medium' ? 'xxsmall' : 'xsmall'}
          pad="xsmall"
          height="100%"
        >
          {size === 'small' || size === 'medium' ? (
            <Image
              src={
                isMobile
                  ? EthWhite
                  : themeMode == Theme.dark
                    ? EthWhite
                    : defaultSelected === choiceA
                      ? EthWhite
                      : EthDark
              }
              alt=""
              style={{ zIndex: 1 }}
            />
          ) : (
            <Text className="toggle-label letter-spacing" size="xsmall" color={getToggleColor(choiceB)}>
              {choiceB}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ToggleSwitch;
