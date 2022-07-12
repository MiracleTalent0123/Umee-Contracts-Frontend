import React from 'react'
import { Box, Text } from 'grommet'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'

const NoConnectWalletedBox = () => {
  return (
    <>
      <Box direction="column" alignContent="center" alignSelf="center" margin={{ top: 'large' }} pad="small">
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          <Text color="clrTextAndDataListHeader" size="medium" weight="bold">
            Please connect your wallet
          </Text>
        </Box>
        <Box justify="center" alignContent="center" alignSelf="center">
          <Text color="clrTextAndDataListHeader" textAlign='center' size="small">
            To see your deposited / borrowed assets, you need to connect your wallet.
          </Text>
        </Box>
        <Box justify="center" alignContent="center" alignSelf="center" pad="small">
          <ConnectWallet />
        </Box>
      </Box>
    </>
  )
}

export default NoConnectWalletedBox
