import { Box, MaskedInput, Select, Text } from 'grommet';
import * as Icons from 'grommet-icons';
import * as React from 'react';
import TokenLogo from '../TokenLogo';

const { useEffect, useState } = React;

export interface TokenDropdownProps {
  tokens: string[];
  selectedToken?: string;
  setSelectedToken(token: string): void;
}

const TokenDropdown = ({ tokens, selectedToken, setSelectedToken }: TokenDropdownProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (tokens[selectedIndex] !== selectedToken) {
      setSelectedToken(tokens[selectedIndex]);
    }
  }, [selectedIndex, tokens, selectedToken, setSelectedToken]);

  const renderSelect = () => (
    <Box direction="row" background="accent-1" pad="xsmall" round="3px" align="center" flex justify="between">
      <TokenLogo symbol={tokens[selectedIndex]} width="25px" height="25px" />
      <Box pad={{ left: 'xsmall' }}>
        <Text size="small" weight="bold">
          {tokens[selectedIndex]}
        </Text>
      </Box>
      <Icons.FormDown />
    </Box>
  );

  const renderSelectOption = (token: string, state: { active: boolean }) => (
    <Box
      direction="row"
      background={state.active ? 'accent-1' : undefined}
      pad="xsmall"
      gap="xsmall"
      round="3px"
      align="center"
    >
      <TokenLogo symbol={token} width="25px" height="25px" />
      <Text size="small" weight="bold">
        {token}
      </Text>
    </Box>
  );

  return (
    <Select
      options={tokens}
      onChange={({ selected }) => setSelectedIndex(selected)}
      icon={false}
      value={renderSelect()}
    >
      {renderSelectOption}
    </Select>
  );
};

export default TokenDropdown;
