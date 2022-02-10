import { BigNumber, BigNumberish, utils } from 'ethers';
import { formatEther } from 'ethers/lib/utils';

export const isZero = (number: string | number) => {
  if (typeof number === 'number' && number === 0) return true;
  return parseFloat(number as string) === 0;

};

export const truncateAfterDecimals = (number: string | number, decimals: number): number => {
  const dotPos = number.toString().indexOf('.');
  return Number(dotPos < 0 ? number : number.toString().slice(0, dotPos + decimals + 1));
};

export const BN = (value: BigNumberish) => BigNumber.from(value);

export const bigNumberToString = (value: BigNumberish, decimals: BigNumberish, toFixed = 2): string =>
  !!value ? parseFloat(utils.formatUnits(value, decimals)).toFixed(toFixed) : '';
  
export const safeBigNumberToStringTruncate = (value: BigNumberish, decimals: BigNumberish): string => {
  if (parseFloat(utils.formatUnits(value, decimals)).toFixed(2) < '0.01') {
    return '<0.01'; 
  }
  return parseFloat(utils.formatUnits(value, decimals)).toFixed(2).toString();              
};

export const safeBigNumberToStringAllDecimals = (value: BigNumberish, decimals: BigNumberish): string => {
  if (parseFloat(utils.formatUnits(value, decimals)).toFixed(2) < '0.01') {
    return bigNumberToString(value, decimals, 18);
  }
  return parseFloat(utils.formatUnits(value, decimals)).toFixed(2).toString();
};


export const bigNumberToNumber = (value: BigNumberish, decimals: BigNumberish): number =>
  !!value ? parseFloat(utils.formatUnits(value, decimals)) : NaN;

export const bigNumberToUSDString = (value: BigNumberish, decimals: BigNumberish, usdValue = 0, toFixed = 2): string =>
  !!value ? (parseFloat(bigNumberToString(value, decimals)) * usdValue).toFixed(toFixed) : '';
  
export const safeBigNumberToUSDStringTruncate = (value: BigNumberish, decimals: BigNumberish, usdValue = 0): string => {
  if (bigNumberToUSDString(value, decimals, usdValue) < '0.01') {
    return '<$0.01';
  }
  return ('$' + bigNumberToUSDString(value, decimals, usdValue));
};

export const bigNumberToUSDNumber = (value: BigNumberish, decimals: BigNumberish, usdValue = 0): number =>
  !!value ? bigNumberToNumber(value, decimals) * usdValue : NaN;

export const stringToUSDString = (value: string, usdValue = 0, toFixed = 2): string =>
  (parseFloat(value) * usdValue).toFixed(toFixed);

export const stringToBigNumber = (value: string, decimals: BigNumberish): BigNumber =>
  utils.parseUnits(value, decimals);

export const bigNumberToUSDFormattedStringFull = (value: BigNumber, decimals: BigNumber, usdValue = 0): string =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    bigNumberToUSDNumber(value, decimals, usdValue)
  );

export const bigNumberToUSDFormattedStringCompact = (value: BigNumber, decimals: BigNumber, usdValue = 0): string =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(
    bigNumberToUSDNumber(value, decimals, usdValue)
  );

export const bigNumberETHToString = (value: BigNumber, usdValue = 0, toFixed = 2): string =>
  !!value ? (parseFloat(formatEther(value)) * usdValue).toFixed(toFixed) : '';
