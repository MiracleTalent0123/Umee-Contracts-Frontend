import moment from 'dayjs'
import empty from 'is-empty'
import { memoize } from 'lodash-es'
import toString from 'lodash-es/toString'
import capitalize from 'lodash-es/capitalize'
import isString from 'lodash-es/isString'
import lowerCase from 'lodash-es/lowerCase'
import isNil from 'lodash-es/isNil'

import { TBigInput, fixed, multiply } from './Big'
import { isNumber } from './scripts'
import duration from 'dayjs/plugin/duration'

moment.extend(duration)

export const setAmountStyle = (amount: TBigInput, sizeInt: number, sizeDecimal: number) => {
  const amountArr = formatNumber(amount).split('.')
  return {
    __html: `<span style="font-size:${sizeInt}px;">${amountArr[0]}${amountArr[1] ? '.' : ''}</span>${
      amountArr[1] ? `<span style="font-size:${sizeDecimal}px;">${amountArr[1]}</span>` : ''
    }`,
  }
}

export const formatNumber = (v: TBigInput): string => {
  const str = toString(v)
  if (empty(str)) return 'NaN'
  return formatNum(str)
}

export const applyOptionalDecimal = (v: string): string => {
  if (Number(v.split('.')?.[1]) === 0) return fixed(v, 0)
  return v
}

export const formatUSD = (v: TBigInput): string => {
  const str = toString(v)
  if (empty(str) || !isNumber(str)) return 'NaN'
  return `$${formatNum(fixed(str, 2))}`
}

const formatNum = (str: string): string => {
  const n = str,
    p = n.indexOf('.')
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => (p < 0 || i < p ? `${m},` : m))
}

export const getDuration = (unix: TBigInput) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return moment.duration(unix)
}

export const get12hrTime = (unix: TBigInput): string => {
  return moment(unix).format('hh:mm:ss A')
}

export const get24hrTime = (unix: TBigInput): string => {
  return moment(unix).format('HH:mm:ss')
}

export const toNormalCase = (str: string): string => capitalize(lowerCase(str))

export const truncateString = (str: string, front: number, back: number) =>
  `${str.substr(0, front)}...${str.substr(str.length - back, str.length)}`

export const commaizeNumber = memoize((value: string | number) => {
  return String(value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
})

export const formatShowNumber = (num: number) => {
  if (Math.abs(num) < 1_000) {
    return formateNumberDecimalsAuto({ price: num }) // if value < 1000, nothing to do
  } else if (Math.abs(num) < 1_000_000) {
    return parseFloat((num / 1000).toFixed(1)) + 'K' // convert to K for number from > 1000 < 1 million
  } else if (Math.abs(num) < 1_000_000_000) {
    return parseFloat((num / 1_000_000).toFixed(1)) + 'M' // convert to M for number from > 1 million
  } else {
    return parseFloat((num / 1_000_000_000).toFixed(1)) + 'B' // convert to M for number from > 1 billion
  }
}

export const formateNumberDecimalsAuto = ({ price, maxDecimal, unit, minDecimal, minPrice }: any) => {
  minDecimal = minDecimal ? minDecimal : 2
  minPrice = minPrice ? minPrice : 1
  let res =
    formateNumberDecimals(price, detectBestDecimalsDisplay(price, minDecimal, minPrice, maxDecimal)) +
    (unit ? unit : '')
  return res
}

export const formateNumberDecimals = (price: number | bigint, decimals = 2) => {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: decimals,
  }).format(price)
}

export const detectBestDecimalsDisplay = (
  price: number | undefined,
  minDecimal = 2,
  minPrice = 1,
  maxDecimal: number,
) => {
  if (price && price > minPrice) return minDecimal
  let decimals = minDecimal
  if (price !== undefined) {
    // Find out the number of leading floating zeros via regex
    const priceSplit = price.toString().split('.')
    if (priceSplit.length === 2 && priceSplit[0] === '0') {
      const leadingZeros = priceSplit[1].match(/^0+/)
      decimals += leadingZeros ? leadingZeros[0].length + 1 : 1
    }
  }
  if (maxDecimal && decimals > maxDecimal) decimals = maxDecimal
  return decimals
}
