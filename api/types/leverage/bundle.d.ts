import * as $protobuf from "protobufjs";
/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Creates a new Coin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Coin instance
                 */
                public static create(properties?: cosmos.base.v1beta1.ICoin): cosmos.base.v1beta1.Coin;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Creates a new DecCoin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecCoin instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IDecCoin): cosmos.base.v1beta1.DecCoin;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Creates a new IntProto instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntProto instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IIntProto): cosmos.base.v1beta1.IntProto;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Creates a new DecProto instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DecProto instance
                 */
                public static create(properties?: cosmos.base.v1beta1.IDecProto): cosmos.base.v1beta1.DecProto;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace umeenetwork. */
export namespace umeenetwork {

    /** Namespace umee. */
    namespace umee {

        /** Namespace leverage. */
        namespace leverage {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a Msg */
                class Msg extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Msg service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Msg service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Msg;

                    /**
                     * Calls LendAsset.
                     * @param request MsgLendAsset message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgLendAssetResponse
                     */
                    public lendAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset, callback: umeenetwork.umee.leverage.v1beta1.Msg.LendAssetCallback): void;

                    /**
                     * Calls LendAsset.
                     * @param request MsgLendAsset message or plain object
                     * @returns Promise
                     */
                    public lendAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset): Promise<umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse>;

