import { BigNumber, BigNumberish, constants, utils } from 'ethers';
import { bigNumberToString, bigNumberToNumber } from './number-utils';
import { IAssetPrices } from 'api/data/pricedata';
import { formatUnits } from 'ethers/lib/utils';
import { Multimedia } from 'grommet-icons';

interface IAccountData {
  totalCollateralETH: BigNumber;
  totalDebtETH: BigNumber;
  availableBorrowsETH: BigNumber;
  currentLiquidationThreshold: BigNumber;
  ltv: BigNumber;
  healthFactor: BigNumber;
}
export const getNewHealthDeposit = (
  depositAmountBN: BigNumber,
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    depositAmountBN &&
    assetPrice &&
    tokenSymbol
  ) {
    const PRECISION = assetPrecision(depositAmountBN, assetPrice);
    const newCollateralETH = UserAccountData.totalCollateralETH.add(PRECISION);

    let newHealth;
    if (!UserAccountData.totalDebtETH.isZero()) {
      newHealth = newCollateralETH
        .mul(UserAccountData?.currentLiquidationThreshold)
        .div(100)
        ?.div(UserAccountData.totalDebtETH);
    } else {
      newHealth = newCollateralETH.mul(UserAccountData?.currentLiquidationThreshold);
    }
    if (newHealth) {
      return bigNumberToString(newHealth, 2, 2);
    } else return '0';
  }
  return '0';
};

//down
export const getNewHealthWithdraws = (
  withdrawAmountBN: BigNumber,
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    withdrawAmountBN &&
    assetPrice &&
    tokenSymbol
  ) {
    const PRECISION = assetPrecision(withdrawAmountBN, assetPrice);
    const newCollateralETH = UserAccountData.totalCollateralETH.sub(PRECISION);

    let newHealth;
    if (!newCollateralETH.isZero() && !UserAccountData.totalDebtETH.isZero()) {
      newHealth = newCollateralETH
        .mul(UserAccountData?.currentLiquidationThreshold)
        .div(100)
        ?.div(UserAccountData.totalDebtETH);
    } else {
      newHealth = newCollateralETH.mul(UserAccountData?.currentLiquidationThreshold);
    }
    if (newHealth) {
      return bigNumberToString(newHealth, 2, 2);
    } else return '0';
  }
  return '0';
};

export const getMaxWithdraws = (
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string,
  decimals: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    assetPrice &&
    tokenSymbol
  ) {
    const assetEthPrecision = utils.parseUnits(assetPrice.toString(), '18');
    const maxHealthFactorPrecision = utils.parseUnits('1.1', '18');

    const healthMulDebt = maxHealthFactorPrecision.mul(UserAccountData.totalDebtETH).div(utils.parseEther('1'));
    let debtDivLiquid;
    if (!UserAccountData?.ltv.isZero()) {
      debtDivLiquid = healthMulDebt.mul(10000).div(UserAccountData?.ltv);
    } else {
      debtDivLiquid = healthMulDebt.mul(10000);
    }
    const totalWithdrawlETH = debtDivLiquid.sub(UserAccountData.totalCollateralETH);
    const postNum = totalWithdrawlETH.mul(-1);

    // Collateral(ETH) divided by assetPrice(ETH)
    // May return a total asset amount greater than total deposited
    // If price has updated since deposit has been made
    // 10 healthfactor instead of 1 to account for possible change
    const totalWithdrawlAsset = postNum.mul(utils.parseEther('1')).div(assetEthPrecision);
    const fixDecimals = parseFloat(utils.formatEther(totalWithdrawlAsset).toString()).toFixed(Number(decimals));
    const turnBigNumber = utils.parseUnits(fixDecimals, decimals);

    if (turnBigNumber.gt(0)) {
      // convert decimals
      return turnBigNumber;
    } else return BigNumber.from(0);
  }
  return BigNumber.from(0);
};

//down
export const getNewHealthBorrows = (
  borrowAmountBN: BigNumber,
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    borrowAmountBN &&
    assetPrice &&
    tokenSymbol
  ) {
    const PRECISION = assetPrecision(borrowAmountBN, assetPrice);
    const newDebtETH = UserAccountData.totalDebtETH.add(PRECISION);

    let newHealth;
    if (!newDebtETH.isZero()) {
      newHealth = UserAccountData?.totalCollateralETH
        .mul(UserAccountData?.currentLiquidationThreshold)
        .div(100)
        ?.div(newDebtETH);
    } else {
      newHealth = UserAccountData?.totalCollateralETH.mul(UserAccountData?.currentLiquidationThreshold);
    }

    if (newHealth) {
      return bigNumberToString(newHealth, 2, 2);
    } else return '0';
  }
  return '0';
};

export const getMaxBorrows = (
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string,
  decimals: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    assetPrice &&
    tokenSymbol
  ) {
    const assetEthPrecision = utils.parseUnits(assetPrice.toString(), '18');
    const maxHealthFactorPrecision = utils.parseUnits('1.1', '18');

    const collatMulLiquid = UserAccountData.totalCollateralETH.mul(UserAccountData?.ltv).div(10000);
    const maxCollDivmaxHealth = collatMulLiquid.mul(utils.parseUnits('1', '18')).div(maxHealthFactorPrecision);
    const totalBorrowEth = maxCollDivmaxHealth.sub(UserAccountData.totalDebtETH);
    const totalBorrowAsset = totalBorrowEth.mul(utils.parseEther('1')).div(assetEthPrecision);
    const fixDecimals = parseFloat(utils.formatEther(totalBorrowAsset).toString()).toFixed(Number(decimals));
    const turnBigNumber = utils.parseUnits(fixDecimals, decimals);

    if (turnBigNumber.gt(0)) {
      // convert decimals
      return turnBigNumber;
    } else return BigNumber.from(0);
  }
  return BigNumber.from(0);
};

//up
export const getNewHealthRepay = (
  repayAmountBN: BigNumber,
  UserAccountData: IAccountData,
  assetPrice: BigNumberish,
  tokenSymbol: string
) => {
  if (
    UserAccountData?.currentLiquidationThreshold &&
    UserAccountData?.totalCollateralETH &&
    UserAccountData?.totalDebtETH &&
    repayAmountBN &&
    assetPrice &&
    tokenSymbol
  ) {
    const PRECISION = assetPrecision(repayAmountBN, assetPrice);
    const newDebtETH = UserAccountData.totalDebtETH.sub(PRECISION);

    let newHealth;
    if (!newDebtETH.isZero()) {
      newHealth = UserAccountData?.totalCollateralETH
        .mul(UserAccountData?.currentLiquidationThreshold)
        .div(100)
        ?.div(newDebtETH);
    } else {
      newHealth = '-';
    }
    if (newHealth !== '-') {
      return bigNumberToString(newHealth, 2, 2);
    } else return '-';
  }
  return '0';
};

export const assetPrecision = (amountBN: BigNumber, assetPrice: BigNumberish) => {
  const ETHConv = amountBN.mul(utils.parseUnits(assetPrice.toString(), '18'));
  const ETHPrecision = ETHConv.div(utils.parseUnits('1', '18'));

  return ETHPrecision;
};

export const checkHealth = (currentHealth: string, debtETH: BigNumber) => {
  if (bigNumberToNumber(debtETH, 18) < 0.00001) {
    return '-';
  } else {
    return currentHealth;
  }
};
