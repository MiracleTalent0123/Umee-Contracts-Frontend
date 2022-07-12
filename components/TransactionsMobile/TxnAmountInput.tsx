import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TTxnAvailability } from 'lib/types'
import { PrimaryBtn } from 'components/common'
import HoverEffect from 'components/common/HoverEffect'
import { Box, Text } from 'grommet'
import { utils } from 'ethers'
import { truncateAfterDecimals } from 'lib/number-utils'
import './NumberInputMobile.css'
import { TxnUsdPrice } from 'components/Transactions/TxnUsdPrice'

interface TTxnAmountInput {
  setTxnAmount: (amount: string) => void
  txnAvailability: TTxnAvailability
  disabled?: boolean
  txnAmount: string
  setIsPreview: () => void
}

const deleteCode = '\u2190'

const TxnAmountInput = ({ setTxnAmount, disabled, txnAvailability, txnAmount, setIsPreview }: TTxnAmountInput) => {
  const { availableAmount, token, tokenDecimals } = txnAvailability
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLSpanElement>()
  const scrollToRightLocker = useRef<boolean>(true)
  const maxBalance = Number(utils.formatUnits(availableAmount, tokenDecimals))
  const maxAmount = maxBalance > 0 ? maxBalance : 0
  const [percent, setPercent] = useState<number>(0)

  useEffect(() => {
    if (inputRef.current && !scrollToRightLocker.current) {
      scrollToRightLocker.current = true
      inputRef.current.scrollLeft = inputRef.current.scrollWidth
    }
  }, [input])

  const handleKeyClick = (key: string | number) => {
    if (maxAmount === 0) return

    let value = ''
    if (key === '.') {
      if (input.length === 0) value = '0.'
      else if (!input.includes('.')) value = input + '.'
      else return
    } else if (key === deleteCode) {
      if (input.length === 1 || (input.length === 2 && input[0] === '0')) {
        value = ''
      } else value = input.slice(0, -1)
    } else {
      if (key === 0) {
        if (input.length === 0 || input === '0') return
      }
      if (key !== 0 && input === '0') value = key.toString()
      else value = input + key
    }
    setInput(value)

    const inputValue = truncateAfterDecimals(eval(value) || 0, Number(tokenDecimals))
    const max = Math.max(Math.min(inputValue, maxAmount), 0).toString()
    setTxnAmount(max)
    if (inputValue > maxAmount) {
      setInput(maxAmount.toString())
      setPercent(100)
    } else if (maxAmount > 0) setPercent(Math.round((inputValue / maxAmount) * 100))

    scrollToRightLocker.current = false
  }

  const setAmountPercent = (value: number) => {
    if (maxAmount === 0) return
    const txnAmount = ((maxAmount * value) / 100).toString()
    setInput(truncateAfterDecimals(txnAmount, Number(tokenDecimals)).toString())
    setPercent(value)
    setTxnAmount(truncateAfterDecimals(txnAmount, Number(tokenDecimals)).toString())
  }

  return (
    <Box margin={{ top: 'medium' }}>
      <Box style={{ position: 'relative' }}>
        <Box style={{ overflowX: 'auto', textAlign: 'center', display: 'block' }} ref={inputRef}>
          {input.length === 0 && (
            <Text
              color="clrTextAndDataListHeader"
              size="large"
              textAlign="center"
              style={{ fontFamily: 'monospace', position: 'absolute', left: 0, right: 0 }}
            >
              0
            </Text>
          )}
          <Text color="clrTextAndDataListHeader" size="large" alignSelf="center" style={{ fontFamily: 'monospace' }}>
            {input}
          </Text>
          <Text
            size="large"
            alignSelf="center"
            className="NumberInputMobile__underscore"
            color="clrTextAndDataListHeader"
            style={{ fontFamily: 'monospace' }}
          >
            _
          </Text>
        </Box>
      </Box>
      <Box margin={{ top: 'xsmall' }} direction="row" justify="center">
        <TxnUsdPrice symbol={token.symbol} txnAmount={txnAmount} />
      </Box>
      <Box direction="row" justify="between" margin={{ vertical: 'large' }}>
        {[25, 50, 75, 100].map((value) => (
          <HoverEffect
            pad="small"
            key={value}
            width="25%"
            border={{ color: 'clrDetailBoxBorderTop3' }}
            style={{ borderWidth: 1, borderStyle: 'solid', borderRadius: '5px', cursor: 'pointer' }}
            className="NumberInputMobile__percent"
            margin={{ horizontal: 'small' }}
            onClick={() => setAmountPercent(value)}
            background={percent === value ? 'clrDetailBoxBorderTop3' : ''}
          >
            <Text
              weight={percent === value ? 'bold' : 'normal'}
              color={percent === value ? 'clrWhite' : 'clrTextAndDataListHeader'}
              size="small"
              textAlign="center"
            >
              {value}%
            </Text>
          </HoverEffect>
        ))}
      </Box>

      <Box
        direction="row"
        style={{ flexWrap: 'wrap', maxWidth: '20em' }}
        width="100%"
        margin="auto"
        pad={{ bottom: 'large' }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, deleteCode].map((value) => (
          <HoverEffect key={value} width="33.3%" height="3.5em" onClick={() => handleKeyClick(value)}>
            <Text color="clrTextAndDataListHeader" textAlign="center" margin="auto">
              {value}
            </Text>
          </HoverEffect>
        ))}
      </Box>

      <PrimaryBtn
        disabled={Number(txnAmount) === 0 || availableAmount.toNumber() < Number(input)}
        round="large"
        onClick={setIsPreview}
      >
        Preview transaction
      </PrimaryBtn>
    </Box>
  )
}

export default TxnAmountInput
