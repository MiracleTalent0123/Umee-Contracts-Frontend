import * as React from 'react';
import { Box, Text, Image } from 'grommet';
import * as Icons from 'grommet-icons';
import { useWeb3 } from 'api/web3/';

export interface IExplorerLink {
    txnHash?: string;
}
const ExplorerLink = ({txnHash}: IExplorerLink) => {
  const { chainId } = useWeb3();
  const subdomain = chainId === 1 ? '' : 'kovan.';
  return (
    <>
      {txnHash && <a href={`https://${subdomain}etherscan.io/tx/${txnHash}`} target="_blank" rel="noreferrer noopener">
        <Text size="xsmall">
                        Explorer <Icons.Share size="small" color="accent-2" />
        </Text>
      </a>}
    </>
  );
};

export default ExplorerLink;