                    /**
                     * Calls WithdrawAsset.
                     * @param request MsgWithdrawAsset message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgWithdrawAssetResponse
                     */
                    public withdrawAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset, callback: umeenetwork.umee.leverage.v1beta1.Msg.WithdrawAssetCallback): void;

                    /**
                     * Calls WithdrawAsset.
                     * @param request MsgWithdrawAsset message or plain object
                     * @returns Promise
                     */
                    public withdrawAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset): Promise<umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse>;

                    /**
                     * Calls SetCollateral.
                     * @param request MsgSetCollateral message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgSetCollateralResponse
                     */
                    public setCollateral(request: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral, callback: umeenetwork.umee.leverage.v1beta1.Msg.SetCollateralCallback): void;

                    /**
                     * Calls SetCollateral.
                     * @param request MsgSetCollateral message or plain object
                     * @returns Promise
                     */
                    public setCollateral(request: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral): Promise<umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse>;

                    /**
                     * Calls BorrowAsset.
                     * @param request MsgBorrowAsset message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgBorrowAssetResponse
                     */
                    public borrowAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset, callback: umeenetwork.umee.leverage.v1beta1.Msg.BorrowAssetCallback): void;

                    /**
                     * Calls BorrowAsset.
                     * @param request MsgBorrowAsset message or plain object
                     * @returns Promise
                     */
                    public borrowAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset): Promise<umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse>;

                    /**
                     * Calls RepayAsset.
                     * @param request MsgRepayAsset message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgRepayAssetResponse
                     */
                    public repayAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset, callback: umeenetwork.umee.leverage.v1beta1.Msg.RepayAssetCallback): void;

                    /**
                     * Calls RepayAsset.
                     * @param request MsgRepayAsset message or plain object
                     * @returns Promise
                     */
                    public repayAsset(request: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset): Promise<umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse>;

                    /**
                     * Calls Liquidate.
                     * @param request MsgLiquidate message or plain object
                     * @param callback Node-style callback called with the error, if any, and MsgLiquidateResponse
                     */
                    public liquidate(request: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate, callback: umeenetwork.umee.leverage.v1beta1.Msg.LiquidateCallback): void;

                    /**
                     * Calls Liquidate.
                     * @param request MsgLiquidate message or plain object
                     * @returns Promise
                     */
                    public liquidate(request: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate): Promise<umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse>;
                }

                namespace Msg {

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#lendAsset}.
                     * @param error Error, if any
                     * @param [response] MsgLendAssetResponse
                     */
                    type LendAssetCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#withdrawAsset}.
                     * @param error Error, if any
                     * @param [response] MsgWithdrawAssetResponse
                     */
                    type WithdrawAssetCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#setCollateral}.
                     * @param error Error, if any
                     * @param [response] MsgSetCollateralResponse
                     */
                    type SetCollateralCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#borrowAsset}.
                     * @param error Error, if any
                     * @param [response] MsgBorrowAssetResponse
                     */
                    type BorrowAssetCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#repayAsset}.
                     * @param error Error, if any
                     * @param [response] MsgRepayAssetResponse
                     */
                    type RepayAssetCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Msg#liquidate}.
                     * @param error Error, if any
                     * @param [response] MsgLiquidateResponse
                     */
                    type LiquidateCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse) => void;
                }

                /** Properties of a MsgLendAsset. */
                interface IMsgLendAsset {

                    /** MsgLendAsset lender */
                    lender?: (string|null);

                    /** MsgLendAsset amount */
                    amount?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgLendAsset. */
                class MsgLendAsset implements IMsgLendAsset {

                    /**
                     * Constructs a new MsgLendAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset);

                    /** MsgLendAsset lender. */
                    public lender: string;

                    /** MsgLendAsset amount. */
                    public amount?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgLendAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgLendAsset instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset): umeenetwork.umee.leverage.v1beta1.MsgLendAsset;

                    /**
                     * Encodes the specified MsgLendAsset message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLendAsset.verify|verify} messages.
                     * @param message MsgLendAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgLendAsset message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLendAsset.verify|verify} messages.
                     * @param message MsgLendAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgLendAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgLendAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgLendAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgLendAsset;

                    /**
                     * Decodes a MsgLendAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgLendAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgLendAsset;

                    /**
                     * Verifies a MsgLendAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgLendAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgLendAsset
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgLendAsset;

                    /**
                     * Creates a plain object from a MsgLendAsset message. Also converts values to other types if specified.
                     * @param message MsgLendAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgLendAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgLendAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgWithdrawAsset. */
                interface IMsgWithdrawAsset {

                    /** MsgWithdrawAsset lender */
                    lender?: (string|null);

                    /** MsgWithdrawAsset amount */
                    amount?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgWithdrawAsset. */
                class MsgWithdrawAsset implements IMsgWithdrawAsset {

                    /**
                     * Constructs a new MsgWithdrawAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset);

                    /** MsgWithdrawAsset lender. */
                    public lender: string;

                    /** MsgWithdrawAsset amount. */
                    public amount?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgWithdrawAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgWithdrawAsset instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset;

                    /**
                     * Encodes the specified MsgWithdrawAsset message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset.verify|verify} messages.
                     * @param message MsgWithdrawAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgWithdrawAsset message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset.verify|verify} messages.
                     * @param message MsgWithdrawAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgWithdrawAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgWithdrawAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset;

                    /**
                     * Decodes a MsgWithdrawAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgWithdrawAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset;

                    /**
                     * Verifies a MsgWithdrawAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgWithdrawAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgWithdrawAsset
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset;

                    /**
                     * Creates a plain object from a MsgWithdrawAsset message. Also converts values to other types if specified.
                     * @param message MsgWithdrawAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgWithdrawAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgWithdrawAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgSetCollateral. */
                interface IMsgSetCollateral {

                    /** MsgSetCollateral borrower */
                    borrower?: (string|null);

                    /** MsgSetCollateral denom */
                    denom?: (string|null);

                    /** MsgSetCollateral enable */
                    enable?: (boolean|null);
                }

                /** Represents a MsgSetCollateral. */
                class MsgSetCollateral implements IMsgSetCollateral {

                    /**
                     * Constructs a new MsgSetCollateral.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral);

                    /** MsgSetCollateral borrower. */
                    public borrower: string;

                    /** MsgSetCollateral denom. */
                    public denom: string;

                    /** MsgSetCollateral enable. */
                    public enable: boolean;

                    /**
                     * Creates a new MsgSetCollateral instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgSetCollateral instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral): umeenetwork.umee.leverage.v1beta1.MsgSetCollateral;

                    /**
                     * Encodes the specified MsgSetCollateral message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgSetCollateral.verify|verify} messages.
                     * @param message MsgSetCollateral message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgSetCollateral message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgSetCollateral.verify|verify} messages.
                     * @param message MsgSetCollateral message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateral, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgSetCollateral message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgSetCollateral
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgSetCollateral;

                    /**
                     * Decodes a MsgSetCollateral message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgSetCollateral
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgSetCollateral;

                    /**
                     * Verifies a MsgSetCollateral message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgSetCollateral message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgSetCollateral
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgSetCollateral;

                    /**
                     * Creates a plain object from a MsgSetCollateral message. Also converts values to other types if specified.
                     * @param message MsgSetCollateral
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgSetCollateral, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgSetCollateral to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgBorrowAsset. */
                interface IMsgBorrowAsset {

                    /** MsgBorrowAsset borrower */
                    borrower?: (string|null);

                    /** MsgBorrowAsset amount */
                    amount?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgBorrowAsset. */
                class MsgBorrowAsset implements IMsgBorrowAsset {

                    /**
                     * Constructs a new MsgBorrowAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset);

                    /** MsgBorrowAsset borrower. */
                    public borrower: string;

                    /** MsgBorrowAsset amount. */
                    public amount?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgBorrowAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgBorrowAsset instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset): umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset;

                    /**
                     * Encodes the specified MsgBorrowAsset message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset.verify|verify} messages.
                     * @param message MsgBorrowAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgBorrowAsset message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset.verify|verify} messages.
                     * @param message MsgBorrowAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgBorrowAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgBorrowAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset;

                    /**
                     * Decodes a MsgBorrowAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgBorrowAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset;

                    /**
                     * Verifies a MsgBorrowAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgBorrowAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgBorrowAsset
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset;

                    /**
                     * Creates a plain object from a MsgBorrowAsset message. Also converts values to other types if specified.
                     * @param message MsgBorrowAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgBorrowAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgBorrowAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgRepayAsset. */
                interface IMsgRepayAsset {

                    /** MsgRepayAsset borrower */
                    borrower?: (string|null);

                    /** MsgRepayAsset amount */
                    amount?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgRepayAsset. */
                class MsgRepayAsset implements IMsgRepayAsset {

                    /**
                     * Constructs a new MsgRepayAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset);

                    /** MsgRepayAsset borrower. */
                    public borrower: string;

                    /** MsgRepayAsset amount. */
                    public amount?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgRepayAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgRepayAsset instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset): umeenetwork.umee.leverage.v1beta1.MsgRepayAsset;

                    /**
                     * Encodes the specified MsgRepayAsset message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgRepayAsset.verify|verify} messages.
                     * @param message MsgRepayAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgRepayAsset message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgRepayAsset.verify|verify} messages.
                     * @param message MsgRepayAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgRepayAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgRepayAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgRepayAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgRepayAsset;

                    /**
                     * Decodes a MsgRepayAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgRepayAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgRepayAsset;

                    /**
                     * Verifies a MsgRepayAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgRepayAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgRepayAsset
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgRepayAsset;

                    /**
                     * Creates a plain object from a MsgRepayAsset message. Also converts values to other types if specified.
                     * @param message MsgRepayAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgRepayAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgRepayAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgLiquidate. */
                interface IMsgLiquidate {

                    /** MsgLiquidate liquidator */
                    liquidator?: (string|null);

                    /** MsgLiquidate borrower */
                    borrower?: (string|null);

                    /** MsgLiquidate repayment */
                    repayment?: (cosmos.base.v1beta1.ICoin|null);

                    /** MsgLiquidate reward */
                    reward?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgLiquidate. */
                class MsgLiquidate implements IMsgLiquidate {

                    /**
                     * Constructs a new MsgLiquidate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate);

                    /** MsgLiquidate liquidator. */
                    public liquidator: string;

                    /** MsgLiquidate borrower. */
                    public borrower: string;

                    /** MsgLiquidate repayment. */
                    public repayment?: (cosmos.base.v1beta1.ICoin|null);

                    /** MsgLiquidate reward. */
                    public reward?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgLiquidate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgLiquidate instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate): umeenetwork.umee.leverage.v1beta1.MsgLiquidate;

                    /**
                     * Encodes the specified MsgLiquidate message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLiquidate.verify|verify} messages.
                     * @param message MsgLiquidate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgLiquidate message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLiquidate.verify|verify} messages.
                     * @param message MsgLiquidate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgLiquidate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgLiquidate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgLiquidate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgLiquidate;

                    /**
                     * Decodes a MsgLiquidate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgLiquidate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgLiquidate;

                    /**
                     * Verifies a MsgLiquidate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgLiquidate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgLiquidate
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgLiquidate;

                    /**
                     * Creates a plain object from a MsgLiquidate message. Also converts values to other types if specified.
                     * @param message MsgLiquidate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgLiquidate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgLiquidate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgLendAssetResponse. */
                interface IMsgLendAssetResponse {
                }

                /** Represents a MsgLendAssetResponse. */
                class MsgLendAssetResponse implements IMsgLendAssetResponse {

                    /**
                     * Constructs a new MsgLendAssetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLendAssetResponse);

                    /**
                     * Creates a new MsgLendAssetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgLendAssetResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLendAssetResponse): umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse;

                    /**
                     * Encodes the specified MsgLendAssetResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse.verify|verify} messages.
                     * @param message MsgLendAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgLendAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgLendAssetResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse.verify|verify} messages.
                     * @param message MsgLendAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgLendAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgLendAssetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgLendAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse;

                    /**
                     * Decodes a MsgLendAssetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgLendAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse;

                    /**
                     * Verifies a MsgLendAssetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgLendAssetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgLendAssetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse;

                    /**
                     * Creates a plain object from a MsgLendAssetResponse message. Also converts values to other types if specified.
                     * @param message MsgLendAssetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgLendAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgLendAssetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgWithdrawAssetResponse. */
                interface IMsgWithdrawAssetResponse {
                }

                /** Represents a MsgWithdrawAssetResponse. */
                class MsgWithdrawAssetResponse implements IMsgWithdrawAssetResponse {

                    /**
                     * Constructs a new MsgWithdrawAssetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAssetResponse);

                    /**
                     * Creates a new MsgWithdrawAssetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgWithdrawAssetResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAssetResponse): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse;

                    /**
                     * Encodes the specified MsgWithdrawAssetResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse.verify|verify} messages.
                     * @param message MsgWithdrawAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgWithdrawAssetResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse.verify|verify} messages.
                     * @param message MsgWithdrawAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgWithdrawAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgWithdrawAssetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgWithdrawAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse;

                    /**
                     * Decodes a MsgWithdrawAssetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgWithdrawAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse;

                    /**
                     * Verifies a MsgWithdrawAssetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgWithdrawAssetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgWithdrawAssetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse;

                    /**
                     * Creates a plain object from a MsgWithdrawAssetResponse message. Also converts values to other types if specified.
                     * @param message MsgWithdrawAssetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgWithdrawAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgWithdrawAssetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgSetCollateralResponse. */
                interface IMsgSetCollateralResponse {
                }

                /** Represents a MsgSetCollateralResponse. */
                class MsgSetCollateralResponse implements IMsgSetCollateralResponse {

                    /**
                     * Constructs a new MsgSetCollateralResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateralResponse);

                    /**
                     * Creates a new MsgSetCollateralResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgSetCollateralResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateralResponse): umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse;

                    /**
                     * Encodes the specified MsgSetCollateralResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse.verify|verify} messages.
                     * @param message MsgSetCollateralResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateralResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgSetCollateralResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse.verify|verify} messages.
                     * @param message MsgSetCollateralResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgSetCollateralResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgSetCollateralResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgSetCollateralResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse;

                    /**
                     * Decodes a MsgSetCollateralResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgSetCollateralResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse;

                    /**
                     * Verifies a MsgSetCollateralResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgSetCollateralResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgSetCollateralResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse;

                    /**
                     * Creates a plain object from a MsgSetCollateralResponse message. Also converts values to other types if specified.
                     * @param message MsgSetCollateralResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgSetCollateralResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgSetCollateralResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgBorrowAssetResponse. */
                interface IMsgBorrowAssetResponse {
                }

                /** Represents a MsgBorrowAssetResponse. */
                class MsgBorrowAssetResponse implements IMsgBorrowAssetResponse {

                    /**
                     * Constructs a new MsgBorrowAssetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAssetResponse);

                    /**
                     * Creates a new MsgBorrowAssetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgBorrowAssetResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAssetResponse): umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse;

                    /**
                     * Encodes the specified MsgBorrowAssetResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse.verify|verify} messages.
                     * @param message MsgBorrowAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgBorrowAssetResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse.verify|verify} messages.
                     * @param message MsgBorrowAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgBorrowAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgBorrowAssetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgBorrowAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse;

                    /**
                     * Decodes a MsgBorrowAssetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgBorrowAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse;

                    /**
                     * Verifies a MsgBorrowAssetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgBorrowAssetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgBorrowAssetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse;

                    /**
                     * Creates a plain object from a MsgBorrowAssetResponse message. Also converts values to other types if specified.
                     * @param message MsgBorrowAssetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgBorrowAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgBorrowAssetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgRepayAssetResponse. */
                interface IMsgRepayAssetResponse {

                    /** MsgRepayAssetResponse repaid */
                    repaid?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgRepayAssetResponse. */
                class MsgRepayAssetResponse implements IMsgRepayAssetResponse {

                    /**
                     * Constructs a new MsgRepayAssetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgRepayAssetResponse);

                    /** MsgRepayAssetResponse repaid. */
                    public repaid?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgRepayAssetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgRepayAssetResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgRepayAssetResponse): umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse;

                    /**
                     * Encodes the specified MsgRepayAssetResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse.verify|verify} messages.
                     * @param message MsgRepayAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgRepayAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgRepayAssetResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse.verify|verify} messages.
                     * @param message MsgRepayAssetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgRepayAssetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgRepayAssetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgRepayAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse;

                    /**
                     * Decodes a MsgRepayAssetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgRepayAssetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse;

                    /**
                     * Verifies a MsgRepayAssetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgRepayAssetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgRepayAssetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse;

                    /**
                     * Creates a plain object from a MsgRepayAssetResponse message. Also converts values to other types if specified.
                     * @param message MsgRepayAssetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgRepayAssetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgRepayAssetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MsgLiquidateResponse. */
                interface IMsgLiquidateResponse {

                    /** MsgLiquidateResponse repaid */
                    repaid?: (cosmos.base.v1beta1.ICoin|null);

                    /** MsgLiquidateResponse reward */
                    reward?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a MsgLiquidateResponse. */
                class MsgLiquidateResponse implements IMsgLiquidateResponse {

                    /**
                     * Constructs a new MsgLiquidateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLiquidateResponse);

                    /** MsgLiquidateResponse repaid. */
                    public repaid?: (cosmos.base.v1beta1.ICoin|null);

                    /** MsgLiquidateResponse reward. */
                    public reward?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new MsgLiquidateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MsgLiquidateResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IMsgLiquidateResponse): umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse;

                    /**
                     * Encodes the specified MsgLiquidateResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse.verify|verify} messages.
                     * @param message MsgLiquidateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IMsgLiquidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MsgLiquidateResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse.verify|verify} messages.
                     * @param message MsgLiquidateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IMsgLiquidateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MsgLiquidateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MsgLiquidateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse;

                    /**
                     * Decodes a MsgLiquidateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MsgLiquidateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse;

                    /**
                     * Verifies a MsgLiquidateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MsgLiquidateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MsgLiquidateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse;

                    /**
                     * Creates a plain object from a MsgLiquidateResponse message. Also converts values to other types if specified.
                     * @param message MsgLiquidateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.MsgLiquidateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MsgLiquidateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRegistryProposal. */
                interface IUpdateRegistryProposal {

                    /** UpdateRegistryProposal title */
                    title?: (string|null);

                    /** UpdateRegistryProposal description */
                    description?: (string|null);

                    /** UpdateRegistryProposal registry */
                    registry?: (umeenetwork.umee.leverage.v1beta1.IToken[]|null);
                }

                /** Represents an UpdateRegistryProposal. */
                class UpdateRegistryProposal implements IUpdateRegistryProposal {

                    /**
                     * Constructs a new UpdateRegistryProposal.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IUpdateRegistryProposal);

                    /** UpdateRegistryProposal title. */
                    public title: string;

                    /** UpdateRegistryProposal description. */
                    public description: string;

                    /** UpdateRegistryProposal registry. */
                    public registry: umeenetwork.umee.leverage.v1beta1.IToken[];

                    /**
                     * Creates a new UpdateRegistryProposal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRegistryProposal instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IUpdateRegistryProposal): umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal;

                    /**
                     * Encodes the specified UpdateRegistryProposal message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal.verify|verify} messages.
                     * @param message UpdateRegistryProposal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IUpdateRegistryProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRegistryProposal message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal.verify|verify} messages.
                     * @param message UpdateRegistryProposal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IUpdateRegistryProposal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRegistryProposal message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRegistryProposal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal;

                    /**
                     * Decodes an UpdateRegistryProposal message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRegistryProposal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal;

                    /**
                     * Verifies an UpdateRegistryProposal message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRegistryProposal message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRegistryProposal
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal;

                    /**
                     * Creates a plain object from an UpdateRegistryProposal message. Also converts values to other types if specified.
                     * @param message UpdateRegistryProposal
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.UpdateRegistryProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRegistryProposal to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Params. */
                interface IParams {

                    /** Params completeLiquidationThreshold */
                    completeLiquidationThreshold?: (string|null);

                    /** Params minimumCloseFactor */
                    minimumCloseFactor?: (string|null);

                    /** Params oracleRewardFactor */
                    oracleRewardFactor?: (string|null);
                }

                /** Represents a Params. */
                class Params implements IParams {

                    /**
                     * Constructs a new Params.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IParams);

                    /** Params completeLiquidationThreshold. */
                    public completeLiquidationThreshold: string;

                    /** Params minimumCloseFactor. */
                    public minimumCloseFactor: string;

                    /** Params oracleRewardFactor. */
                    public oracleRewardFactor: string;

                    /**
                     * Creates a new Params instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Params instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IParams): umeenetwork.umee.leverage.v1beta1.Params;

                    /**
                     * Encodes the specified Params message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Params.verify|verify} messages.
                     * @param message Params message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Params message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Params.verify|verify} messages.
                     * @param message Params message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Params message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Params
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.Params;

                    /**
                     * Decodes a Params message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Params
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.Params;

                    /**
                     * Verifies a Params message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Params message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Params
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.Params;

                    /**
                     * Creates a plain object from a Params message. Also converts values to other types if specified.
                     * @param message Params
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Params to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Token. */
                interface IToken {

                    /** Token baseDenom */
                    baseDenom?: (string|null);

                    /** Token reserveFactor */
                    reserveFactor?: (string|null);

                    /** Token collateralWeight */
                    collateralWeight?: (string|null);

                    /** Token baseBorrowRate */
                    baseBorrowRate?: (string|null);

                    /** Token kinkBorrowRate */
                    kinkBorrowRate?: (string|null);

                    /** Token maxBorrowRate */
                    maxBorrowRate?: (string|null);

                    /** Token kinkUtilizationRate */
                    kinkUtilizationRate?: (string|null);

                    /** Token liquidationIncentive */
                    liquidationIncentive?: (string|null);

                    /** Token symbolDenom */
                    symbolDenom?: (string|null);

                    /** Token exponent */
                    exponent?: (number|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IToken);

                    /** Token baseDenom. */
                    public baseDenom: string;

                    /** Token reserveFactor. */
                    public reserveFactor: string;

                    /** Token collateralWeight. */
                    public collateralWeight: string;

                    /** Token baseBorrowRate. */
                    public baseBorrowRate: string;

                    /** Token kinkBorrowRate. */
                    public kinkBorrowRate: string;

                    /** Token maxBorrowRate. */
                    public maxBorrowRate: string;

                    /** Token kinkUtilizationRate. */
                    public kinkUtilizationRate: string;

                    /** Token liquidationIncentive. */
                    public liquidationIncentive: string;

                    /** Token symbolDenom. */
                    public symbolDenom: string;

                    /** Token exponent. */
                    public exponent: number;

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Token instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IToken): umeenetwork.umee.leverage.v1beta1.Token;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.Token;

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.Token;

                    /**
                     * Verifies a Token message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Token
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param message Token
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Token to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a Query */
                class Query extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Query service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Query service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Query;

                    /**
                     * Calls RegisteredTokens.
                     * @param request QueryRegisteredTokens message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryRegisteredTokensResponse
                     */
                    public registeredTokens(request: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens, callback: umeenetwork.umee.leverage.v1beta1.Query.RegisteredTokensCallback): void;

                    /**
                     * Calls RegisteredTokens.
                     * @param request QueryRegisteredTokens message or plain object
                     * @returns Promise
                     */
                    public registeredTokens(request: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens): Promise<umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse>;

                    /**
                     * Calls Params.
                     * @param request QueryParamsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
                     */
                    public params(request: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.ParamsCallback): void;

                    /**
                     * Calls Params.
                     * @param request QueryParamsRequest message or plain object
                     * @returns Promise
                     */
                    public params(request: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryParamsResponse>;

                    /**
                     * Calls Borrowed.
                     * @param request QueryBorrowedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryBorrowedResponse
                     */
                    public borrowed(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.BorrowedCallback): void;

                    /**
                     * Calls Borrowed.
                     * @param request QueryBorrowedRequest message or plain object
                     * @returns Promise
                     */
                    public borrowed(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse>;

                    /**
                     * Calls AvailableBorrow.
                     * @param request QueryAvailableBorrowRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryAvailableBorrowResponse
                     */
                    public availableBorrow(request: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.AvailableBorrowCallback): void;

                    /**
                     * Calls AvailableBorrow.
                     * @param request QueryAvailableBorrowRequest message or plain object
                     * @returns Promise
                     */
                    public availableBorrow(request: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse>;

                    /**
                     * Calls BorrowAPY.
                     * @param request QueryBorrowAPYRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryBorrowAPYResponse
                     */
                    public borrowAPY(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.BorrowAPYCallback): void;

                    /**
                     * Calls BorrowAPY.
                     * @param request QueryBorrowAPYRequest message or plain object
                     * @returns Promise
                     */
                    public borrowAPY(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse>;

                    /**
                     * Calls LendAPY.
                     * @param request QueryLendAPYRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryLendAPYResponse
                     */
                    public lendAPY(request: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.LendAPYCallback): void;

                    /**
                     * Calls LendAPY.
                     * @param request QueryLendAPYRequest message or plain object
                     * @returns Promise
                     */
                    public lendAPY(request: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse>;

                    /**
                     * Calls MarketSize.
                     * @param request QueryMarketSizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryMarketSizeResponse
                     */
                    public marketSize(request: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.MarketSizeCallback): void;

                    /**
                     * Calls MarketSize.
                     * @param request QueryMarketSizeRequest message or plain object
                     * @returns Promise
                     */
                    public marketSize(request: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse>;

                    /**
                     * Calls ReserveAmount.
                     * @param request QueryReserveAmountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryReserveAmountResponse
                     */
                    public reserveAmount(request: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.ReserveAmountCallback): void;

                    /**
                     * Calls ReserveAmount.
                     * @param request QueryReserveAmountRequest message or plain object
                     * @returns Promise
                     */
                    public reserveAmount(request: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse>;

                    /**
                     * Calls CollateralSetting.
                     * @param request QueryCollateralSettingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryCollateralSettingResponse
                     */
                    public collateralSetting(request: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.CollateralSettingCallback): void;

                    /**
                     * Calls CollateralSetting.
                     * @param request QueryCollateralSettingRequest message or plain object
                     * @returns Promise
                     */
                    public collateralSetting(request: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse>;

                    /**
                     * Calls Collateral.
                     * @param request QueryCollateralRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryCollateralResponse
                     */
                    public collateral(request: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.CollateralCallback): void;

                    /**
                     * Calls Collateral.
                     * @param request QueryCollateralRequest message or plain object
                     * @returns Promise
                     */
                    public collateral(request: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse>;

                    /**
                     * Calls ExchangeRate.
                     * @param request QueryExchangeRateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryExchangeRateResponse
                     */
                    public exchangeRate(request: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.ExchangeRateCallback): void;

                    /**
                     * Calls ExchangeRate.
                     * @param request QueryExchangeRateRequest message or plain object
                     * @returns Promise
                     */
                    public exchangeRate(request: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse>;

                    /**
                     * Calls BorrowLimit.
                     * @param request QueryBorrowLimitRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryBorrowLimitResponse
                     */
                    public borrowLimit(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.BorrowLimitCallback): void;

                    /**
                     * Calls BorrowLimit.
                     * @param request QueryBorrowLimitRequest message or plain object
                     * @returns Promise
                     */
                    public borrowLimit(request: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse>;

                    /**
                     * Calls LiquidationTargets.
                     * @param request QueryLiquidationTargetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryLiquidationTargetsResponse
                     */
                    public liquidationTargets(request: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest, callback: umeenetwork.umee.leverage.v1beta1.Query.LiquidationTargetsCallback): void;

                    /**
                     * Calls LiquidationTargets.
                     * @param request QueryLiquidationTargetsRequest message or plain object
                     * @returns Promise
                     */
                    public liquidationTargets(request: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest): Promise<umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse>;
                }

                namespace Query {

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#registeredTokens}.
                     * @param error Error, if any
                     * @param [response] QueryRegisteredTokensResponse
                     */
                    type RegisteredTokensCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#params}.
                     * @param error Error, if any
                     * @param [response] QueryParamsResponse
                     */
                    type ParamsCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryParamsResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#borrowed}.
                     * @param error Error, if any
                     * @param [response] QueryBorrowedResponse
                     */
                    type BorrowedCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#availableBorrow}.
                     * @param error Error, if any
                     * @param [response] QueryAvailableBorrowResponse
                     */
                    type AvailableBorrowCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#borrowAPY}.
                     * @param error Error, if any
                     * @param [response] QueryBorrowAPYResponse
                     */
                    type BorrowAPYCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#lendAPY}.
                     * @param error Error, if any
                     * @param [response] QueryLendAPYResponse
                     */
                    type LendAPYCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#marketSize}.
                     * @param error Error, if any
                     * @param [response] QueryMarketSizeResponse
                     */
                    type MarketSizeCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#reserveAmount}.
                     * @param error Error, if any
                     * @param [response] QueryReserveAmountResponse
                     */
                    type ReserveAmountCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#collateralSetting}.
                     * @param error Error, if any
                     * @param [response] QueryCollateralSettingResponse
                     */
                    type CollateralSettingCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#collateral}.
                     * @param error Error, if any
                     * @param [response] QueryCollateralResponse
                     */
                    type CollateralCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#exchangeRate}.
                     * @param error Error, if any
                     * @param [response] QueryExchangeRateResponse
                     */
                    type ExchangeRateCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#borrowLimit}.
                     * @param error Error, if any
                     * @param [response] QueryBorrowLimitResponse
                     */
                    type BorrowLimitCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse) => void;

                    /**
                     * Callback as used by {@link umeenetwork.umee.leverage.v1beta1.Query#liquidationTargets}.
                     * @param error Error, if any
                     * @param [response] QueryLiquidationTargetsResponse
                     */
                    type LiquidationTargetsCallback = (error: (Error|null), response?: umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse) => void;
                }

                /** Properties of a QueryRegisteredTokens. */
                interface IQueryRegisteredTokens {
                }

                /** Represents a QueryRegisteredTokens. */
                class QueryRegisteredTokens implements IQueryRegisteredTokens {

                    /**
                     * Constructs a new QueryRegisteredTokens.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens);

                    /**
                     * Creates a new QueryRegisteredTokens instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryRegisteredTokens instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens;

                    /**
                     * Encodes the specified QueryRegisteredTokens message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens.verify|verify} messages.
                     * @param message QueryRegisteredTokens message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryRegisteredTokens message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens.verify|verify} messages.
                     * @param message QueryRegisteredTokens message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokens, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryRegisteredTokens message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryRegisteredTokens
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens;

                    /**
                     * Decodes a QueryRegisteredTokens message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryRegisteredTokens
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens;

                    /**
                     * Verifies a QueryRegisteredTokens message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryRegisteredTokens message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryRegisteredTokens
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens;

                    /**
                     * Creates a plain object from a QueryRegisteredTokens message. Also converts values to other types if specified.
                     * @param message QueryRegisteredTokens
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokens, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryRegisteredTokens to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryAvailableBorrowRequest. */
                interface IQueryAvailableBorrowRequest {

                    /** QueryAvailableBorrowRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryAvailableBorrowRequest. */
                class QueryAvailableBorrowRequest implements IQueryAvailableBorrowRequest {

                    /**
                     * Constructs a new QueryAvailableBorrowRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest);

                    /** QueryAvailableBorrowRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryAvailableBorrowRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryAvailableBorrowRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest;

                    /**
                     * Encodes the specified QueryAvailableBorrowRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest.verify|verify} messages.
                     * @param message QueryAvailableBorrowRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryAvailableBorrowRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest.verify|verify} messages.
                     * @param message QueryAvailableBorrowRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryAvailableBorrowRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryAvailableBorrowRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest;

                    /**
                     * Decodes a QueryAvailableBorrowRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryAvailableBorrowRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest;

                    /**
                     * Verifies a QueryAvailableBorrowRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryAvailableBorrowRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryAvailableBorrowRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest;

                    /**
                     * Creates a plain object from a QueryAvailableBorrowRequest message. Also converts values to other types if specified.
                     * @param message QueryAvailableBorrowRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryAvailableBorrowRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryAvailableBorrowResponse. */
                interface IQueryAvailableBorrowResponse {

                    /** QueryAvailableBorrowResponse amount */
                    amount?: (string|null);
                }

                /** Represents a QueryAvailableBorrowResponse. */
                class QueryAvailableBorrowResponse implements IQueryAvailableBorrowResponse {

                    /**
                     * Constructs a new QueryAvailableBorrowResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowResponse);

                    /** QueryAvailableBorrowResponse amount. */
                    public amount: string;

                    /**
                     * Creates a new QueryAvailableBorrowResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryAvailableBorrowResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowResponse): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse;

                    /**
                     * Encodes the specified QueryAvailableBorrowResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse.verify|verify} messages.
                     * @param message QueryAvailableBorrowResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryAvailableBorrowResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse.verify|verify} messages.
                     * @param message QueryAvailableBorrowResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryAvailableBorrowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryAvailableBorrowResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryAvailableBorrowResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse;

                    /**
                     * Decodes a QueryAvailableBorrowResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryAvailableBorrowResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse;

                    /**
                     * Verifies a QueryAvailableBorrowResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryAvailableBorrowResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryAvailableBorrowResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse;

                    /**
                     * Creates a plain object from a QueryAvailableBorrowResponse message. Also converts values to other types if specified.
                     * @param message QueryAvailableBorrowResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryAvailableBorrowResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryAvailableBorrowResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowAPYRequest. */
                interface IQueryBorrowAPYRequest {

                    /** QueryBorrowAPYRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryBorrowAPYRequest. */
                class QueryBorrowAPYRequest implements IQueryBorrowAPYRequest {

                    /**
                     * Constructs a new QueryBorrowAPYRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest);

                    /** QueryBorrowAPYRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryBorrowAPYRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowAPYRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest;

                    /**
                     * Encodes the specified QueryBorrowAPYRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest.verify|verify} messages.
                     * @param message QueryBorrowAPYRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowAPYRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest.verify|verify} messages.
                     * @param message QueryBorrowAPYRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowAPYRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowAPYRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest;

                    /**
                     * Decodes a QueryBorrowAPYRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowAPYRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest;

                    /**
                     * Verifies a QueryBorrowAPYRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowAPYRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowAPYRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest;

                    /**
                     * Creates a plain object from a QueryBorrowAPYRequest message. Also converts values to other types if specified.
                     * @param message QueryBorrowAPYRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowAPYRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowAPYResponse. */
                interface IQueryBorrowAPYResponse {

                    /** QueryBorrowAPYResponse APY */
                    APY?: (string|null);
                }

                /** Represents a QueryBorrowAPYResponse. */
                class QueryBorrowAPYResponse implements IQueryBorrowAPYResponse {

                    /**
                     * Constructs a new QueryBorrowAPYResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYResponse);

                    /** QueryBorrowAPYResponse APY. */
                    public APY: string;

                    /**
                     * Creates a new QueryBorrowAPYResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowAPYResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYResponse): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse;

                    /**
                     * Encodes the specified QueryBorrowAPYResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse.verify|verify} messages.
                     * @param message QueryBorrowAPYResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowAPYResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse.verify|verify} messages.
                     * @param message QueryBorrowAPYResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowAPYResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowAPYResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowAPYResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse;

                    /**
                     * Decodes a QueryBorrowAPYResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowAPYResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse;

                    /**
                     * Verifies a QueryBorrowAPYResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowAPYResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowAPYResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse;

                    /**
                     * Creates a plain object from a QueryBorrowAPYResponse message. Also converts values to other types if specified.
                     * @param message QueryBorrowAPYResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowAPYResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowAPYResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryLendAPYRequest. */
                interface IQueryLendAPYRequest {

                    /** QueryLendAPYRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryLendAPYRequest. */
                class QueryLendAPYRequest implements IQueryLendAPYRequest {

                    /**
                     * Constructs a new QueryLendAPYRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest);

                    /** QueryLendAPYRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryLendAPYRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryLendAPYRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest): umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest;

                    /**
                     * Encodes the specified QueryLendAPYRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest.verify|verify} messages.
                     * @param message QueryLendAPYRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryLendAPYRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest.verify|verify} messages.
                     * @param message QueryLendAPYRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryLendAPYRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryLendAPYRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest;

                    /**
                     * Decodes a QueryLendAPYRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryLendAPYRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest;

                    /**
                     * Verifies a QueryLendAPYRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryLendAPYRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryLendAPYRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest;

                    /**
                     * Creates a plain object from a QueryLendAPYRequest message. Also converts values to other types if specified.
                     * @param message QueryLendAPYRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryLendAPYRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryLendAPYRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryLendAPYResponse. */
                interface IQueryLendAPYResponse {

                    /** QueryLendAPYResponse APY */
                    APY?: (string|null);
                }

                /** Represents a QueryLendAPYResponse. */
                class QueryLendAPYResponse implements IQueryLendAPYResponse {

                    /**
                     * Constructs a new QueryLendAPYResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYResponse);

                    /** QueryLendAPYResponse APY. */
                    public APY: string;

                    /**
                     * Creates a new QueryLendAPYResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryLendAPYResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYResponse): umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse;

                    /**
                     * Encodes the specified QueryLendAPYResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse.verify|verify} messages.
                     * @param message QueryLendAPYResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryLendAPYResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse.verify|verify} messages.
                     * @param message QueryLendAPYResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryLendAPYResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryLendAPYResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryLendAPYResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse;

                    /**
                     * Decodes a QueryLendAPYResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryLendAPYResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse;

                    /**
                     * Verifies a QueryLendAPYResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryLendAPYResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryLendAPYResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse;

                    /**
                     * Creates a plain object from a QueryLendAPYResponse message. Also converts values to other types if specified.
                     * @param message QueryLendAPYResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryLendAPYResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryLendAPYResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryMarketSizeRequest. */
                interface IQueryMarketSizeRequest {

                    /** QueryMarketSizeRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryMarketSizeRequest. */
                class QueryMarketSizeRequest implements IQueryMarketSizeRequest {

                    /**
                     * Constructs a new QueryMarketSizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest);

                    /** QueryMarketSizeRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryMarketSizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryMarketSizeRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest;

                    /**
                     * Encodes the specified QueryMarketSizeRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest.verify|verify} messages.
                     * @param message QueryMarketSizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryMarketSizeRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest.verify|verify} messages.
                     * @param message QueryMarketSizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryMarketSizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryMarketSizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest;

                    /**
                     * Decodes a QueryMarketSizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryMarketSizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest;

                    /**
                     * Verifies a QueryMarketSizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryMarketSizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryMarketSizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest;

                    /**
                     * Creates a plain object from a QueryMarketSizeRequest message. Also converts values to other types if specified.
                     * @param message QueryMarketSizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryMarketSizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryMarketSizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryMarketSizeResponse. */
                interface IQueryMarketSizeResponse {

                    /** QueryMarketSizeResponse marketSizeUsd */
                    marketSizeUsd?: (string|null);
                }

                /** Represents a QueryMarketSizeResponse. */
                class QueryMarketSizeResponse implements IQueryMarketSizeResponse {

                    /**
                     * Constructs a new QueryMarketSizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeResponse);

                    /** QueryMarketSizeResponse marketSizeUsd. */
                    public marketSizeUsd: string;

                    /**
                     * Creates a new QueryMarketSizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryMarketSizeResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeResponse): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse;

                    /**
                     * Encodes the specified QueryMarketSizeResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse.verify|verify} messages.
                     * @param message QueryMarketSizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryMarketSizeResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse.verify|verify} messages.
                     * @param message QueryMarketSizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryMarketSizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryMarketSizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryMarketSizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse;

                    /**
                     * Decodes a QueryMarketSizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryMarketSizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse;

                    /**
                     * Verifies a QueryMarketSizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryMarketSizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryMarketSizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse;

                    /**
                     * Creates a plain object from a QueryMarketSizeResponse message. Also converts values to other types if specified.
                     * @param message QueryMarketSizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryMarketSizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryMarketSizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryRegisteredTokensResponse. */
                interface IQueryRegisteredTokensResponse {

                    /** QueryRegisteredTokensResponse registry */
                    registry?: (umeenetwork.umee.leverage.v1beta1.IToken[]|null);
                }

                /** Represents a QueryRegisteredTokensResponse. */
                class QueryRegisteredTokensResponse implements IQueryRegisteredTokensResponse {

                    /**
                     * Constructs a new QueryRegisteredTokensResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokensResponse);

                    /** QueryRegisteredTokensResponse registry. */
                    public registry: umeenetwork.umee.leverage.v1beta1.IToken[];

                    /**
                     * Creates a new QueryRegisteredTokensResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryRegisteredTokensResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokensResponse): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse;

                    /**
                     * Encodes the specified QueryRegisteredTokensResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse.verify|verify} messages.
                     * @param message QueryRegisteredTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryRegisteredTokensResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse.verify|verify} messages.
                     * @param message QueryRegisteredTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryRegisteredTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryRegisteredTokensResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryRegisteredTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse;

                    /**
                     * Decodes a QueryRegisteredTokensResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryRegisteredTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse;

                    /**
                     * Verifies a QueryRegisteredTokensResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryRegisteredTokensResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryRegisteredTokensResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse;

                    /**
                     * Creates a plain object from a QueryRegisteredTokensResponse message. Also converts values to other types if specified.
                     * @param message QueryRegisteredTokensResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryRegisteredTokensResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryRegisteredTokensResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryParamsRequest. */
                interface IQueryParamsRequest {
                }

                /** Represents a QueryParamsRequest. */
                class QueryParamsRequest implements IQueryParamsRequest {

                    /**
                     * Constructs a new QueryParamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest);

                    /**
                     * Creates a new QueryParamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryParamsRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest): umeenetwork.umee.leverage.v1beta1.QueryParamsRequest;

                    /**
                     * Encodes the specified QueryParamsRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryParamsRequest.verify|verify} messages.
                     * @param message QueryParamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryParamsRequest.verify|verify} messages.
                     * @param message QueryParamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryParamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryParamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryParamsRequest;

                    /**
                     * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryParamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryParamsRequest;

                    /**
                     * Verifies a QueryParamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryParamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryParamsRequest;

                    /**
                     * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
                     * @param message QueryParamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryParamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryParamsResponse. */
                interface IQueryParamsResponse {

                    /** QueryParamsResponse params */
                    params?: (umeenetwork.umee.leverage.v1beta1.IParams|null);
                }

                /** Represents a QueryParamsResponse. */
                class QueryParamsResponse implements IQueryParamsResponse {

                    /**
                     * Constructs a new QueryParamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryParamsResponse);

                    /** QueryParamsResponse params. */
                    public params?: (umeenetwork.umee.leverage.v1beta1.IParams|null);

                    /**
                     * Creates a new QueryParamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryParamsResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryParamsResponse): umeenetwork.umee.leverage.v1beta1.QueryParamsResponse;

                    /**
                     * Encodes the specified QueryParamsResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryParamsResponse.verify|verify} messages.
                     * @param message QueryParamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryParamsResponse.verify|verify} messages.
                     * @param message QueryParamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryParamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryParamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryParamsResponse;

                    /**
                     * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryParamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryParamsResponse;

                    /**
                     * Verifies a QueryParamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryParamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryParamsResponse;

                    /**
                     * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
                     * @param message QueryParamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryParamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowedRequest. */
                interface IQueryBorrowedRequest {

                    /** QueryBorrowedRequest address */
                    address?: (string|null);

                    /** QueryBorrowedRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryBorrowedRequest. */
                class QueryBorrowedRequest implements IQueryBorrowedRequest {

                    /**
                     * Constructs a new QueryBorrowedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest);

                    /** QueryBorrowedRequest address. */
                    public address: string;

                    /** QueryBorrowedRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryBorrowedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowedRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest): umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest;

                    /**
                     * Encodes the specified QueryBorrowedRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest.verify|verify} messages.
                     * @param message QueryBorrowedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowedRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest.verify|verify} messages.
                     * @param message QueryBorrowedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest;

                    /**
                     * Decodes a QueryBorrowedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest;

                    /**
                     * Verifies a QueryBorrowedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest;

                    /**
                     * Creates a plain object from a QueryBorrowedRequest message. Also converts values to other types if specified.
                     * @param message QueryBorrowedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowedResponse. */
                interface IQueryBorrowedResponse {

                    /** QueryBorrowedResponse borrowed */
                    borrowed?: (cosmos.base.v1beta1.ICoin[]|null);
                }

                /** Represents a QueryBorrowedResponse. */
                class QueryBorrowedResponse implements IQueryBorrowedResponse {

                    /**
                     * Constructs a new QueryBorrowedResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedResponse);

                    /** QueryBorrowedResponse borrowed. */
                    public borrowed: cosmos.base.v1beta1.ICoin[];

                    /**
                     * Creates a new QueryBorrowedResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowedResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedResponse): umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse;

                    /**
                     * Encodes the specified QueryBorrowedResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse.verify|verify} messages.
                     * @param message QueryBorrowedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowedResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse.verify|verify} messages.
                     * @param message QueryBorrowedResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowedResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse;

                    /**
                     * Decodes a QueryBorrowedResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse;

                    /**
                     * Verifies a QueryBorrowedResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowedResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowedResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse;

                    /**
                     * Creates a plain object from a QueryBorrowedResponse message. Also converts values to other types if specified.
                     * @param message QueryBorrowedResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowedResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryReserveAmountRequest. */
                interface IQueryReserveAmountRequest {

                    /** QueryReserveAmountRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryReserveAmountRequest. */
                class QueryReserveAmountRequest implements IQueryReserveAmountRequest {

                    /**
                     * Constructs a new QueryReserveAmountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest);

                    /** QueryReserveAmountRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryReserveAmountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryReserveAmountRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest;

                    /**
                     * Encodes the specified QueryReserveAmountRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest.verify|verify} messages.
                     * @param message QueryReserveAmountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryReserveAmountRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest.verify|verify} messages.
                     * @param message QueryReserveAmountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryReserveAmountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryReserveAmountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest;

                    /**
                     * Decodes a QueryReserveAmountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryReserveAmountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest;

                    /**
                     * Verifies a QueryReserveAmountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryReserveAmountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryReserveAmountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest;

                    /**
                     * Creates a plain object from a QueryReserveAmountRequest message. Also converts values to other types if specified.
                     * @param message QueryReserveAmountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryReserveAmountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryReserveAmountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryReserveAmountResponse. */
                interface IQueryReserveAmountResponse {

                    /** QueryReserveAmountResponse amount */
                    amount?: (string|null);
                }

                /** Represents a QueryReserveAmountResponse. */
                class QueryReserveAmountResponse implements IQueryReserveAmountResponse {

                    /**
                     * Constructs a new QueryReserveAmountResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountResponse);

                    /** QueryReserveAmountResponse amount. */
                    public amount: string;

                    /**
                     * Creates a new QueryReserveAmountResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryReserveAmountResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountResponse): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse;

                    /**
                     * Encodes the specified QueryReserveAmountResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse.verify|verify} messages.
                     * @param message QueryReserveAmountResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryReserveAmountResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse.verify|verify} messages.
                     * @param message QueryReserveAmountResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryReserveAmountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryReserveAmountResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryReserveAmountResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse;

                    /**
                     * Decodes a QueryReserveAmountResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryReserveAmountResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse;

                    /**
                     * Verifies a QueryReserveAmountResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryReserveAmountResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryReserveAmountResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse;

                    /**
                     * Creates a plain object from a QueryReserveAmountResponse message. Also converts values to other types if specified.
                     * @param message QueryReserveAmountResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryReserveAmountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryReserveAmountResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryCollateralSettingRequest. */
                interface IQueryCollateralSettingRequest {

                    /** QueryCollateralSettingRequest address */
                    address?: (string|null);

                    /** QueryCollateralSettingRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryCollateralSettingRequest. */
                class QueryCollateralSettingRequest implements IQueryCollateralSettingRequest {

                    /**
                     * Constructs a new QueryCollateralSettingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest);

                    /** QueryCollateralSettingRequest address. */
                    public address: string;

                    /** QueryCollateralSettingRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryCollateralSettingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCollateralSettingRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest;

                    /**
                     * Encodes the specified QueryCollateralSettingRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest.verify|verify} messages.
                     * @param message QueryCollateralSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCollateralSettingRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest.verify|verify} messages.
                     * @param message QueryCollateralSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCollateralSettingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCollateralSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest;

                    /**
                     * Decodes a QueryCollateralSettingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCollateralSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest;

                    /**
                     * Verifies a QueryCollateralSettingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCollateralSettingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCollateralSettingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest;

                    /**
                     * Creates a plain object from a QueryCollateralSettingRequest message. Also converts values to other types if specified.
                     * @param message QueryCollateralSettingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCollateralSettingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryCollateralSettingResponse. */
                interface IQueryCollateralSettingResponse {

                    /** QueryCollateralSettingResponse enabled */
                    enabled?: (boolean|null);
                }

                /** Represents a QueryCollateralSettingResponse. */
                class QueryCollateralSettingResponse implements IQueryCollateralSettingResponse {

                    /**
                     * Constructs a new QueryCollateralSettingResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingResponse);

                    /** QueryCollateralSettingResponse enabled. */
                    public enabled: boolean;

                    /**
                     * Creates a new QueryCollateralSettingResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCollateralSettingResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingResponse): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse;

                    /**
                     * Encodes the specified QueryCollateralSettingResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse.verify|verify} messages.
                     * @param message QueryCollateralSettingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCollateralSettingResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse.verify|verify} messages.
                     * @param message QueryCollateralSettingResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralSettingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCollateralSettingResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCollateralSettingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse;

                    /**
                     * Decodes a QueryCollateralSettingResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCollateralSettingResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse;

                    /**
                     * Verifies a QueryCollateralSettingResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCollateralSettingResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCollateralSettingResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse;

                    /**
                     * Creates a plain object from a QueryCollateralSettingResponse message. Also converts values to other types if specified.
                     * @param message QueryCollateralSettingResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryCollateralSettingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCollateralSettingResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryCollateralRequest. */
                interface IQueryCollateralRequest {

                    /** QueryCollateralRequest address */
                    address?: (string|null);

                    /** QueryCollateralRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryCollateralRequest. */
                class QueryCollateralRequest implements IQueryCollateralRequest {

                    /**
                     * Constructs a new QueryCollateralRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest);

                    /** QueryCollateralRequest address. */
                    public address: string;

                    /** QueryCollateralRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryCollateralRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCollateralRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest): umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest;

                    /**
                     * Encodes the specified QueryCollateralRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest.verify|verify} messages.
                     * @param message QueryCollateralRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCollateralRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest.verify|verify} messages.
                     * @param message QueryCollateralRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCollateralRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCollateralRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest;

                    /**
                     * Decodes a QueryCollateralRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCollateralRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest;

                    /**
                     * Verifies a QueryCollateralRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCollateralRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCollateralRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest;

                    /**
                     * Creates a plain object from a QueryCollateralRequest message. Also converts values to other types if specified.
                     * @param message QueryCollateralRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryCollateralRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCollateralRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryCollateralResponse. */
                interface IQueryCollateralResponse {

                    /** QueryCollateralResponse collateral */
                    collateral?: (cosmos.base.v1beta1.ICoin[]|null);
                }

                /** Represents a QueryCollateralResponse. */
                class QueryCollateralResponse implements IQueryCollateralResponse {

                    /**
                     * Constructs a new QueryCollateralResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralResponse);

                    /** QueryCollateralResponse collateral. */
                    public collateral: cosmos.base.v1beta1.ICoin[];

                    /**
                     * Creates a new QueryCollateralResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCollateralResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryCollateralResponse): umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse;

                    /**
                     * Encodes the specified QueryCollateralResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse.verify|verify} messages.
                     * @param message QueryCollateralResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCollateralResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse.verify|verify} messages.
                     * @param message QueryCollateralResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryCollateralResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCollateralResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCollateralResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse;

                    /**
                     * Decodes a QueryCollateralResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCollateralResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse;

                    /**
                     * Verifies a QueryCollateralResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCollateralResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCollateralResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse;

                    /**
                     * Creates a plain object from a QueryCollateralResponse message. Also converts values to other types if specified.
                     * @param message QueryCollateralResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryCollateralResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCollateralResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryExchangeRateRequest. */
                interface IQueryExchangeRateRequest {

                    /** QueryExchangeRateRequest denom */
                    denom?: (string|null);
                }

                /** Represents a QueryExchangeRateRequest. */
                class QueryExchangeRateRequest implements IQueryExchangeRateRequest {

                    /**
                     * Constructs a new QueryExchangeRateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest);

                    /** QueryExchangeRateRequest denom. */
                    public denom: string;

                    /**
                     * Creates a new QueryExchangeRateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryExchangeRateRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest;

                    /**
                     * Encodes the specified QueryExchangeRateRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest.verify|verify} messages.
                     * @param message QueryExchangeRateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryExchangeRateRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest.verify|verify} messages.
                     * @param message QueryExchangeRateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryExchangeRateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryExchangeRateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest;

                    /**
                     * Decodes a QueryExchangeRateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryExchangeRateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest;

                    /**
                     * Verifies a QueryExchangeRateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryExchangeRateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryExchangeRateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest;

                    /**
                     * Creates a plain object from a QueryExchangeRateRequest message. Also converts values to other types if specified.
                     * @param message QueryExchangeRateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryExchangeRateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryExchangeRateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryExchangeRateResponse. */
                interface IQueryExchangeRateResponse {

                    /** QueryExchangeRateResponse exchangeRate */
                    exchangeRate?: (string|null);
                }

                /** Represents a QueryExchangeRateResponse. */
                class QueryExchangeRateResponse implements IQueryExchangeRateResponse {

                    /**
                     * Constructs a new QueryExchangeRateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateResponse);

                    /** QueryExchangeRateResponse exchangeRate. */
                    public exchangeRate: string;

                    /**
                     * Creates a new QueryExchangeRateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryExchangeRateResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateResponse): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse;

                    /**
                     * Encodes the specified QueryExchangeRateResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse.verify|verify} messages.
                     * @param message QueryExchangeRateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryExchangeRateResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse.verify|verify} messages.
                     * @param message QueryExchangeRateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryExchangeRateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryExchangeRateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryExchangeRateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse;

                    /**
                     * Decodes a QueryExchangeRateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryExchangeRateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse;

                    /**
                     * Verifies a QueryExchangeRateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryExchangeRateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryExchangeRateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse;

                    /**
                     * Creates a plain object from a QueryExchangeRateResponse message. Also converts values to other types if specified.
                     * @param message QueryExchangeRateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryExchangeRateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryExchangeRateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowLimitRequest. */
                interface IQueryBorrowLimitRequest {

                    /** QueryBorrowLimitRequest address */
                    address?: (string|null);
                }

                /** Represents a QueryBorrowLimitRequest. */
                class QueryBorrowLimitRequest implements IQueryBorrowLimitRequest {

                    /**
                     * Constructs a new QueryBorrowLimitRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest);

                    /** QueryBorrowLimitRequest address. */
                    public address: string;

                    /**
                     * Creates a new QueryBorrowLimitRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowLimitRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest;

                    /**
                     * Encodes the specified QueryBorrowLimitRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest.verify|verify} messages.
                     * @param message QueryBorrowLimitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowLimitRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest.verify|verify} messages.
                     * @param message QueryBorrowLimitRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowLimitRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowLimitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest;

                    /**
                     * Decodes a QueryBorrowLimitRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowLimitRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest;

                    /**
                     * Verifies a QueryBorrowLimitRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowLimitRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowLimitRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest;

                    /**
                     * Creates a plain object from a QueryBorrowLimitRequest message. Also converts values to other types if specified.
                     * @param message QueryBorrowLimitRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowLimitRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryBorrowLimitResponse. */
                interface IQueryBorrowLimitResponse {

                    /** QueryBorrowLimitResponse borrowLimit */
                    borrowLimit?: (string|null);
                }

                /** Represents a QueryBorrowLimitResponse. */
                class QueryBorrowLimitResponse implements IQueryBorrowLimitResponse {

                    /**
                     * Constructs a new QueryBorrowLimitResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitResponse);

                    /** QueryBorrowLimitResponse borrowLimit. */
                    public borrowLimit: string;

                    /**
                     * Creates a new QueryBorrowLimitResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryBorrowLimitResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitResponse): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse;

                    /**
                     * Encodes the specified QueryBorrowLimitResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse.verify|verify} messages.
                     * @param message QueryBorrowLimitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryBorrowLimitResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse.verify|verify} messages.
                     * @param message QueryBorrowLimitResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryBorrowLimitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryBorrowLimitResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryBorrowLimitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse;

                    /**
                     * Decodes a QueryBorrowLimitResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryBorrowLimitResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse;

                    /**
                     * Verifies a QueryBorrowLimitResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryBorrowLimitResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryBorrowLimitResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse;

                    /**
                     * Creates a plain object from a QueryBorrowLimitResponse message. Also converts values to other types if specified.
                     * @param message QueryBorrowLimitResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryBorrowLimitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryBorrowLimitResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryLiquidationTargetsRequest. */
                interface IQueryLiquidationTargetsRequest {
                }

                /** Represents a QueryLiquidationTargetsRequest. */
                class QueryLiquidationTargetsRequest implements IQueryLiquidationTargetsRequest {

                    /**
                     * Constructs a new QueryLiquidationTargetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest);

                    /**
                     * Creates a new QueryLiquidationTargetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryLiquidationTargetsRequest instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest;

                    /**
                     * Encodes the specified QueryLiquidationTargetsRequest message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest.verify|verify} messages.
                     * @param message QueryLiquidationTargetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryLiquidationTargetsRequest message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest.verify|verify} messages.
                     * @param message QueryLiquidationTargetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryLiquidationTargetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryLiquidationTargetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest;

                    /**
                     * Decodes a QueryLiquidationTargetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryLiquidationTargetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest;

                    /**
                     * Verifies a QueryLiquidationTargetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryLiquidationTargetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryLiquidationTargetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest;

                    /**
                     * Creates a plain object from a QueryLiquidationTargetsRequest message. Also converts values to other types if specified.
                     * @param message QueryLiquidationTargetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryLiquidationTargetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryLiquidationTargetsResponse. */
                interface IQueryLiquidationTargetsResponse {

                    /** QueryLiquidationTargetsResponse targets */
                    targets?: (string[]|null);
                }

                /** Represents a QueryLiquidationTargetsResponse. */
                class QueryLiquidationTargetsResponse implements IQueryLiquidationTargetsResponse {

                    /**
                     * Constructs a new QueryLiquidationTargetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsResponse);

                    /** QueryLiquidationTargetsResponse targets. */
                    public targets: string[];

                    /**
                     * Creates a new QueryLiquidationTargetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryLiquidationTargetsResponse instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsResponse): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse;

                    /**
                     * Encodes the specified QueryLiquidationTargetsResponse message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse.verify|verify} messages.
                     * @param message QueryLiquidationTargetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryLiquidationTargetsResponse message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse.verify|verify} messages.
                     * @param message QueryLiquidationTargetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IQueryLiquidationTargetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryLiquidationTargetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryLiquidationTargetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse;

                    /**
                     * Decodes a QueryLiquidationTargetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryLiquidationTargetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse;

                    /**
                     * Verifies a QueryLiquidationTargetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryLiquidationTargetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryLiquidationTargetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse;

                    /**
                     * Creates a plain object from a QueryLiquidationTargetsResponse message. Also converts values to other types if specified.
                     * @param message QueryLiquidationTargetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.QueryLiquidationTargetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryLiquidationTargetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenesisState. */
                interface IGenesisState {

                    /** GenesisState params */
                    params?: (umeenetwork.umee.leverage.v1beta1.IParams|null);

                    /** GenesisState registry */
                    registry?: (umeenetwork.umee.leverage.v1beta1.IToken[]|null);

                    /** GenesisState adjustedBorrows */
                    adjustedBorrows?: (umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow[]|null);

                    /** GenesisState collateralSettings */
                    collateralSettings?: (umeenetwork.umee.leverage.v1beta1.ICollateralSetting[]|null);

                    /** GenesisState collateral */
                    collateral?: (umeenetwork.umee.leverage.v1beta1.ICollateral[]|null);

                    /** GenesisState reserves */
                    reserves?: (cosmos.base.v1beta1.ICoin[]|null);

                    /** GenesisState lastInterestTime */
                    lastInterestTime?: (number|Long|null);

                    /** GenesisState badDebts */
                    badDebts?: (umeenetwork.umee.leverage.v1beta1.IBadDebt[]|null);

                    /** GenesisState interestScalars */
                    interestScalars?: (umeenetwork.umee.leverage.v1beta1.IInterestScalar[]|null);

                    /** GenesisState utokenSupply */
                    utokenSupply?: (cosmos.base.v1beta1.ICoin[]|null);
                }

                /** Represents a GenesisState. */
                class GenesisState implements IGenesisState {

                    /**
                     * Constructs a new GenesisState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IGenesisState);

                    /** GenesisState params. */
                    public params?: (umeenetwork.umee.leverage.v1beta1.IParams|null);

                    /** GenesisState registry. */
                    public registry: umeenetwork.umee.leverage.v1beta1.IToken[];

                    /** GenesisState adjustedBorrows. */
                    public adjustedBorrows: umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow[];

                    /** GenesisState collateralSettings. */
                    public collateralSettings: umeenetwork.umee.leverage.v1beta1.ICollateralSetting[];

                    /** GenesisState collateral. */
                    public collateral: umeenetwork.umee.leverage.v1beta1.ICollateral[];

                    /** GenesisState reserves. */
                    public reserves: cosmos.base.v1beta1.ICoin[];

                    /** GenesisState lastInterestTime. */
                    public lastInterestTime: (number|Long);

                    /** GenesisState badDebts. */
                    public badDebts: umeenetwork.umee.leverage.v1beta1.IBadDebt[];

                    /** GenesisState interestScalars. */
                    public interestScalars: umeenetwork.umee.leverage.v1beta1.IInterestScalar[];

                    /** GenesisState utokenSupply. */
                    public utokenSupply: cosmos.base.v1beta1.ICoin[];

                    /**
                     * Creates a new GenesisState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenesisState instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IGenesisState): umeenetwork.umee.leverage.v1beta1.GenesisState;

                    /**
                     * Encodes the specified GenesisState message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.GenesisState.verify|verify} messages.
                     * @param message GenesisState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.GenesisState.verify|verify} messages.
                     * @param message GenesisState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenesisState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenesisState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.GenesisState;

                    /**
                     * Decodes a GenesisState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenesisState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.GenesisState;

                    /**
                     * Verifies a GenesisState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenesisState
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.GenesisState;

                    /**
                     * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
                     * @param message GenesisState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenesisState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AdjustedBorrow. */
                interface IAdjustedBorrow {

                    /** AdjustedBorrow address */
                    address?: (string|null);

                    /** AdjustedBorrow amount */
                    amount?: (cosmos.base.v1beta1.IDecCoin|null);
                }

                /** Represents an AdjustedBorrow. */
                class AdjustedBorrow implements IAdjustedBorrow {

                    /**
                     * Constructs a new AdjustedBorrow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow);

                    /** AdjustedBorrow address. */
                    public address: string;

                    /** AdjustedBorrow amount. */
                    public amount?: (cosmos.base.v1beta1.IDecCoin|null);

                    /**
                     * Creates a new AdjustedBorrow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdjustedBorrow instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow): umeenetwork.umee.leverage.v1beta1.AdjustedBorrow;

                    /**
                     * Encodes the specified AdjustedBorrow message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.AdjustedBorrow.verify|verify} messages.
                     * @param message AdjustedBorrow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdjustedBorrow message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.AdjustedBorrow.verify|verify} messages.
                     * @param message AdjustedBorrow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IAdjustedBorrow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdjustedBorrow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdjustedBorrow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.AdjustedBorrow;

                    /**
                     * Decodes an AdjustedBorrow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdjustedBorrow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.AdjustedBorrow;

                    /**
                     * Verifies an AdjustedBorrow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdjustedBorrow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdjustedBorrow
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.AdjustedBorrow;

                    /**
                     * Creates a plain object from an AdjustedBorrow message. Also converts values to other types if specified.
                     * @param message AdjustedBorrow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.AdjustedBorrow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdjustedBorrow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CollateralSetting. */
                interface ICollateralSetting {

                    /** CollateralSetting address */
                    address?: (string|null);

                    /** CollateralSetting denom */
                    denom?: (string|null);
                }

                /** Represents a CollateralSetting. */
                class CollateralSetting implements ICollateralSetting {

                    /**
                     * Constructs a new CollateralSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.ICollateralSetting);

                    /** CollateralSetting address. */
                    public address: string;

                    /** CollateralSetting denom. */
                    public denom: string;

                    /**
                     * Creates a new CollateralSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CollateralSetting instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.ICollateralSetting): umeenetwork.umee.leverage.v1beta1.CollateralSetting;

                    /**
                     * Encodes the specified CollateralSetting message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.CollateralSetting.verify|verify} messages.
                     * @param message CollateralSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.ICollateralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CollateralSetting message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.CollateralSetting.verify|verify} messages.
                     * @param message CollateralSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.ICollateralSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CollateralSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CollateralSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.CollateralSetting;

                    /**
                     * Decodes a CollateralSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CollateralSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.CollateralSetting;

                    /**
                     * Verifies a CollateralSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CollateralSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CollateralSetting
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.CollateralSetting;

                    /**
                     * Creates a plain object from a CollateralSetting message. Also converts values to other types if specified.
                     * @param message CollateralSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.CollateralSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CollateralSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Collateral. */
                interface ICollateral {

                    /** Collateral address */
                    address?: (string|null);

                    /** Collateral amount */
                    amount?: (cosmos.base.v1beta1.ICoin|null);
                }

                /** Represents a Collateral. */
                class Collateral implements ICollateral {

                    /**
                     * Constructs a new Collateral.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.ICollateral);

                    /** Collateral address. */
                    public address: string;

                    /** Collateral amount. */
                    public amount?: (cosmos.base.v1beta1.ICoin|null);

                    /**
                     * Creates a new Collateral instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Collateral instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.ICollateral): umeenetwork.umee.leverage.v1beta1.Collateral;

                    /**
                     * Encodes the specified Collateral message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Collateral.verify|verify} messages.
                     * @param message Collateral message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.ICollateral, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Collateral message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.Collateral.verify|verify} messages.
                     * @param message Collateral message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.ICollateral, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Collateral message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Collateral
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.Collateral;

                    /**
                     * Decodes a Collateral message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Collateral
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.Collateral;

                    /**
                     * Verifies a Collateral message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Collateral message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Collateral
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.Collateral;

                    /**
                     * Creates a plain object from a Collateral message. Also converts values to other types if specified.
                     * @param message Collateral
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.Collateral, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Collateral to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BadDebt. */
                interface IBadDebt {

                    /** BadDebt address */
                    address?: (string|null);

                    /** BadDebt denom */
                    denom?: (string|null);
                }

                /** Represents a BadDebt. */
                class BadDebt implements IBadDebt {

                    /**
                     * Constructs a new BadDebt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IBadDebt);

                    /** BadDebt address. */
                    public address: string;

                    /** BadDebt denom. */
                    public denom: string;

                    /**
                     * Creates a new BadDebt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BadDebt instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IBadDebt): umeenetwork.umee.leverage.v1beta1.BadDebt;

                    /**
                     * Encodes the specified BadDebt message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.BadDebt.verify|verify} messages.
                     * @param message BadDebt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IBadDebt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BadDebt message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.BadDebt.verify|verify} messages.
                     * @param message BadDebt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IBadDebt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BadDebt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BadDebt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.BadDebt;

                    /**
                     * Decodes a BadDebt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BadDebt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.BadDebt;

                    /**
                     * Verifies a BadDebt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BadDebt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BadDebt
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.BadDebt;

                    /**
                     * Creates a plain object from a BadDebt message. Also converts values to other types if specified.
                     * @param message BadDebt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.BadDebt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BadDebt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InterestScalar. */
                interface IInterestScalar {

                    /** InterestScalar denom */
                    denom?: (string|null);

                    /** InterestScalar scalar */
                    scalar?: (string|null);
                }

                /** Represents an InterestScalar. */
                class InterestScalar implements IInterestScalar {

                    /**
                     * Constructs a new InterestScalar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: umeenetwork.umee.leverage.v1beta1.IInterestScalar);

                    /** InterestScalar denom. */
                    public denom: string;

                    /** InterestScalar scalar. */
                    public scalar: string;

                    /**
                     * Creates a new InterestScalar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterestScalar instance
                     */
                    public static create(properties?: umeenetwork.umee.leverage.v1beta1.IInterestScalar): umeenetwork.umee.leverage.v1beta1.InterestScalar;

                    /**
                     * Encodes the specified InterestScalar message. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.InterestScalar.verify|verify} messages.
                     * @param message InterestScalar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: umeenetwork.umee.leverage.v1beta1.IInterestScalar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterestScalar message, length delimited. Does not implicitly {@link umeenetwork.umee.leverage.v1beta1.InterestScalar.verify|verify} messages.
                     * @param message InterestScalar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: umeenetwork.umee.leverage.v1beta1.IInterestScalar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterestScalar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterestScalar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): umeenetwork.umee.leverage.v1beta1.InterestScalar;

                    /**
                     * Decodes an InterestScalar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterestScalar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): umeenetwork.umee.leverage.v1beta1.InterestScalar;

                    /**
                     * Verifies an InterestScalar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterestScalar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterestScalar
                     */
                    public static fromObject(object: { [k: string]: any }): umeenetwork.umee.leverage.v1beta1.InterestScalar;

                    /**
                     * Creates a plain object from an InterestScalar message. Also converts values to other types if specified.
                     * @param message InterestScalar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: umeenetwork.umee.leverage.v1beta1.InterestScalar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterestScalar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
