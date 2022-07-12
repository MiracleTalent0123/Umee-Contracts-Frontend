import React from 'react'
import { Box, Text } from 'grommet'
import capitalize from 'lodash/capitalize'
import TokenLogo from 'components/TokenLogo'
import MenuOpen from 'components/common/MenuOpen'
import { ETxnType } from 'lib/types'
import { Close, Previous } from 'grommet-icons'
import { TokenItem } from 'components/DataList'
import HoverEffect from 'components/common/HoverEffect'

interface TransactionHeaderProps {
  txnType?: ETxnType
  symbol?: string
  openMenu?: () => void
  isPreview?: boolean
  setIsPreview?: (isPreview: boolean) => void
}

const TransactionHeader = ({ txnType, symbol, openMenu, isPreview, setIsPreview }: TransactionHeaderProps) => {
  return txnType === ETxnType.markets ? (
    <Box direction="row" justify="between">
      <TokenItem name={symbol || ''} textSize="24px" fontFamily="Moret" />
      {openMenu && <MenuOpen onClick={openMenu} />}
    </Box>
  ) : (
    <Box style={{ position: 'relative' }}>
      {isPreview && setIsPreview && (
        <HoverEffect
          pad='medium'
          round='small'
          style={{ position: 'absolute', left: 0, cursor: 'pointer', top: '50%', transform: 'translateY(-50%)' }}
          onClick={() => setIsPreview(false)}
        >
          <Previous
            color="clrTextAndDataListHeader"
            size="16px"
          />
        </HoverEffect>
      )}
      <Box align="center" direction="row" justify="center">
        <Box style={{ position: 'relative' }}>
          <Text
            color="clrTextAndDataListHeader"
            margin={{ right: 'small' }}
            style={{ position: 'absolute', right: '100%', top: '50%', transform: 'translateY(-50%)' }}
            className='font-moret'
            size='24px'
          >
            {txnType && capitalize(txnType.toString())}
          </Text>
          <TokenLogo width="36" height="36" symbol={symbol} />
          <Text
            color="clrTextAndDataListHeader"
            margin={{ left: 'small' }}
            style={{ position: 'absolute', left: '100%', top: '50%', transform: 'translateY(-50%)' }}
            className='font-moret'
            size='24px'
          >
            {capitalize(symbol)}
          </Text>
        </Box>
      </Box>
      <Box style={{ position: 'absolute', right: 0, borderRadius: '5px', top: '50%', transform: 'translateY(-50%)' }}>
        {isPreview && setIsPreview ? (
          <HoverEffect
            pad='medium'
            round='small'
            onClick={() => setIsPreview(false)}
          >
            <Close
              size="16px"
              style={{ cursor: 'pointer' }}
              color="clrTextAndDataListHeader"
            />
          </HoverEffect>
        ) : openMenu && (
          <MenuOpen onClick={openMenu} />
        )}
      </Box>
    </Box>
  )
}

export default TransactionHeader
