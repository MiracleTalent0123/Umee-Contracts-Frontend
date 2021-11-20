/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ILendingRateOracleInterface extends ethers.utils.Interface {
  functions: {
    "getMarketBorrowRate(address)": FunctionFragment;
    "setMarketBorrowRate(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMarketBorrowRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketBorrowRate",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMarketBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketBorrowRate",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILendingRateOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILendingRateOracleInterface;

  functions: {
    getMarketBorrowRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getMarketBorrowRate(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setMarketBorrowRate(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMarketBorrowRate(address,uint256)"(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getMarketBorrowRate(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMarketBorrowRate(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setMarketBorrowRate(
    asset: string,
    rate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMarketBorrowRate(address,uint256)"(
    asset: string,
    rate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getMarketBorrowRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketBorrowRate(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMarketBorrowRate(
      asset: string,
      rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMarketBorrowRate(address,uint256)"(
      asset: string,
      rate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMarketBorrowRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketBorrowRate(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMarketBorrowRate(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMarketBorrowRate(address,uint256)"(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMarketBorrowRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMarketBorrowRate(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMarketBorrowRate(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMarketBorrowRate(address,uint256)"(
      asset: string,
      rate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
