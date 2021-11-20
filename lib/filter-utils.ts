import { IAvailableDepositsData } from 'components/AvailableDepositsDataList';
import { IAvailableBorrowsData } from 'components/AvailableBorrowsDataList';

const stableCoins = ['BUSD', 'DAI', 'USDC', 'USDT', 'SUSD', 'TUSD'];
export interface IAvailableAssetList {
  symbol: string;
}
// export const isStable = (token: IAvailableDepositsData) => {
//   return stableCoins.reduce((stable, name) => {
//     if(name === token.symbol){
//       stable = true;
//     }
//     return stable;
//   },<boolean>(false));
// };

export const stableFilter = <T extends IAvailableAssetList>(arr: T[]): T[] => {
  return arr.filter(t => stableCoins.includes(t.symbol));
};
//will use for search
export const searchFilter = <T extends IAvailableAssetList>(term: string, arr: T[]): T[] => {
  return term ? arr.filter(t => t.symbol.toLowerCase().includes(term.toLowerCase())) : arr;
};