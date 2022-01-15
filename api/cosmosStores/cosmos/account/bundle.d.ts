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

    /** Namespace bank. */
    namespace bank {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Params. */
            interface IParams {

                /** Params sendEnabled */
                sendEnabled?: (cosmos.bank.v1beta1.ISendEnabled[]|null);

                /** Params defaultSendEnabled */
                defaultSendEnabled?: (boolean|null);
            }

            /** Represents a Params. */
            class Params implements IParams {

                /**
                 * Constructs a new Params.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.IParams);

                /** Params sendEnabled. */
                public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

                /** Params defaultSendEnabled. */
                public defaultSendEnabled: boolean;

                /**
                 * Creates a new Params instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Params instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IParams): cosmos.bank.v1beta1.Params;

                /**
                 * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Params message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
                 * @param message Params message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Params message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.Params;

                /**
                 * Decodes a Params message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Params
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.Params;

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
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.Params;

                /**
                 * Creates a plain object from a Params message. Also converts values to other types if specified.
                 * @param message Params
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Params to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SendEnabled. */
            interface ISendEnabled {

                /** SendEnabled denom */
                denom?: (string|null);

                /** SendEnabled enabled */
                enabled?: (boolean|null);
            }

            /** Represents a SendEnabled. */
            class SendEnabled implements ISendEnabled {

                /**
                 * Constructs a new SendEnabled.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.ISendEnabled);

                /** SendEnabled denom. */
                public denom: string;

                /** SendEnabled enabled. */
                public enabled: boolean;

                /**
                 * Creates a new SendEnabled instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SendEnabled instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.ISendEnabled): cosmos.bank.v1beta1.SendEnabled;

                /**
                 * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
                 * @param message SendEnabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.ISendEnabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SendEnabled message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
                 * @param message SendEnabled message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.ISendEnabled, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SendEnabled message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SendEnabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.SendEnabled;

                /**
                 * Decodes a SendEnabled message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SendEnabled
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.SendEnabled;

                /**
                 * Verifies a SendEnabled message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SendEnabled message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SendEnabled
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.SendEnabled;

                /**
                 * Creates a plain object from a SendEnabled message. Also converts values to other types if specified.
                 * @param message SendEnabled
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.SendEnabled, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SendEnabled to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Input. */
            interface IInput {

                /** Input address */
                address?: (string|null);

                /** Input coins */
                coins?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents an Input. */
            class Input implements IInput {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.IInput);

                /** Input address. */
                public address: string;

                /** Input coins. */
                public coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Input instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Input instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IInput): cosmos.bank.v1beta1.Input;

                /**
                 * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Input message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.Input;

                /**
                 * Decodes an Input message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.Input;

                /**
                 * Verifies an Input message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Input message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Input
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.Input;

                /**
                 * Creates a plain object from an Input message. Also converts values to other types if specified.
                 * @param message Input
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Input to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Output. */
            interface IOutput {

                /** Output address */
                address?: (string|null);

                /** Output coins */
                coins?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.IOutput);

                /** Output address. */
                public address: string;

                /** Output coins. */
                public coins: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Output instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Output instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IOutput): cosmos.bank.v1beta1.Output;

                /**
                 * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Output message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.Output;

                /**
                 * Decodes an Output message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.Output;

                /**
                 * Verifies an Output message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Output message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Output
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.Output;

                /**
                 * Creates a plain object from an Output message. Also converts values to other types if specified.
                 * @param message Output
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Output to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Supply. */
            interface ISupply {

                /** Supply total */
                total?: (cosmos.base.v1beta1.ICoin[]|null);
            }

            /** Represents a Supply. */
            class Supply implements ISupply {

                /**
                 * Constructs a new Supply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.ISupply);

                /** Supply total. */
                public total: cosmos.base.v1beta1.ICoin[];

                /**
                 * Creates a new Supply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Supply instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.ISupply): cosmos.bank.v1beta1.Supply;

                /**
                 * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
                 * @param message Supply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.ISupply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Supply message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
                 * @param message Supply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.ISupply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Supply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Supply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.Supply;

                /**
                 * Decodes a Supply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Supply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.Supply;

                /**
                 * Verifies a Supply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Supply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Supply
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.Supply;

                /**
                 * Creates a plain object from a Supply message. Also converts values to other types if specified.
                 * @param message Supply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.Supply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Supply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DenomUnit. */
            interface IDenomUnit {

                /** DenomUnit denom */
                denom?: (string|null);

                /** DenomUnit exponent */
                exponent?: (number|null);

                /** DenomUnit aliases */
                aliases?: (string[]|null);
            }

            /** Represents a DenomUnit. */
            class DenomUnit implements IDenomUnit {

                /**
                 * Constructs a new DenomUnit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.IDenomUnit);

                /** DenomUnit denom. */
                public denom: string;

                /** DenomUnit exponent. */
                public exponent: number;

                /** DenomUnit aliases. */
                public aliases: string[];

                /**
                 * Creates a new DenomUnit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenomUnit instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IDenomUnit): cosmos.bank.v1beta1.DenomUnit;

                /**
                 * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
                 * @param message DenomUnit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.IDenomUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenomUnit message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
                 * @param message DenomUnit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.IDenomUnit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenomUnit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenomUnit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.DenomUnit;

                /**
                 * Decodes a DenomUnit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DenomUnit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.DenomUnit;

                /**
                 * Verifies a DenomUnit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DenomUnit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DenomUnit
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.DenomUnit;

                /**
                 * Creates a plain object from a DenomUnit message. Also converts values to other types if specified.
                 * @param message DenomUnit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.DenomUnit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DenomUnit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Metadata. */
            interface IMetadata {

                /** Metadata description */
                description?: (string|null);

                /** Metadata denomUnits */
                denomUnits?: (cosmos.bank.v1beta1.IDenomUnit[]|null);

                /** Metadata base */
                base?: (string|null);

                /** Metadata display */
                display?: (string|null);

                /** Metadata name */
                name?: (string|null);

                /** Metadata symbol */
                symbol?: (string|null);

                /** Metadata uri */
                uri?: (string|null);

                /** Metadata uriHash */
                uriHash?: (string|null);
            }

            /** Represents a Metadata. */
            class Metadata implements IMetadata {

                /**
                 * Constructs a new Metadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.bank.v1beta1.IMetadata);

                /** Metadata description. */
                public description: string;

                /** Metadata denomUnits. */
                public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

                /** Metadata base. */
                public base: string;

                /** Metadata display. */
                public display: string;

                /** Metadata name. */
                public name: string;

                /** Metadata symbol. */
                public symbol: string;

                /** Metadata uri. */
                public uri: string;

                /** Metadata uriHash. */
                public uriHash: string;

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Metadata instance
                 */
                public static create(properties?: cosmos.bank.v1beta1.IMetadata): cosmos.bank.v1beta1.Metadata;

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.bank.v1beta1.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.bank.v1beta1.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.bank.v1beta1.Metadata;

                /**
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.bank.v1beta1.Metadata;

                /**
                 * Verifies a Metadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Metadata
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.bank.v1beta1.Metadata;

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @param message Metadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.bank.v1beta1.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Metadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace gravity. */
export namespace gravity {

    /** Namespace v1. */
    namespace v1 {

        /** ClaimType enum. */
        enum ClaimType {
            CLAIM_TYPE_UNSPECIFIED = 0,
            CLAIM_TYPE_SEND_TO_COSMOS = 1,
            CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,
            CLAIM_TYPE_ERC20_DEPLOYED = 3,
            CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
            CLAIM_TYPE_VALSET_UPDATED = 5
        }

        /** Properties of an Attestation. */
        interface IAttestation {

            /** Attestation observed */
            observed?: (boolean|null);

            /** Attestation votes */
            votes?: (string[]|null);

            /** Attestation height */
            height?: (number|Long|null);

            /** Attestation claim */
            claim?: (google.protobuf.IAny|null);
        }

        /** Represents an Attestation. */
        class Attestation implements IAttestation {

            /**
             * Constructs a new Attestation.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IAttestation);

            /** Attestation observed. */
            public observed: boolean;

            /** Attestation votes. */
            public votes: string[];

            /** Attestation height. */
            public height: (number|Long);

            /** Attestation claim. */
            public claim?: (google.protobuf.IAny|null);

            /**
             * Creates a new Attestation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Attestation instance
             */
            public static create(properties?: gravity.v1.IAttestation): gravity.v1.Attestation;

            /**
             * Encodes the specified Attestation message. Does not implicitly {@link gravity.v1.Attestation.verify|verify} messages.
             * @param message Attestation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Attestation message, length delimited. Does not implicitly {@link gravity.v1.Attestation.verify|verify} messages.
             * @param message Attestation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Attestation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Attestation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.Attestation;

            /**
             * Decodes an Attestation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Attestation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.Attestation;

            /**
             * Verifies an Attestation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Attestation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Attestation
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.Attestation;

            /**
             * Creates a plain object from an Attestation message. Also converts values to other types if specified.
             * @param message Attestation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.Attestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Attestation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20Token. */
        interface IERC20Token {

            /** ERC20Token contract */
            contract?: (string|null);

            /** ERC20Token amount */
            amount?: (string|null);
        }

        /** Represents a ERC20Token. */
        class ERC20Token implements IERC20Token {

            /**
             * Constructs a new ERC20Token.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20Token);

            /** ERC20Token contract. */
            public contract: string;

            /** ERC20Token amount. */
            public amount: string;

            /**
             * Creates a new ERC20Token instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ERC20Token instance
             */
            public static create(properties?: gravity.v1.IERC20Token): gravity.v1.ERC20Token;

            /**
             * Encodes the specified ERC20Token message. Does not implicitly {@link gravity.v1.ERC20Token.verify|verify} messages.
             * @param message ERC20Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20Token, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20Token message, length delimited. Does not implicitly {@link gravity.v1.ERC20Token.verify|verify} messages.
             * @param message ERC20Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20Token, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20Token message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20Token;

            /**
             * Decodes a ERC20Token message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20Token;

            /**
             * Verifies a ERC20Token message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20Token message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20Token
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20Token;

            /**
             * Creates a plain object from a ERC20Token message. Also converts values to other types if specified.
             * @param message ERC20Token
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20Token to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IDSet. */
        interface IIDSet {

            /** IDSet ids */
            ids?: ((number|Long)[]|null);
        }

        /** Represents a IDSet. */
        class IDSet implements IIDSet {

            /**
             * Constructs a new IDSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IIDSet);

            /** IDSet ids. */
            public ids: (number|Long)[];

            /**
             * Creates a new IDSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IDSet instance
             */
            public static create(properties?: gravity.v1.IIDSet): gravity.v1.IDSet;

            /**
             * Encodes the specified IDSet message. Does not implicitly {@link gravity.v1.IDSet.verify|verify} messages.
             * @param message IDSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IIDSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IDSet message, length delimited. Does not implicitly {@link gravity.v1.IDSet.verify|verify} messages.
             * @param message IDSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IIDSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IDSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IDSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.IDSet;

            /**
             * Decodes a IDSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IDSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.IDSet;

            /**
             * Verifies a IDSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IDSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IDSet
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.IDSet;

            /**
             * Creates a plain object from a IDSet message. Also converts values to other types if specified.
             * @param message IDSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.IDSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IDSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchFees. */
        interface IBatchFees {

            /** BatchFees token */
            token?: (string|null);

            /** BatchFees totalFees */
            totalFees?: (string|null);
        }

        /** Represents a BatchFees. */
        class BatchFees implements IBatchFees {

            /**
             * Constructs a new BatchFees.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBatchFees);

            /** BatchFees token. */
            public token: string;

            /** BatchFees totalFees. */
            public totalFees: string;

            /**
             * Creates a new BatchFees instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchFees instance
             */
            public static create(properties?: gravity.v1.IBatchFees): gravity.v1.BatchFees;

            /**
             * Encodes the specified BatchFees message. Does not implicitly {@link gravity.v1.BatchFees.verify|verify} messages.
             * @param message BatchFees message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBatchFees, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchFees message, length delimited. Does not implicitly {@link gravity.v1.BatchFees.verify|verify} messages.
             * @param message BatchFees message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBatchFees, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchFees message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchFees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BatchFees;

            /**
             * Decodes a BatchFees message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchFees
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BatchFees;

            /**
             * Verifies a BatchFees message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchFees message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchFees
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BatchFees;

            /**
             * Creates a plain object from a BatchFees message. Also converts values to other types if specified.
             * @param message BatchFees
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BatchFees, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchFees to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OutgoingTxBatch. */
        interface IOutgoingTxBatch {

            /** OutgoingTxBatch batchNonce */
            batchNonce?: (number|Long|null);

            /** OutgoingTxBatch batchTimeout */
            batchTimeout?: (number|Long|null);

            /** OutgoingTxBatch transactions */
            transactions?: (gravity.v1.IOutgoingTransferTx[]|null);

            /** OutgoingTxBatch tokenContract */
            tokenContract?: (string|null);

            /** OutgoingTxBatch block */
            block?: (number|Long|null);
        }

        /** Represents an OutgoingTxBatch. */
        class OutgoingTxBatch implements IOutgoingTxBatch {

            /**
             * Constructs a new OutgoingTxBatch.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IOutgoingTxBatch);

            /** OutgoingTxBatch batchNonce. */
            public batchNonce: (number|Long);

            /** OutgoingTxBatch batchTimeout. */
            public batchTimeout: (number|Long);

            /** OutgoingTxBatch transactions. */
            public transactions: gravity.v1.IOutgoingTransferTx[];

            /** OutgoingTxBatch tokenContract. */
            public tokenContract: string;

            /** OutgoingTxBatch block. */
            public block: (number|Long);

            /**
             * Creates a new OutgoingTxBatch instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutgoingTxBatch instance
             */
            public static create(properties?: gravity.v1.IOutgoingTxBatch): gravity.v1.OutgoingTxBatch;

            /**
             * Encodes the specified OutgoingTxBatch message. Does not implicitly {@link gravity.v1.OutgoingTxBatch.verify|verify} messages.
             * @param message OutgoingTxBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IOutgoingTxBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OutgoingTxBatch message, length delimited. Does not implicitly {@link gravity.v1.OutgoingTxBatch.verify|verify} messages.
             * @param message OutgoingTxBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IOutgoingTxBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutgoingTxBatch message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutgoingTxBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.OutgoingTxBatch;

            /**
             * Decodes an OutgoingTxBatch message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OutgoingTxBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.OutgoingTxBatch;

            /**
             * Verifies an OutgoingTxBatch message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OutgoingTxBatch message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OutgoingTxBatch
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.OutgoingTxBatch;

            /**
             * Creates a plain object from an OutgoingTxBatch message. Also converts values to other types if specified.
             * @param message OutgoingTxBatch
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.OutgoingTxBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OutgoingTxBatch to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OutgoingTransferTx. */
        interface IOutgoingTransferTx {

            /** OutgoingTransferTx id */
            id?: (number|Long|null);

            /** OutgoingTransferTx sender */
            sender?: (string|null);

            /** OutgoingTransferTx destAddress */
            destAddress?: (string|null);

            /** OutgoingTransferTx erc20Token */
            erc20Token?: (gravity.v1.IERC20Token|null);

            /** OutgoingTransferTx erc20Fee */
            erc20Fee?: (gravity.v1.IERC20Token|null);
        }

        /** Represents an OutgoingTransferTx. */
        class OutgoingTransferTx implements IOutgoingTransferTx {

            /**
             * Constructs a new OutgoingTransferTx.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IOutgoingTransferTx);

            /** OutgoingTransferTx id. */
            public id: (number|Long);

            /** OutgoingTransferTx sender. */
            public sender: string;

            /** OutgoingTransferTx destAddress. */
            public destAddress: string;

            /** OutgoingTransferTx erc20Token. */
            public erc20Token?: (gravity.v1.IERC20Token|null);

            /** OutgoingTransferTx erc20Fee. */
            public erc20Fee?: (gravity.v1.IERC20Token|null);

            /**
             * Creates a new OutgoingTransferTx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutgoingTransferTx instance
             */
            public static create(properties?: gravity.v1.IOutgoingTransferTx): gravity.v1.OutgoingTransferTx;

            /**
             * Encodes the specified OutgoingTransferTx message. Does not implicitly {@link gravity.v1.OutgoingTransferTx.verify|verify} messages.
             * @param message OutgoingTransferTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IOutgoingTransferTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OutgoingTransferTx message, length delimited. Does not implicitly {@link gravity.v1.OutgoingTransferTx.verify|verify} messages.
             * @param message OutgoingTransferTx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IOutgoingTransferTx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutgoingTransferTx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutgoingTransferTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.OutgoingTransferTx;

            /**
             * Decodes an OutgoingTransferTx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OutgoingTransferTx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.OutgoingTransferTx;

            /**
             * Verifies an OutgoingTransferTx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OutgoingTransferTx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OutgoingTransferTx
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.OutgoingTransferTx;

            /**
             * Creates a plain object from an OutgoingTransferTx message. Also converts values to other types if specified.
             * @param message OutgoingTransferTx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.OutgoingTransferTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OutgoingTransferTx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OutgoingLogicCall. */
        interface IOutgoingLogicCall {

            /** OutgoingLogicCall transfers */
            transfers?: (gravity.v1.IERC20Token[]|null);

            /** OutgoingLogicCall fees */
            fees?: (gravity.v1.IERC20Token[]|null);

            /** OutgoingLogicCall logicContractAddress */
            logicContractAddress?: (string|null);

            /** OutgoingLogicCall payload */
            payload?: (Uint8Array|null);

            /** OutgoingLogicCall timeout */
            timeout?: (number|Long|null);

            /** OutgoingLogicCall invalidationId */
            invalidationId?: (Uint8Array|null);

            /** OutgoingLogicCall invalidationNonce */
            invalidationNonce?: (number|Long|null);

            /** OutgoingLogicCall block */
            block?: (number|Long|null);
        }

        /** Represents an OutgoingLogicCall. */
        class OutgoingLogicCall implements IOutgoingLogicCall {

            /**
             * Constructs a new OutgoingLogicCall.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IOutgoingLogicCall);

            /** OutgoingLogicCall transfers. */
            public transfers: gravity.v1.IERC20Token[];

            /** OutgoingLogicCall fees. */
            public fees: gravity.v1.IERC20Token[];

            /** OutgoingLogicCall logicContractAddress. */
            public logicContractAddress: string;

            /** OutgoingLogicCall payload. */
            public payload: Uint8Array;

            /** OutgoingLogicCall timeout. */
            public timeout: (number|Long);

            /** OutgoingLogicCall invalidationId. */
            public invalidationId: Uint8Array;

            /** OutgoingLogicCall invalidationNonce. */
            public invalidationNonce: (number|Long);

            /** OutgoingLogicCall block. */
            public block: (number|Long);

            /**
             * Creates a new OutgoingLogicCall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutgoingLogicCall instance
             */
            public static create(properties?: gravity.v1.IOutgoingLogicCall): gravity.v1.OutgoingLogicCall;

            /**
             * Encodes the specified OutgoingLogicCall message. Does not implicitly {@link gravity.v1.OutgoingLogicCall.verify|verify} messages.
             * @param message OutgoingLogicCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IOutgoingLogicCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OutgoingLogicCall message, length delimited. Does not implicitly {@link gravity.v1.OutgoingLogicCall.verify|verify} messages.
             * @param message OutgoingLogicCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IOutgoingLogicCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutgoingLogicCall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutgoingLogicCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.OutgoingLogicCall;

            /**
             * Decodes an OutgoingLogicCall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OutgoingLogicCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.OutgoingLogicCall;

            /**
             * Verifies an OutgoingLogicCall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OutgoingLogicCall message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OutgoingLogicCall
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.OutgoingLogicCall;

            /**
             * Creates a plain object from an OutgoingLogicCall message. Also converts values to other types if specified.
             * @param message OutgoingLogicCall
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.OutgoingLogicCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OutgoingLogicCall to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BridgeValidator. */
        interface IBridgeValidator {

            /** BridgeValidator power */
            power?: (number|Long|null);

            /** BridgeValidator ethereumAddress */
            ethereumAddress?: (string|null);
        }

        /** Represents a BridgeValidator. */
        class BridgeValidator implements IBridgeValidator {

            /**
             * Constructs a new BridgeValidator.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IBridgeValidator);

            /** BridgeValidator power. */
            public power: (number|Long);

            /** BridgeValidator ethereumAddress. */
            public ethereumAddress: string;

            /**
             * Creates a new BridgeValidator instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BridgeValidator instance
             */
            public static create(properties?: gravity.v1.IBridgeValidator): gravity.v1.BridgeValidator;

            /**
             * Encodes the specified BridgeValidator message. Does not implicitly {@link gravity.v1.BridgeValidator.verify|verify} messages.
             * @param message BridgeValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IBridgeValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BridgeValidator message, length delimited. Does not implicitly {@link gravity.v1.BridgeValidator.verify|verify} messages.
             * @param message BridgeValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IBridgeValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BridgeValidator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BridgeValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.BridgeValidator;

            /**
             * Decodes a BridgeValidator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BridgeValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.BridgeValidator;

            /**
             * Verifies a BridgeValidator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BridgeValidator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BridgeValidator
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.BridgeValidator;

            /**
             * Creates a plain object from a BridgeValidator message. Also converts values to other types if specified.
             * @param message BridgeValidator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.BridgeValidator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BridgeValidator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Valset. */
        interface IValset {

            /** Valset nonce */
            nonce?: (number|Long|null);

            /** Valset members */
            members?: (gravity.v1.IBridgeValidator[]|null);

            /** Valset height */
            height?: (number|Long|null);

            /** Valset rewardAmount */
            rewardAmount?: (string|null);

            /** Valset rewardToken */
            rewardToken?: (string|null);
        }

        /** Represents a Valset. */
        class Valset implements IValset {

            /**
             * Constructs a new Valset.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IValset);

            /** Valset nonce. */
            public nonce: (number|Long);

            /** Valset members. */
            public members: gravity.v1.IBridgeValidator[];

            /** Valset height. */
            public height: (number|Long);

            /** Valset rewardAmount. */
            public rewardAmount: string;

            /** Valset rewardToken. */
            public rewardToken: string;

            /**
             * Creates a new Valset instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Valset instance
             */
            public static create(properties?: gravity.v1.IValset): gravity.v1.Valset;

            /**
             * Encodes the specified Valset message. Does not implicitly {@link gravity.v1.Valset.verify|verify} messages.
             * @param message Valset message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IValset, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Valset message, length delimited. Does not implicitly {@link gravity.v1.Valset.verify|verify} messages.
             * @param message Valset message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IValset, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Valset message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Valset
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.Valset;

            /**
             * Decodes a Valset message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Valset
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.Valset;

            /**
             * Verifies a Valset message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Valset message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Valset
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.Valset;

            /**
             * Creates a plain object from a Valset message. Also converts values to other types if specified.
             * @param message Valset
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.Valset, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Valset to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LastObservedEthereumBlockHeight. */
        interface ILastObservedEthereumBlockHeight {

            /** LastObservedEthereumBlockHeight cosmosBlockHeight */
            cosmosBlockHeight?: (number|Long|null);

            /** LastObservedEthereumBlockHeight ethereumBlockHeight */
            ethereumBlockHeight?: (number|Long|null);
        }

        /** Represents a LastObservedEthereumBlockHeight. */
        class LastObservedEthereumBlockHeight implements ILastObservedEthereumBlockHeight {

            /**
             * Constructs a new LastObservedEthereumBlockHeight.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.ILastObservedEthereumBlockHeight);

            /** LastObservedEthereumBlockHeight cosmosBlockHeight. */
            public cosmosBlockHeight: (number|Long);

            /** LastObservedEthereumBlockHeight ethereumBlockHeight. */
            public ethereumBlockHeight: (number|Long);

            /**
             * Creates a new LastObservedEthereumBlockHeight instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LastObservedEthereumBlockHeight instance
             */
            public static create(properties?: gravity.v1.ILastObservedEthereumBlockHeight): gravity.v1.LastObservedEthereumBlockHeight;

            /**
             * Encodes the specified LastObservedEthereumBlockHeight message. Does not implicitly {@link gravity.v1.LastObservedEthereumBlockHeight.verify|verify} messages.
             * @param message LastObservedEthereumBlockHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.ILastObservedEthereumBlockHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LastObservedEthereumBlockHeight message, length delimited. Does not implicitly {@link gravity.v1.LastObservedEthereumBlockHeight.verify|verify} messages.
             * @param message LastObservedEthereumBlockHeight message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.ILastObservedEthereumBlockHeight, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LastObservedEthereumBlockHeight message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LastObservedEthereumBlockHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.LastObservedEthereumBlockHeight;

            /**
             * Decodes a LastObservedEthereumBlockHeight message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LastObservedEthereumBlockHeight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.LastObservedEthereumBlockHeight;

            /**
             * Verifies a LastObservedEthereumBlockHeight message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LastObservedEthereumBlockHeight message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LastObservedEthereumBlockHeight
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.LastObservedEthereumBlockHeight;

            /**
             * Creates a plain object from a LastObservedEthereumBlockHeight message. Also converts values to other types if specified.
             * @param message LastObservedEthereumBlockHeight
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.LastObservedEthereumBlockHeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LastObservedEthereumBlockHeight to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ERC20ToDenom. */
        interface IERC20ToDenom {

            /** ERC20ToDenom erc20 */
            erc20?: (string|null);

            /** ERC20ToDenom denom */
            denom?: (string|null);
        }

        /** Represents a ERC20ToDenom. */
        class ERC20ToDenom implements IERC20ToDenom {

            /**
             * Constructs a new ERC20ToDenom.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IERC20ToDenom);

            /** ERC20ToDenom erc20. */
            public erc20: string;

            /** ERC20ToDenom denom. */
            public denom: string;

            /**
             * Creates a new ERC20ToDenom instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ERC20ToDenom instance
             */
            public static create(properties?: gravity.v1.IERC20ToDenom): gravity.v1.ERC20ToDenom;

            /**
             * Encodes the specified ERC20ToDenom message. Does not implicitly {@link gravity.v1.ERC20ToDenom.verify|verify} messages.
             * @param message ERC20ToDenom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IERC20ToDenom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ERC20ToDenom message, length delimited. Does not implicitly {@link gravity.v1.ERC20ToDenom.verify|verify} messages.
             * @param message ERC20ToDenom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IERC20ToDenom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ERC20ToDenom message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ERC20ToDenom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.ERC20ToDenom;

            /**
             * Decodes a ERC20ToDenom message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ERC20ToDenom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.ERC20ToDenom;

            /**
             * Verifies a ERC20ToDenom message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ERC20ToDenom message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ERC20ToDenom
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.ERC20ToDenom;

            /**
             * Creates a plain object from a ERC20ToDenom message. Also converts values to other types if specified.
             * @param message ERC20ToDenom
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.ERC20ToDenom, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ERC20ToDenom to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnhaltBridgeProposal. */
        interface IUnhaltBridgeProposal {

            /** UnhaltBridgeProposal title */
            title?: (string|null);

            /** UnhaltBridgeProposal description */
            description?: (string|null);

            /** UnhaltBridgeProposal targetNonce */
            targetNonce?: (number|Long|null);
        }

        /** Represents an UnhaltBridgeProposal. */
        class UnhaltBridgeProposal implements IUnhaltBridgeProposal {

            /**
             * Constructs a new UnhaltBridgeProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IUnhaltBridgeProposal);

            /** UnhaltBridgeProposal title. */
            public title: string;

            /** UnhaltBridgeProposal description. */
            public description: string;

            /** UnhaltBridgeProposal targetNonce. */
            public targetNonce: (number|Long);

            /**
             * Creates a new UnhaltBridgeProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnhaltBridgeProposal instance
             */
            public static create(properties?: gravity.v1.IUnhaltBridgeProposal): gravity.v1.UnhaltBridgeProposal;

            /**
             * Encodes the specified UnhaltBridgeProposal message. Does not implicitly {@link gravity.v1.UnhaltBridgeProposal.verify|verify} messages.
             * @param message UnhaltBridgeProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IUnhaltBridgeProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnhaltBridgeProposal message, length delimited. Does not implicitly {@link gravity.v1.UnhaltBridgeProposal.verify|verify} messages.
             * @param message UnhaltBridgeProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IUnhaltBridgeProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnhaltBridgeProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnhaltBridgeProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.UnhaltBridgeProposal;

            /**
             * Decodes an UnhaltBridgeProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnhaltBridgeProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.UnhaltBridgeProposal;

            /**
             * Verifies an UnhaltBridgeProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnhaltBridgeProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnhaltBridgeProposal
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.UnhaltBridgeProposal;

            /**
             * Creates a plain object from an UnhaltBridgeProposal message. Also converts values to other types if specified.
             * @param message UnhaltBridgeProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.UnhaltBridgeProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnhaltBridgeProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AirdropProposal. */
        interface IAirdropProposal {

            /** AirdropProposal title */
            title?: (string|null);

            /** AirdropProposal description */
            description?: (string|null);

            /** AirdropProposal recipients */
            recipients?: (string[]|null);

            /** AirdropProposal amount */
            amount?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents an AirdropProposal. */
        class AirdropProposal implements IAirdropProposal {

            /**
             * Constructs a new AirdropProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IAirdropProposal);

            /** AirdropProposal title. */
            public title: string;

            /** AirdropProposal description. */
            public description: string;

            /** AirdropProposal recipients. */
            public recipients: string[];

            /** AirdropProposal amount. */
            public amount?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Creates a new AirdropProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AirdropProposal instance
             */
            public static create(properties?: gravity.v1.IAirdropProposal): gravity.v1.AirdropProposal;

            /**
             * Encodes the specified AirdropProposal message. Does not implicitly {@link gravity.v1.AirdropProposal.verify|verify} messages.
             * @param message AirdropProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IAirdropProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AirdropProposal message, length delimited. Does not implicitly {@link gravity.v1.AirdropProposal.verify|verify} messages.
             * @param message AirdropProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IAirdropProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AirdropProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AirdropProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.AirdropProposal;

            /**
             * Decodes an AirdropProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AirdropProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.AirdropProposal;

            /**
             * Verifies an AirdropProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AirdropProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AirdropProposal
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.AirdropProposal;

            /**
             * Creates a plain object from an AirdropProposal message. Also converts values to other types if specified.
             * @param message AirdropProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.AirdropProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AirdropProposal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IBCMetadataProposal. */
        interface IIBCMetadataProposal {

            /** IBCMetadataProposal title */
            title?: (string|null);

            /** IBCMetadataProposal description */
            description?: (string|null);

            /** IBCMetadataProposal metadata */
            metadata?: (cosmos.bank.v1beta1.IMetadata|null);

            /** IBCMetadataProposal ibcDenom */
            ibcDenom?: (string|null);
        }

        /** Represents a IBCMetadataProposal. */
        class IBCMetadataProposal implements IIBCMetadataProposal {

            /**
             * Constructs a new IBCMetadataProposal.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IIBCMetadataProposal);

            /** IBCMetadataProposal title. */
            public title: string;

            /** IBCMetadataProposal description. */
            public description: string;

            /** IBCMetadataProposal metadata. */
            public metadata?: (cosmos.bank.v1beta1.IMetadata|null);

            /** IBCMetadataProposal ibcDenom. */
            public ibcDenom: string;

            /**
             * Creates a new IBCMetadataProposal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IBCMetadataProposal instance
             */
            public static create(properties?: gravity.v1.IIBCMetadataProposal): gravity.v1.IBCMetadataProposal;

            /**
             * Encodes the specified IBCMetadataProposal message. Does not implicitly {@link gravity.v1.IBCMetadataProposal.verify|verify} messages.
             * @param message IBCMetadataProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IIBCMetadataProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IBCMetadataProposal message, length delimited. Does not implicitly {@link gravity.v1.IBCMetadataProposal.verify|verify} messages.
             * @param message IBCMetadataProposal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IIBCMetadataProposal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IBCMetadataProposal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IBCMetadataProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.IBCMetadataProposal;

            /**
             * Decodes a IBCMetadataProposal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IBCMetadataProposal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.IBCMetadataProposal;

            /**
             * Verifies a IBCMetadataProposal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IBCMetadataProposal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IBCMetadataProposal
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.IBCMetadataProposal;

            /**
             * Creates a plain object from a IBCMetadataProposal message. Also converts values to other types if specified.
             * @param message IBCMetadataProposal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.IBCMetadataProposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IBCMetadataProposal to JSON.
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
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: gravity.v1.IQueryParamsRequest, callback: gravity.v1.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: gravity.v1.IQueryParamsRequest): Promise<gravity.v1.QueryParamsResponse>;

            /**
             * Calls CurrentValset.
             * @param request QueryCurrentValsetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryCurrentValsetResponse
             */
            public currentValset(request: gravity.v1.IQueryCurrentValsetRequest, callback: gravity.v1.Query.CurrentValsetCallback): void;

            /**
             * Calls CurrentValset.
             * @param request QueryCurrentValsetRequest message or plain object
             * @returns Promise
             */
            public currentValset(request: gravity.v1.IQueryCurrentValsetRequest): Promise<gravity.v1.QueryCurrentValsetResponse>;

            /**
             * Calls ValsetRequest.
             * @param request QueryValsetRequestRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryValsetRequestResponse
             */
            public valsetRequest(request: gravity.v1.IQueryValsetRequestRequest, callback: gravity.v1.Query.ValsetRequestCallback): void;

            /**
             * Calls ValsetRequest.
             * @param request QueryValsetRequestRequest message or plain object
             * @returns Promise
             */
            public valsetRequest(request: gravity.v1.IQueryValsetRequestRequest): Promise<gravity.v1.QueryValsetRequestResponse>;

            /**
             * Calls ValsetConfirm.
             * @param request QueryValsetConfirmRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryValsetConfirmResponse
             */
            public valsetConfirm(request: gravity.v1.IQueryValsetConfirmRequest, callback: gravity.v1.Query.ValsetConfirmCallback): void;

            /**
             * Calls ValsetConfirm.
             * @param request QueryValsetConfirmRequest message or plain object
             * @returns Promise
             */
            public valsetConfirm(request: gravity.v1.IQueryValsetConfirmRequest): Promise<gravity.v1.QueryValsetConfirmResponse>;

            /**
             * Calls ValsetConfirmsByNonce.
             * @param request QueryValsetConfirmsByNonceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryValsetConfirmsByNonceResponse
             */
            public valsetConfirmsByNonce(request: gravity.v1.IQueryValsetConfirmsByNonceRequest, callback: gravity.v1.Query.ValsetConfirmsByNonceCallback): void;

            /**
             * Calls ValsetConfirmsByNonce.
             * @param request QueryValsetConfirmsByNonceRequest message or plain object
             * @returns Promise
             */
            public valsetConfirmsByNonce(request: gravity.v1.IQueryValsetConfirmsByNonceRequest): Promise<gravity.v1.QueryValsetConfirmsByNonceResponse>;

            /**
             * Calls LastValsetRequests.
             * @param request QueryLastValsetRequestsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLastValsetRequestsResponse
             */
            public lastValsetRequests(request: gravity.v1.IQueryLastValsetRequestsRequest, callback: gravity.v1.Query.LastValsetRequestsCallback): void;

            /**
             * Calls LastValsetRequests.
             * @param request QueryLastValsetRequestsRequest message or plain object
             * @returns Promise
             */
            public lastValsetRequests(request: gravity.v1.IQueryLastValsetRequestsRequest): Promise<gravity.v1.QueryLastValsetRequestsResponse>;

            /**
             * Calls LastPendingValsetRequestByAddr.
             * @param request QueryLastPendingValsetRequestByAddrRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLastPendingValsetRequestByAddrResponse
             */
            public lastPendingValsetRequestByAddr(request: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest, callback: gravity.v1.Query.LastPendingValsetRequestByAddrCallback): void;

            /**
             * Calls LastPendingValsetRequestByAddr.
             * @param request QueryLastPendingValsetRequestByAddrRequest message or plain object
             * @returns Promise
             */
            public lastPendingValsetRequestByAddr(request: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest): Promise<gravity.v1.QueryLastPendingValsetRequestByAddrResponse>;

            /**
             * Calls LastPendingBatchRequestByAddr.
             * @param request QueryLastPendingBatchRequestByAddrRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLastPendingBatchRequestByAddrResponse
             */
            public lastPendingBatchRequestByAddr(request: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest, callback: gravity.v1.Query.LastPendingBatchRequestByAddrCallback): void;

            /**
             * Calls LastPendingBatchRequestByAddr.
             * @param request QueryLastPendingBatchRequestByAddrRequest message or plain object
             * @returns Promise
             */
            public lastPendingBatchRequestByAddr(request: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest): Promise<gravity.v1.QueryLastPendingBatchRequestByAddrResponse>;

            /**
             * Calls LastPendingLogicCallByAddr.
             * @param request QueryLastPendingLogicCallByAddrRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLastPendingLogicCallByAddrResponse
             */
            public lastPendingLogicCallByAddr(request: gravity.v1.IQueryLastPendingLogicCallByAddrRequest, callback: gravity.v1.Query.LastPendingLogicCallByAddrCallback): void;

            /**
             * Calls LastPendingLogicCallByAddr.
             * @param request QueryLastPendingLogicCallByAddrRequest message or plain object
             * @returns Promise
             */
            public lastPendingLogicCallByAddr(request: gravity.v1.IQueryLastPendingLogicCallByAddrRequest): Promise<gravity.v1.QueryLastPendingLogicCallByAddrResponse>;

            /**
             * Calls LastEventNonceByAddr.
             * @param request QueryLastEventNonceByAddrRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLastEventNonceByAddrResponse
             */
            public lastEventNonceByAddr(request: gravity.v1.IQueryLastEventNonceByAddrRequest, callback: gravity.v1.Query.LastEventNonceByAddrCallback): void;

            /**
             * Calls LastEventNonceByAddr.
             * @param request QueryLastEventNonceByAddrRequest message or plain object
             * @returns Promise
             */
            public lastEventNonceByAddr(request: gravity.v1.IQueryLastEventNonceByAddrRequest): Promise<gravity.v1.QueryLastEventNonceByAddrResponse>;

            /**
             * Calls BatchFees.
             * @param request QueryBatchFeeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryBatchFeeResponse
             */
            public batchFees(request: gravity.v1.IQueryBatchFeeRequest, callback: gravity.v1.Query.BatchFeesCallback): void;

            /**
             * Calls BatchFees.
             * @param request QueryBatchFeeRequest message or plain object
             * @returns Promise
             */
            public batchFees(request: gravity.v1.IQueryBatchFeeRequest): Promise<gravity.v1.QueryBatchFeeResponse>;

            /**
             * Calls OutgoingTxBatches.
             * @param request QueryOutgoingTxBatchesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryOutgoingTxBatchesResponse
             */
            public outgoingTxBatches(request: gravity.v1.IQueryOutgoingTxBatchesRequest, callback: gravity.v1.Query.OutgoingTxBatchesCallback): void;

            /**
             * Calls OutgoingTxBatches.
             * @param request QueryOutgoingTxBatchesRequest message or plain object
             * @returns Promise
             */
            public outgoingTxBatches(request: gravity.v1.IQueryOutgoingTxBatchesRequest): Promise<gravity.v1.QueryOutgoingTxBatchesResponse>;

            /**
             * Calls OutgoingLogicCalls.
             * @param request QueryOutgoingLogicCallsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryOutgoingLogicCallsResponse
             */
            public outgoingLogicCalls(request: gravity.v1.IQueryOutgoingLogicCallsRequest, callback: gravity.v1.Query.OutgoingLogicCallsCallback): void;

            /**
             * Calls OutgoingLogicCalls.
             * @param request QueryOutgoingLogicCallsRequest message or plain object
             * @returns Promise
             */
            public outgoingLogicCalls(request: gravity.v1.IQueryOutgoingLogicCallsRequest): Promise<gravity.v1.QueryOutgoingLogicCallsResponse>;

            /**
             * Calls BatchRequestByNonce.
             * @param request QueryBatchRequestByNonceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryBatchRequestByNonceResponse
             */
            public batchRequestByNonce(request: gravity.v1.IQueryBatchRequestByNonceRequest, callback: gravity.v1.Query.BatchRequestByNonceCallback): void;

            /**
             * Calls BatchRequestByNonce.
             * @param request QueryBatchRequestByNonceRequest message or plain object
             * @returns Promise
             */
            public batchRequestByNonce(request: gravity.v1.IQueryBatchRequestByNonceRequest): Promise<gravity.v1.QueryBatchRequestByNonceResponse>;

            /**
             * Calls BatchConfirms.
             * @param request QueryBatchConfirmsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryBatchConfirmsResponse
             */
            public batchConfirms(request: gravity.v1.IQueryBatchConfirmsRequest, callback: gravity.v1.Query.BatchConfirmsCallback): void;

            /**
             * Calls BatchConfirms.
             * @param request QueryBatchConfirmsRequest message or plain object
             * @returns Promise
             */
            public batchConfirms(request: gravity.v1.IQueryBatchConfirmsRequest): Promise<gravity.v1.QueryBatchConfirmsResponse>;

            /**
             * Calls LogicConfirms.
             * @param request QueryLogicConfirmsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryLogicConfirmsResponse
             */
            public logicConfirms(request: gravity.v1.IQueryLogicConfirmsRequest, callback: gravity.v1.Query.LogicConfirmsCallback): void;

            /**
             * Calls LogicConfirms.
             * @param request QueryLogicConfirmsRequest message or plain object
             * @returns Promise
             */
            public logicConfirms(request: gravity.v1.IQueryLogicConfirmsRequest): Promise<gravity.v1.QueryLogicConfirmsResponse>;

            /**
             * Calls ERC20ToDenom.
             * @param request QueryERC20ToDenomRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryERC20ToDenomResponse
             */
            public eRC20ToDenom(request: gravity.v1.IQueryERC20ToDenomRequest, callback: gravity.v1.Query.ERC20ToDenomCallback): void;

            /**
             * Calls ERC20ToDenom.
             * @param request QueryERC20ToDenomRequest message or plain object
             * @returns Promise
             */
            public eRC20ToDenom(request: gravity.v1.IQueryERC20ToDenomRequest): Promise<gravity.v1.QueryERC20ToDenomResponse>;

            /**
             * Calls DenomToERC20.
             * @param request QueryDenomToERC20Request message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDenomToERC20Response
             */
            public denomToERC20(request: gravity.v1.IQueryDenomToERC20Request, callback: gravity.v1.Query.DenomToERC20Callback): void;

            /**
             * Calls DenomToERC20.
             * @param request QueryDenomToERC20Request message or plain object
             * @returns Promise
             */
            public denomToERC20(request: gravity.v1.IQueryDenomToERC20Request): Promise<gravity.v1.QueryDenomToERC20Response>;

            /**
             * Calls GetAttestations.
             * @param request QueryAttestationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryAttestationsResponse
             */
            public getAttestations(request: gravity.v1.IQueryAttestationsRequest, callback: gravity.v1.Query.GetAttestationsCallback): void;

            /**
             * Calls GetAttestations.
             * @param request QueryAttestationsRequest message or plain object
             * @returns Promise
             */
            public getAttestations(request: gravity.v1.IQueryAttestationsRequest): Promise<gravity.v1.QueryAttestationsResponse>;

            /**
             * Calls GetDelegateKeyByValidator.
             * @param request QueryDelegateKeysByValidatorAddress message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDelegateKeysByValidatorAddressResponse
             */
            public getDelegateKeyByValidator(request: gravity.v1.IQueryDelegateKeysByValidatorAddress, callback: gravity.v1.Query.GetDelegateKeyByValidatorCallback): void;

            /**
             * Calls GetDelegateKeyByValidator.
             * @param request QueryDelegateKeysByValidatorAddress message or plain object
             * @returns Promise
             */
            public getDelegateKeyByValidator(request: gravity.v1.IQueryDelegateKeysByValidatorAddress): Promise<gravity.v1.QueryDelegateKeysByValidatorAddressResponse>;

            /**
             * Calls GetDelegateKeyByEth.
             * @param request QueryDelegateKeysByEthAddress message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDelegateKeysByEthAddressResponse
             */
            public getDelegateKeyByEth(request: gravity.v1.IQueryDelegateKeysByEthAddress, callback: gravity.v1.Query.GetDelegateKeyByEthCallback): void;

            /**
             * Calls GetDelegateKeyByEth.
             * @param request QueryDelegateKeysByEthAddress message or plain object
             * @returns Promise
             */
            public getDelegateKeyByEth(request: gravity.v1.IQueryDelegateKeysByEthAddress): Promise<gravity.v1.QueryDelegateKeysByEthAddressResponse>;

            /**
             * Calls GetDelegateKeyByOrchestrator.
             * @param request QueryDelegateKeysByOrchestratorAddress message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDelegateKeysByOrchestratorAddressResponse
             */
            public getDelegateKeyByOrchestrator(request: gravity.v1.IQueryDelegateKeysByOrchestratorAddress, callback: gravity.v1.Query.GetDelegateKeyByOrchestratorCallback): void;

            /**
             * Calls GetDelegateKeyByOrchestrator.
             * @param request QueryDelegateKeysByOrchestratorAddress message or plain object
             * @returns Promise
             */
            public getDelegateKeyByOrchestrator(request: gravity.v1.IQueryDelegateKeysByOrchestratorAddress): Promise<gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse>;

            /**
             * Calls GetPendingSendToEth.
             * @param request QueryPendingSendToEth message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryPendingSendToEthResponse
             */
            public getPendingSendToEth(request: gravity.v1.IQueryPendingSendToEth, callback: gravity.v1.Query.GetPendingSendToEthCallback): void;

            /**
             * Calls GetPendingSendToEth.
             * @param request QueryPendingSendToEth message or plain object
             * @returns Promise
             */
            public getPendingSendToEth(request: gravity.v1.IQueryPendingSendToEth): Promise<gravity.v1.QueryPendingSendToEthResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link gravity.v1.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: gravity.v1.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#currentValset}.
             * @param error Error, if any
             * @param [response] QueryCurrentValsetResponse
             */
            type CurrentValsetCallback = (error: (Error|null), response?: gravity.v1.QueryCurrentValsetResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#valsetRequest}.
             * @param error Error, if any
             * @param [response] QueryValsetRequestResponse
             */
            type ValsetRequestCallback = (error: (Error|null), response?: gravity.v1.QueryValsetRequestResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#valsetConfirm}.
             * @param error Error, if any
             * @param [response] QueryValsetConfirmResponse
             */
            type ValsetConfirmCallback = (error: (Error|null), response?: gravity.v1.QueryValsetConfirmResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#valsetConfirmsByNonce}.
             * @param error Error, if any
             * @param [response] QueryValsetConfirmsByNonceResponse
             */
            type ValsetConfirmsByNonceCallback = (error: (Error|null), response?: gravity.v1.QueryValsetConfirmsByNonceResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastValsetRequests}.
             * @param error Error, if any
             * @param [response] QueryLastValsetRequestsResponse
             */
            type LastValsetRequestsCallback = (error: (Error|null), response?: gravity.v1.QueryLastValsetRequestsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastPendingValsetRequestByAddr}.
             * @param error Error, if any
             * @param [response] QueryLastPendingValsetRequestByAddrResponse
             */
            type LastPendingValsetRequestByAddrCallback = (error: (Error|null), response?: gravity.v1.QueryLastPendingValsetRequestByAddrResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastPendingBatchRequestByAddr}.
             * @param error Error, if any
             * @param [response] QueryLastPendingBatchRequestByAddrResponse
             */
            type LastPendingBatchRequestByAddrCallback = (error: (Error|null), response?: gravity.v1.QueryLastPendingBatchRequestByAddrResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastPendingLogicCallByAddr}.
             * @param error Error, if any
             * @param [response] QueryLastPendingLogicCallByAddrResponse
             */
            type LastPendingLogicCallByAddrCallback = (error: (Error|null), response?: gravity.v1.QueryLastPendingLogicCallByAddrResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#lastEventNonceByAddr}.
             * @param error Error, if any
             * @param [response] QueryLastEventNonceByAddrResponse
             */
            type LastEventNonceByAddrCallback = (error: (Error|null), response?: gravity.v1.QueryLastEventNonceByAddrResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchFees}.
             * @param error Error, if any
             * @param [response] QueryBatchFeeResponse
             */
            type BatchFeesCallback = (error: (Error|null), response?: gravity.v1.QueryBatchFeeResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#outgoingTxBatches}.
             * @param error Error, if any
             * @param [response] QueryOutgoingTxBatchesResponse
             */
            type OutgoingTxBatchesCallback = (error: (Error|null), response?: gravity.v1.QueryOutgoingTxBatchesResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#outgoingLogicCalls}.
             * @param error Error, if any
             * @param [response] QueryOutgoingLogicCallsResponse
             */
            type OutgoingLogicCallsCallback = (error: (Error|null), response?: gravity.v1.QueryOutgoingLogicCallsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchRequestByNonce}.
             * @param error Error, if any
             * @param [response] QueryBatchRequestByNonceResponse
             */
            type BatchRequestByNonceCallback = (error: (Error|null), response?: gravity.v1.QueryBatchRequestByNonceResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#batchConfirms}.
             * @param error Error, if any
             * @param [response] QueryBatchConfirmsResponse
             */
            type BatchConfirmsCallback = (error: (Error|null), response?: gravity.v1.QueryBatchConfirmsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#logicConfirms}.
             * @param error Error, if any
             * @param [response] QueryLogicConfirmsResponse
             */
            type LogicConfirmsCallback = (error: (Error|null), response?: gravity.v1.QueryLogicConfirmsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#eRC20ToDenom}.
             * @param error Error, if any
             * @param [response] QueryERC20ToDenomResponse
             */
            type ERC20ToDenomCallback = (error: (Error|null), response?: gravity.v1.QueryERC20ToDenomResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#denomToERC20}.
             * @param error Error, if any
             * @param [response] QueryDenomToERC20Response
             */
            type DenomToERC20Callback = (error: (Error|null), response?: gravity.v1.QueryDenomToERC20Response) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#getAttestations}.
             * @param error Error, if any
             * @param [response] QueryAttestationsResponse
             */
            type GetAttestationsCallback = (error: (Error|null), response?: gravity.v1.QueryAttestationsResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#getDelegateKeyByValidator}.
             * @param error Error, if any
             * @param [response] QueryDelegateKeysByValidatorAddressResponse
             */
            type GetDelegateKeyByValidatorCallback = (error: (Error|null), response?: gravity.v1.QueryDelegateKeysByValidatorAddressResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#getDelegateKeyByEth}.
             * @param error Error, if any
             * @param [response] QueryDelegateKeysByEthAddressResponse
             */
            type GetDelegateKeyByEthCallback = (error: (Error|null), response?: gravity.v1.QueryDelegateKeysByEthAddressResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#getDelegateKeyByOrchestrator}.
             * @param error Error, if any
             * @param [response] QueryDelegateKeysByOrchestratorAddressResponse
             */
            type GetDelegateKeyByOrchestratorCallback = (error: (Error|null), response?: gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Query#getPendingSendToEth}.
             * @param error Error, if any
             * @param [response] QueryPendingSendToEthResponse
             */
            type GetPendingSendToEthCallback = (error: (Error|null), response?: gravity.v1.QueryPendingSendToEthResponse) => void;
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
            constructor(properties?: gravity.v1.IQueryParamsRequest);

            /**
             * Creates a new QueryParamsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryParamsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryParamsRequest): gravity.v1.QueryParamsRequest;

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link gravity.v1.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryParamsRequest;

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
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (gravity.v1.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (gravity.v1.IParams|null);

            /**
             * Creates a new QueryParamsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryParamsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryParamsResponse): gravity.v1.QueryParamsResponse;

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link gravity.v1.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryParamsResponse;

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
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryCurrentValsetRequest. */
        interface IQueryCurrentValsetRequest {
        }

        /** Represents a QueryCurrentValsetRequest. */
        class QueryCurrentValsetRequest implements IQueryCurrentValsetRequest {

            /**
             * Constructs a new QueryCurrentValsetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryCurrentValsetRequest);

            /**
             * Creates a new QueryCurrentValsetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryCurrentValsetRequest instance
             */
            public static create(properties?: gravity.v1.IQueryCurrentValsetRequest): gravity.v1.QueryCurrentValsetRequest;

            /**
             * Encodes the specified QueryCurrentValsetRequest message. Does not implicitly {@link gravity.v1.QueryCurrentValsetRequest.verify|verify} messages.
             * @param message QueryCurrentValsetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryCurrentValsetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryCurrentValsetRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryCurrentValsetRequest.verify|verify} messages.
             * @param message QueryCurrentValsetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryCurrentValsetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryCurrentValsetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryCurrentValsetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryCurrentValsetRequest;

            /**
             * Decodes a QueryCurrentValsetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryCurrentValsetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryCurrentValsetRequest;

            /**
             * Verifies a QueryCurrentValsetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryCurrentValsetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryCurrentValsetRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryCurrentValsetRequest;

            /**
             * Creates a plain object from a QueryCurrentValsetRequest message. Also converts values to other types if specified.
             * @param message QueryCurrentValsetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryCurrentValsetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryCurrentValsetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryCurrentValsetResponse. */
        interface IQueryCurrentValsetResponse {

            /** QueryCurrentValsetResponse valset */
            valset?: (gravity.v1.IValset|null);
        }

        /** Represents a QueryCurrentValsetResponse. */
        class QueryCurrentValsetResponse implements IQueryCurrentValsetResponse {

            /**
             * Constructs a new QueryCurrentValsetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryCurrentValsetResponse);

            /** QueryCurrentValsetResponse valset. */
            public valset?: (gravity.v1.IValset|null);

            /**
             * Creates a new QueryCurrentValsetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryCurrentValsetResponse instance
             */
            public static create(properties?: gravity.v1.IQueryCurrentValsetResponse): gravity.v1.QueryCurrentValsetResponse;

            /**
             * Encodes the specified QueryCurrentValsetResponse message. Does not implicitly {@link gravity.v1.QueryCurrentValsetResponse.verify|verify} messages.
             * @param message QueryCurrentValsetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryCurrentValsetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryCurrentValsetResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryCurrentValsetResponse.verify|verify} messages.
             * @param message QueryCurrentValsetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryCurrentValsetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryCurrentValsetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryCurrentValsetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryCurrentValsetResponse;

            /**
             * Decodes a QueryCurrentValsetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryCurrentValsetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryCurrentValsetResponse;

            /**
             * Verifies a QueryCurrentValsetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryCurrentValsetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryCurrentValsetResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryCurrentValsetResponse;

            /**
             * Creates a plain object from a QueryCurrentValsetResponse message. Also converts values to other types if specified.
             * @param message QueryCurrentValsetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryCurrentValsetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryCurrentValsetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetRequestRequest. */
        interface IQueryValsetRequestRequest {

            /** QueryValsetRequestRequest nonce */
            nonce?: (number|Long|null);
        }

        /** Represents a QueryValsetRequestRequest. */
        class QueryValsetRequestRequest implements IQueryValsetRequestRequest {

            /**
             * Constructs a new QueryValsetRequestRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetRequestRequest);

            /** QueryValsetRequestRequest nonce. */
            public nonce: (number|Long);

            /**
             * Creates a new QueryValsetRequestRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetRequestRequest instance
             */
            public static create(properties?: gravity.v1.IQueryValsetRequestRequest): gravity.v1.QueryValsetRequestRequest;

            /**
             * Encodes the specified QueryValsetRequestRequest message. Does not implicitly {@link gravity.v1.QueryValsetRequestRequest.verify|verify} messages.
             * @param message QueryValsetRequestRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetRequestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetRequestRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetRequestRequest.verify|verify} messages.
             * @param message QueryValsetRequestRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetRequestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetRequestRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetRequestRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetRequestRequest;

            /**
             * Decodes a QueryValsetRequestRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetRequestRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetRequestRequest;

            /**
             * Verifies a QueryValsetRequestRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetRequestRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetRequestRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetRequestRequest;

            /**
             * Creates a plain object from a QueryValsetRequestRequest message. Also converts values to other types if specified.
             * @param message QueryValsetRequestRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetRequestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetRequestRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetRequestResponse. */
        interface IQueryValsetRequestResponse {

            /** QueryValsetRequestResponse valset */
            valset?: (gravity.v1.IValset|null);
        }

        /** Represents a QueryValsetRequestResponse. */
        class QueryValsetRequestResponse implements IQueryValsetRequestResponse {

            /**
             * Constructs a new QueryValsetRequestResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetRequestResponse);

            /** QueryValsetRequestResponse valset. */
            public valset?: (gravity.v1.IValset|null);

            /**
             * Creates a new QueryValsetRequestResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetRequestResponse instance
             */
            public static create(properties?: gravity.v1.IQueryValsetRequestResponse): gravity.v1.QueryValsetRequestResponse;

            /**
             * Encodes the specified QueryValsetRequestResponse message. Does not implicitly {@link gravity.v1.QueryValsetRequestResponse.verify|verify} messages.
             * @param message QueryValsetRequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetRequestResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetRequestResponse.verify|verify} messages.
             * @param message QueryValsetRequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetRequestResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetRequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetRequestResponse;

            /**
             * Decodes a QueryValsetRequestResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetRequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetRequestResponse;

            /**
             * Verifies a QueryValsetRequestResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetRequestResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetRequestResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetRequestResponse;

            /**
             * Creates a plain object from a QueryValsetRequestResponse message. Also converts values to other types if specified.
             * @param message QueryValsetRequestResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetRequestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetRequestResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetConfirmRequest. */
        interface IQueryValsetConfirmRequest {

            /** QueryValsetConfirmRequest nonce */
            nonce?: (number|Long|null);

            /** QueryValsetConfirmRequest address */
            address?: (string|null);
        }

        /** Represents a QueryValsetConfirmRequest. */
        class QueryValsetConfirmRequest implements IQueryValsetConfirmRequest {

            /**
             * Constructs a new QueryValsetConfirmRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetConfirmRequest);

            /** QueryValsetConfirmRequest nonce. */
            public nonce: (number|Long);

            /** QueryValsetConfirmRequest address. */
            public address: string;

            /**
             * Creates a new QueryValsetConfirmRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetConfirmRequest instance
             */
            public static create(properties?: gravity.v1.IQueryValsetConfirmRequest): gravity.v1.QueryValsetConfirmRequest;

            /**
             * Encodes the specified QueryValsetConfirmRequest message. Does not implicitly {@link gravity.v1.QueryValsetConfirmRequest.verify|verify} messages.
             * @param message QueryValsetConfirmRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetConfirmRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetConfirmRequest.verify|verify} messages.
             * @param message QueryValsetConfirmRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetConfirmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetConfirmRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetConfirmRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetConfirmRequest;

            /**
             * Decodes a QueryValsetConfirmRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetConfirmRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetConfirmRequest;

            /**
             * Verifies a QueryValsetConfirmRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetConfirmRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetConfirmRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetConfirmRequest;

            /**
             * Creates a plain object from a QueryValsetConfirmRequest message. Also converts values to other types if specified.
             * @param message QueryValsetConfirmRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetConfirmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetConfirmRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetConfirmResponse. */
        interface IQueryValsetConfirmResponse {

            /** QueryValsetConfirmResponse confirm */
            confirm?: (gravity.v1.IMsgValsetConfirm|null);
        }

        /** Represents a QueryValsetConfirmResponse. */
        class QueryValsetConfirmResponse implements IQueryValsetConfirmResponse {

            /**
             * Constructs a new QueryValsetConfirmResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetConfirmResponse);

            /** QueryValsetConfirmResponse confirm. */
            public confirm?: (gravity.v1.IMsgValsetConfirm|null);

            /**
             * Creates a new QueryValsetConfirmResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetConfirmResponse instance
             */
            public static create(properties?: gravity.v1.IQueryValsetConfirmResponse): gravity.v1.QueryValsetConfirmResponse;

            /**
             * Encodes the specified QueryValsetConfirmResponse message. Does not implicitly {@link gravity.v1.QueryValsetConfirmResponse.verify|verify} messages.
             * @param message QueryValsetConfirmResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetConfirmResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetConfirmResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetConfirmResponse.verify|verify} messages.
             * @param message QueryValsetConfirmResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetConfirmResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetConfirmResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetConfirmResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetConfirmResponse;

            /**
             * Decodes a QueryValsetConfirmResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetConfirmResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetConfirmResponse;

            /**
             * Verifies a QueryValsetConfirmResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetConfirmResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetConfirmResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetConfirmResponse;

            /**
             * Creates a plain object from a QueryValsetConfirmResponse message. Also converts values to other types if specified.
             * @param message QueryValsetConfirmResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetConfirmResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetConfirmResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetConfirmsByNonceRequest. */
        interface IQueryValsetConfirmsByNonceRequest {

            /** QueryValsetConfirmsByNonceRequest nonce */
            nonce?: (number|Long|null);
        }

        /** Represents a QueryValsetConfirmsByNonceRequest. */
        class QueryValsetConfirmsByNonceRequest implements IQueryValsetConfirmsByNonceRequest {

            /**
             * Constructs a new QueryValsetConfirmsByNonceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetConfirmsByNonceRequest);

            /** QueryValsetConfirmsByNonceRequest nonce. */
            public nonce: (number|Long);

            /**
             * Creates a new QueryValsetConfirmsByNonceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetConfirmsByNonceRequest instance
             */
            public static create(properties?: gravity.v1.IQueryValsetConfirmsByNonceRequest): gravity.v1.QueryValsetConfirmsByNonceRequest;

            /**
             * Encodes the specified QueryValsetConfirmsByNonceRequest message. Does not implicitly {@link gravity.v1.QueryValsetConfirmsByNonceRequest.verify|verify} messages.
             * @param message QueryValsetConfirmsByNonceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetConfirmsByNonceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetConfirmsByNonceRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetConfirmsByNonceRequest.verify|verify} messages.
             * @param message QueryValsetConfirmsByNonceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetConfirmsByNonceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetConfirmsByNonceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetConfirmsByNonceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetConfirmsByNonceRequest;

            /**
             * Decodes a QueryValsetConfirmsByNonceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetConfirmsByNonceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetConfirmsByNonceRequest;

            /**
             * Verifies a QueryValsetConfirmsByNonceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetConfirmsByNonceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetConfirmsByNonceRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetConfirmsByNonceRequest;

            /**
             * Creates a plain object from a QueryValsetConfirmsByNonceRequest message. Also converts values to other types if specified.
             * @param message QueryValsetConfirmsByNonceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetConfirmsByNonceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetConfirmsByNonceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValsetConfirmsByNonceResponse. */
        interface IQueryValsetConfirmsByNonceResponse {

            /** QueryValsetConfirmsByNonceResponse confirms */
            confirms?: (gravity.v1.IMsgValsetConfirm[]|null);
        }

        /** Represents a QueryValsetConfirmsByNonceResponse. */
        class QueryValsetConfirmsByNonceResponse implements IQueryValsetConfirmsByNonceResponse {

            /**
             * Constructs a new QueryValsetConfirmsByNonceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryValsetConfirmsByNonceResponse);

            /** QueryValsetConfirmsByNonceResponse confirms. */
            public confirms: gravity.v1.IMsgValsetConfirm[];

            /**
             * Creates a new QueryValsetConfirmsByNonceResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryValsetConfirmsByNonceResponse instance
             */
            public static create(properties?: gravity.v1.IQueryValsetConfirmsByNonceResponse): gravity.v1.QueryValsetConfirmsByNonceResponse;

            /**
             * Encodes the specified QueryValsetConfirmsByNonceResponse message. Does not implicitly {@link gravity.v1.QueryValsetConfirmsByNonceResponse.verify|verify} messages.
             * @param message QueryValsetConfirmsByNonceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryValsetConfirmsByNonceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValsetConfirmsByNonceResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryValsetConfirmsByNonceResponse.verify|verify} messages.
             * @param message QueryValsetConfirmsByNonceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryValsetConfirmsByNonceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValsetConfirmsByNonceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValsetConfirmsByNonceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryValsetConfirmsByNonceResponse;

            /**
             * Decodes a QueryValsetConfirmsByNonceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValsetConfirmsByNonceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryValsetConfirmsByNonceResponse;

            /**
             * Verifies a QueryValsetConfirmsByNonceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValsetConfirmsByNonceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValsetConfirmsByNonceResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryValsetConfirmsByNonceResponse;

            /**
             * Creates a plain object from a QueryValsetConfirmsByNonceResponse message. Also converts values to other types if specified.
             * @param message QueryValsetConfirmsByNonceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryValsetConfirmsByNonceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValsetConfirmsByNonceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastValsetRequestsRequest. */
        interface IQueryLastValsetRequestsRequest {
        }

        /** Represents a QueryLastValsetRequestsRequest. */
        class QueryLastValsetRequestsRequest implements IQueryLastValsetRequestsRequest {

            /**
             * Constructs a new QueryLastValsetRequestsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastValsetRequestsRequest);

            /**
             * Creates a new QueryLastValsetRequestsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastValsetRequestsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLastValsetRequestsRequest): gravity.v1.QueryLastValsetRequestsRequest;

            /**
             * Encodes the specified QueryLastValsetRequestsRequest message. Does not implicitly {@link gravity.v1.QueryLastValsetRequestsRequest.verify|verify} messages.
             * @param message QueryLastValsetRequestsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastValsetRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastValsetRequestsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLastValsetRequestsRequest.verify|verify} messages.
             * @param message QueryLastValsetRequestsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastValsetRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastValsetRequestsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastValsetRequestsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastValsetRequestsRequest;

            /**
             * Decodes a QueryLastValsetRequestsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastValsetRequestsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastValsetRequestsRequest;

            /**
             * Verifies a QueryLastValsetRequestsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastValsetRequestsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastValsetRequestsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastValsetRequestsRequest;

            /**
             * Creates a plain object from a QueryLastValsetRequestsRequest message. Also converts values to other types if specified.
             * @param message QueryLastValsetRequestsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastValsetRequestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastValsetRequestsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastValsetRequestsResponse. */
        interface IQueryLastValsetRequestsResponse {

            /** QueryLastValsetRequestsResponse valsets */
            valsets?: (gravity.v1.IValset[]|null);
        }

        /** Represents a QueryLastValsetRequestsResponse. */
        class QueryLastValsetRequestsResponse implements IQueryLastValsetRequestsResponse {

            /**
             * Constructs a new QueryLastValsetRequestsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastValsetRequestsResponse);

            /** QueryLastValsetRequestsResponse valsets. */
            public valsets: gravity.v1.IValset[];

            /**
             * Creates a new QueryLastValsetRequestsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastValsetRequestsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLastValsetRequestsResponse): gravity.v1.QueryLastValsetRequestsResponse;

            /**
             * Encodes the specified QueryLastValsetRequestsResponse message. Does not implicitly {@link gravity.v1.QueryLastValsetRequestsResponse.verify|verify} messages.
             * @param message QueryLastValsetRequestsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastValsetRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastValsetRequestsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLastValsetRequestsResponse.verify|verify} messages.
             * @param message QueryLastValsetRequestsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastValsetRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastValsetRequestsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastValsetRequestsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastValsetRequestsResponse;

            /**
             * Decodes a QueryLastValsetRequestsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastValsetRequestsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastValsetRequestsResponse;

            /**
             * Verifies a QueryLastValsetRequestsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastValsetRequestsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastValsetRequestsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastValsetRequestsResponse;

            /**
             * Creates a plain object from a QueryLastValsetRequestsResponse message. Also converts values to other types if specified.
             * @param message QueryLastValsetRequestsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastValsetRequestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastValsetRequestsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingValsetRequestByAddrRequest. */
        interface IQueryLastPendingValsetRequestByAddrRequest {

            /** QueryLastPendingValsetRequestByAddrRequest address */
            address?: (string|null);
        }

        /** Represents a QueryLastPendingValsetRequestByAddrRequest. */
        class QueryLastPendingValsetRequestByAddrRequest implements IQueryLastPendingValsetRequestByAddrRequest {

            /**
             * Constructs a new QueryLastPendingValsetRequestByAddrRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest);

            /** QueryLastPendingValsetRequestByAddrRequest address. */
            public address: string;

            /**
             * Creates a new QueryLastPendingValsetRequestByAddrRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingValsetRequestByAddrRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest): gravity.v1.QueryLastPendingValsetRequestByAddrRequest;

            /**
             * Encodes the specified QueryLastPendingValsetRequestByAddrRequest message. Does not implicitly {@link gravity.v1.QueryLastPendingValsetRequestByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingValsetRequestByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingValsetRequestByAddrRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingValsetRequestByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingValsetRequestByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingValsetRequestByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingValsetRequestByAddrRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingValsetRequestByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingValsetRequestByAddrRequest;

            /**
             * Decodes a QueryLastPendingValsetRequestByAddrRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingValsetRequestByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingValsetRequestByAddrRequest;

            /**
             * Verifies a QueryLastPendingValsetRequestByAddrRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingValsetRequestByAddrRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingValsetRequestByAddrRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingValsetRequestByAddrRequest;

            /**
             * Creates a plain object from a QueryLastPendingValsetRequestByAddrRequest message. Also converts values to other types if specified.
             * @param message QueryLastPendingValsetRequestByAddrRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingValsetRequestByAddrRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingValsetRequestByAddrRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingValsetRequestByAddrResponse. */
        interface IQueryLastPendingValsetRequestByAddrResponse {

            /** QueryLastPendingValsetRequestByAddrResponse valsets */
            valsets?: (gravity.v1.IValset[]|null);
        }

        /** Represents a QueryLastPendingValsetRequestByAddrResponse. */
        class QueryLastPendingValsetRequestByAddrResponse implements IQueryLastPendingValsetRequestByAddrResponse {

            /**
             * Constructs a new QueryLastPendingValsetRequestByAddrResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingValsetRequestByAddrResponse);

            /** QueryLastPendingValsetRequestByAddrResponse valsets. */
            public valsets: gravity.v1.IValset[];

            /**
             * Creates a new QueryLastPendingValsetRequestByAddrResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingValsetRequestByAddrResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingValsetRequestByAddrResponse): gravity.v1.QueryLastPendingValsetRequestByAddrResponse;

            /**
             * Encodes the specified QueryLastPendingValsetRequestByAddrResponse message. Does not implicitly {@link gravity.v1.QueryLastPendingValsetRequestByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingValsetRequestByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingValsetRequestByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingValsetRequestByAddrResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingValsetRequestByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingValsetRequestByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingValsetRequestByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingValsetRequestByAddrResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingValsetRequestByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingValsetRequestByAddrResponse;

            /**
             * Decodes a QueryLastPendingValsetRequestByAddrResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingValsetRequestByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingValsetRequestByAddrResponse;

            /**
             * Verifies a QueryLastPendingValsetRequestByAddrResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingValsetRequestByAddrResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingValsetRequestByAddrResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingValsetRequestByAddrResponse;

            /**
             * Creates a plain object from a QueryLastPendingValsetRequestByAddrResponse message. Also converts values to other types if specified.
             * @param message QueryLastPendingValsetRequestByAddrResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingValsetRequestByAddrResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingValsetRequestByAddrResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchFeeRequest. */
        interface IQueryBatchFeeRequest {
        }

        /** Represents a QueryBatchFeeRequest. */
        class QueryBatchFeeRequest implements IQueryBatchFeeRequest {

            /**
             * Constructs a new QueryBatchFeeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchFeeRequest);

            /**
             * Creates a new QueryBatchFeeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchFeeRequest instance
             */
            public static create(properties?: gravity.v1.IQueryBatchFeeRequest): gravity.v1.QueryBatchFeeRequest;

            /**
             * Encodes the specified QueryBatchFeeRequest message. Does not implicitly {@link gravity.v1.QueryBatchFeeRequest.verify|verify} messages.
             * @param message QueryBatchFeeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchFeeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchFeeRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchFeeRequest.verify|verify} messages.
             * @param message QueryBatchFeeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchFeeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchFeeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchFeeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchFeeRequest;

            /**
             * Decodes a QueryBatchFeeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchFeeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchFeeRequest;

            /**
             * Verifies a QueryBatchFeeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchFeeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchFeeRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchFeeRequest;

            /**
             * Creates a plain object from a QueryBatchFeeRequest message. Also converts values to other types if specified.
             * @param message QueryBatchFeeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchFeeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchFeeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchFeeResponse. */
        interface IQueryBatchFeeResponse {

            /** QueryBatchFeeResponse batchFees */
            batchFees?: (gravity.v1.IBatchFees[]|null);
        }

        /** Represents a QueryBatchFeeResponse. */
        class QueryBatchFeeResponse implements IQueryBatchFeeResponse {

            /**
             * Constructs a new QueryBatchFeeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchFeeResponse);

            /** QueryBatchFeeResponse batchFees. */
            public batchFees: gravity.v1.IBatchFees[];

            /**
             * Creates a new QueryBatchFeeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchFeeResponse instance
             */
            public static create(properties?: gravity.v1.IQueryBatchFeeResponse): gravity.v1.QueryBatchFeeResponse;

            /**
             * Encodes the specified QueryBatchFeeResponse message. Does not implicitly {@link gravity.v1.QueryBatchFeeResponse.verify|verify} messages.
             * @param message QueryBatchFeeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchFeeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchFeeResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchFeeResponse.verify|verify} messages.
             * @param message QueryBatchFeeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchFeeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchFeeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchFeeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchFeeResponse;

            /**
             * Decodes a QueryBatchFeeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchFeeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchFeeResponse;

            /**
             * Verifies a QueryBatchFeeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchFeeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchFeeResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchFeeResponse;

            /**
             * Creates a plain object from a QueryBatchFeeResponse message. Also converts values to other types if specified.
             * @param message QueryBatchFeeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchFeeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchFeeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingBatchRequestByAddrRequest. */
        interface IQueryLastPendingBatchRequestByAddrRequest {

            /** QueryLastPendingBatchRequestByAddrRequest address */
            address?: (string|null);
        }

        /** Represents a QueryLastPendingBatchRequestByAddrRequest. */
        class QueryLastPendingBatchRequestByAddrRequest implements IQueryLastPendingBatchRequestByAddrRequest {

            /**
             * Constructs a new QueryLastPendingBatchRequestByAddrRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest);

            /** QueryLastPendingBatchRequestByAddrRequest address. */
            public address: string;

            /**
             * Creates a new QueryLastPendingBatchRequestByAddrRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingBatchRequestByAddrRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest): gravity.v1.QueryLastPendingBatchRequestByAddrRequest;

            /**
             * Encodes the specified QueryLastPendingBatchRequestByAddrRequest message. Does not implicitly {@link gravity.v1.QueryLastPendingBatchRequestByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingBatchRequestByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingBatchRequestByAddrRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingBatchRequestByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingBatchRequestByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingBatchRequestByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingBatchRequestByAddrRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingBatchRequestByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingBatchRequestByAddrRequest;

            /**
             * Decodes a QueryLastPendingBatchRequestByAddrRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingBatchRequestByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingBatchRequestByAddrRequest;

            /**
             * Verifies a QueryLastPendingBatchRequestByAddrRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingBatchRequestByAddrRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingBatchRequestByAddrRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingBatchRequestByAddrRequest;

            /**
             * Creates a plain object from a QueryLastPendingBatchRequestByAddrRequest message. Also converts values to other types if specified.
             * @param message QueryLastPendingBatchRequestByAddrRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingBatchRequestByAddrRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingBatchRequestByAddrRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingBatchRequestByAddrResponse. */
        interface IQueryLastPendingBatchRequestByAddrResponse {

            /** QueryLastPendingBatchRequestByAddrResponse batch */
            batch?: (gravity.v1.IOutgoingTxBatch[]|null);
        }

        /** Represents a QueryLastPendingBatchRequestByAddrResponse. */
        class QueryLastPendingBatchRequestByAddrResponse implements IQueryLastPendingBatchRequestByAddrResponse {

            /**
             * Constructs a new QueryLastPendingBatchRequestByAddrResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingBatchRequestByAddrResponse);

            /** QueryLastPendingBatchRequestByAddrResponse batch. */
            public batch: gravity.v1.IOutgoingTxBatch[];

            /**
             * Creates a new QueryLastPendingBatchRequestByAddrResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingBatchRequestByAddrResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingBatchRequestByAddrResponse): gravity.v1.QueryLastPendingBatchRequestByAddrResponse;

            /**
             * Encodes the specified QueryLastPendingBatchRequestByAddrResponse message. Does not implicitly {@link gravity.v1.QueryLastPendingBatchRequestByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingBatchRequestByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingBatchRequestByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingBatchRequestByAddrResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingBatchRequestByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingBatchRequestByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingBatchRequestByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingBatchRequestByAddrResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingBatchRequestByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingBatchRequestByAddrResponse;

            /**
             * Decodes a QueryLastPendingBatchRequestByAddrResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingBatchRequestByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingBatchRequestByAddrResponse;

            /**
             * Verifies a QueryLastPendingBatchRequestByAddrResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingBatchRequestByAddrResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingBatchRequestByAddrResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingBatchRequestByAddrResponse;

            /**
             * Creates a plain object from a QueryLastPendingBatchRequestByAddrResponse message. Also converts values to other types if specified.
             * @param message QueryLastPendingBatchRequestByAddrResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingBatchRequestByAddrResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingBatchRequestByAddrResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingLogicCallByAddrRequest. */
        interface IQueryLastPendingLogicCallByAddrRequest {

            /** QueryLastPendingLogicCallByAddrRequest address */
            address?: (string|null);
        }

        /** Represents a QueryLastPendingLogicCallByAddrRequest. */
        class QueryLastPendingLogicCallByAddrRequest implements IQueryLastPendingLogicCallByAddrRequest {

            /**
             * Constructs a new QueryLastPendingLogicCallByAddrRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingLogicCallByAddrRequest);

            /** QueryLastPendingLogicCallByAddrRequest address. */
            public address: string;

            /**
             * Creates a new QueryLastPendingLogicCallByAddrRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingLogicCallByAddrRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingLogicCallByAddrRequest): gravity.v1.QueryLastPendingLogicCallByAddrRequest;

            /**
             * Encodes the specified QueryLastPendingLogicCallByAddrRequest message. Does not implicitly {@link gravity.v1.QueryLastPendingLogicCallByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingLogicCallByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingLogicCallByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingLogicCallByAddrRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingLogicCallByAddrRequest.verify|verify} messages.
             * @param message QueryLastPendingLogicCallByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingLogicCallByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingLogicCallByAddrRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingLogicCallByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingLogicCallByAddrRequest;

            /**
             * Decodes a QueryLastPendingLogicCallByAddrRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingLogicCallByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingLogicCallByAddrRequest;

            /**
             * Verifies a QueryLastPendingLogicCallByAddrRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingLogicCallByAddrRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingLogicCallByAddrRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingLogicCallByAddrRequest;

            /**
             * Creates a plain object from a QueryLastPendingLogicCallByAddrRequest message. Also converts values to other types if specified.
             * @param message QueryLastPendingLogicCallByAddrRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingLogicCallByAddrRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingLogicCallByAddrRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastPendingLogicCallByAddrResponse. */
        interface IQueryLastPendingLogicCallByAddrResponse {

            /** QueryLastPendingLogicCallByAddrResponse call */
            call?: (gravity.v1.IOutgoingLogicCall[]|null);
        }

        /** Represents a QueryLastPendingLogicCallByAddrResponse. */
        class QueryLastPendingLogicCallByAddrResponse implements IQueryLastPendingLogicCallByAddrResponse {

            /**
             * Constructs a new QueryLastPendingLogicCallByAddrResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastPendingLogicCallByAddrResponse);

            /** QueryLastPendingLogicCallByAddrResponse call. */
            public call: gravity.v1.IOutgoingLogicCall[];

            /**
             * Creates a new QueryLastPendingLogicCallByAddrResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastPendingLogicCallByAddrResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLastPendingLogicCallByAddrResponse): gravity.v1.QueryLastPendingLogicCallByAddrResponse;

            /**
             * Encodes the specified QueryLastPendingLogicCallByAddrResponse message. Does not implicitly {@link gravity.v1.QueryLastPendingLogicCallByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingLogicCallByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastPendingLogicCallByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastPendingLogicCallByAddrResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLastPendingLogicCallByAddrResponse.verify|verify} messages.
             * @param message QueryLastPendingLogicCallByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastPendingLogicCallByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastPendingLogicCallByAddrResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastPendingLogicCallByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastPendingLogicCallByAddrResponse;

            /**
             * Decodes a QueryLastPendingLogicCallByAddrResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastPendingLogicCallByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastPendingLogicCallByAddrResponse;

            /**
             * Verifies a QueryLastPendingLogicCallByAddrResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastPendingLogicCallByAddrResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastPendingLogicCallByAddrResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastPendingLogicCallByAddrResponse;

            /**
             * Creates a plain object from a QueryLastPendingLogicCallByAddrResponse message. Also converts values to other types if specified.
             * @param message QueryLastPendingLogicCallByAddrResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastPendingLogicCallByAddrResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastPendingLogicCallByAddrResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOutgoingTxBatchesRequest. */
        interface IQueryOutgoingTxBatchesRequest {
        }

        /** Represents a QueryOutgoingTxBatchesRequest. */
        class QueryOutgoingTxBatchesRequest implements IQueryOutgoingTxBatchesRequest {

            /**
             * Constructs a new QueryOutgoingTxBatchesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryOutgoingTxBatchesRequest);

            /**
             * Creates a new QueryOutgoingTxBatchesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryOutgoingTxBatchesRequest instance
             */
            public static create(properties?: gravity.v1.IQueryOutgoingTxBatchesRequest): gravity.v1.QueryOutgoingTxBatchesRequest;

            /**
             * Encodes the specified QueryOutgoingTxBatchesRequest message. Does not implicitly {@link gravity.v1.QueryOutgoingTxBatchesRequest.verify|verify} messages.
             * @param message QueryOutgoingTxBatchesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryOutgoingTxBatchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOutgoingTxBatchesRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryOutgoingTxBatchesRequest.verify|verify} messages.
             * @param message QueryOutgoingTxBatchesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryOutgoingTxBatchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOutgoingTxBatchesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOutgoingTxBatchesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryOutgoingTxBatchesRequest;

            /**
             * Decodes a QueryOutgoingTxBatchesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOutgoingTxBatchesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryOutgoingTxBatchesRequest;

            /**
             * Verifies a QueryOutgoingTxBatchesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOutgoingTxBatchesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOutgoingTxBatchesRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryOutgoingTxBatchesRequest;

            /**
             * Creates a plain object from a QueryOutgoingTxBatchesRequest message. Also converts values to other types if specified.
             * @param message QueryOutgoingTxBatchesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryOutgoingTxBatchesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOutgoingTxBatchesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOutgoingTxBatchesResponse. */
        interface IQueryOutgoingTxBatchesResponse {

            /** QueryOutgoingTxBatchesResponse batches */
            batches?: (gravity.v1.IOutgoingTxBatch[]|null);
        }

        /** Represents a QueryOutgoingTxBatchesResponse. */
        class QueryOutgoingTxBatchesResponse implements IQueryOutgoingTxBatchesResponse {

            /**
             * Constructs a new QueryOutgoingTxBatchesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryOutgoingTxBatchesResponse);

            /** QueryOutgoingTxBatchesResponse batches. */
            public batches: gravity.v1.IOutgoingTxBatch[];

            /**
             * Creates a new QueryOutgoingTxBatchesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryOutgoingTxBatchesResponse instance
             */
            public static create(properties?: gravity.v1.IQueryOutgoingTxBatchesResponse): gravity.v1.QueryOutgoingTxBatchesResponse;

            /**
             * Encodes the specified QueryOutgoingTxBatchesResponse message. Does not implicitly {@link gravity.v1.QueryOutgoingTxBatchesResponse.verify|verify} messages.
             * @param message QueryOutgoingTxBatchesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryOutgoingTxBatchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOutgoingTxBatchesResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryOutgoingTxBatchesResponse.verify|verify} messages.
             * @param message QueryOutgoingTxBatchesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryOutgoingTxBatchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOutgoingTxBatchesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOutgoingTxBatchesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryOutgoingTxBatchesResponse;

            /**
             * Decodes a QueryOutgoingTxBatchesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOutgoingTxBatchesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryOutgoingTxBatchesResponse;

            /**
             * Verifies a QueryOutgoingTxBatchesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOutgoingTxBatchesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOutgoingTxBatchesResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryOutgoingTxBatchesResponse;

            /**
             * Creates a plain object from a QueryOutgoingTxBatchesResponse message. Also converts values to other types if specified.
             * @param message QueryOutgoingTxBatchesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryOutgoingTxBatchesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOutgoingTxBatchesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOutgoingLogicCallsRequest. */
        interface IQueryOutgoingLogicCallsRequest {
        }

        /** Represents a QueryOutgoingLogicCallsRequest. */
        class QueryOutgoingLogicCallsRequest implements IQueryOutgoingLogicCallsRequest {

            /**
             * Constructs a new QueryOutgoingLogicCallsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryOutgoingLogicCallsRequest);

            /**
             * Creates a new QueryOutgoingLogicCallsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryOutgoingLogicCallsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryOutgoingLogicCallsRequest): gravity.v1.QueryOutgoingLogicCallsRequest;

            /**
             * Encodes the specified QueryOutgoingLogicCallsRequest message. Does not implicitly {@link gravity.v1.QueryOutgoingLogicCallsRequest.verify|verify} messages.
             * @param message QueryOutgoingLogicCallsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryOutgoingLogicCallsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOutgoingLogicCallsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryOutgoingLogicCallsRequest.verify|verify} messages.
             * @param message QueryOutgoingLogicCallsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryOutgoingLogicCallsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOutgoingLogicCallsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOutgoingLogicCallsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryOutgoingLogicCallsRequest;

            /**
             * Decodes a QueryOutgoingLogicCallsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOutgoingLogicCallsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryOutgoingLogicCallsRequest;

            /**
             * Verifies a QueryOutgoingLogicCallsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOutgoingLogicCallsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOutgoingLogicCallsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryOutgoingLogicCallsRequest;

            /**
             * Creates a plain object from a QueryOutgoingLogicCallsRequest message. Also converts values to other types if specified.
             * @param message QueryOutgoingLogicCallsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryOutgoingLogicCallsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOutgoingLogicCallsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOutgoingLogicCallsResponse. */
        interface IQueryOutgoingLogicCallsResponse {

            /** QueryOutgoingLogicCallsResponse calls */
            calls?: (gravity.v1.IOutgoingLogicCall[]|null);
        }

        /** Represents a QueryOutgoingLogicCallsResponse. */
        class QueryOutgoingLogicCallsResponse implements IQueryOutgoingLogicCallsResponse {

            /**
             * Constructs a new QueryOutgoingLogicCallsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryOutgoingLogicCallsResponse);

            /** QueryOutgoingLogicCallsResponse calls. */
            public calls: gravity.v1.IOutgoingLogicCall[];

            /**
             * Creates a new QueryOutgoingLogicCallsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryOutgoingLogicCallsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryOutgoingLogicCallsResponse): gravity.v1.QueryOutgoingLogicCallsResponse;

            /**
             * Encodes the specified QueryOutgoingLogicCallsResponse message. Does not implicitly {@link gravity.v1.QueryOutgoingLogicCallsResponse.verify|verify} messages.
             * @param message QueryOutgoingLogicCallsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryOutgoingLogicCallsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOutgoingLogicCallsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryOutgoingLogicCallsResponse.verify|verify} messages.
             * @param message QueryOutgoingLogicCallsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryOutgoingLogicCallsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOutgoingLogicCallsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOutgoingLogicCallsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryOutgoingLogicCallsResponse;

            /**
             * Decodes a QueryOutgoingLogicCallsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOutgoingLogicCallsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryOutgoingLogicCallsResponse;

            /**
             * Verifies a QueryOutgoingLogicCallsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOutgoingLogicCallsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOutgoingLogicCallsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryOutgoingLogicCallsResponse;

            /**
             * Creates a plain object from a QueryOutgoingLogicCallsResponse message. Also converts values to other types if specified.
             * @param message QueryOutgoingLogicCallsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryOutgoingLogicCallsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOutgoingLogicCallsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchRequestByNonceRequest. */
        interface IQueryBatchRequestByNonceRequest {

            /** QueryBatchRequestByNonceRequest nonce */
            nonce?: (number|Long|null);

            /** QueryBatchRequestByNonceRequest contractAddress */
            contractAddress?: (string|null);
        }

        /** Represents a QueryBatchRequestByNonceRequest. */
        class QueryBatchRequestByNonceRequest implements IQueryBatchRequestByNonceRequest {

            /**
             * Constructs a new QueryBatchRequestByNonceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchRequestByNonceRequest);

            /** QueryBatchRequestByNonceRequest nonce. */
            public nonce: (number|Long);

            /** QueryBatchRequestByNonceRequest contractAddress. */
            public contractAddress: string;

            /**
             * Creates a new QueryBatchRequestByNonceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchRequestByNonceRequest instance
             */
            public static create(properties?: gravity.v1.IQueryBatchRequestByNonceRequest): gravity.v1.QueryBatchRequestByNonceRequest;

            /**
             * Encodes the specified QueryBatchRequestByNonceRequest message. Does not implicitly {@link gravity.v1.QueryBatchRequestByNonceRequest.verify|verify} messages.
             * @param message QueryBatchRequestByNonceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchRequestByNonceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchRequestByNonceRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchRequestByNonceRequest.verify|verify} messages.
             * @param message QueryBatchRequestByNonceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchRequestByNonceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchRequestByNonceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchRequestByNonceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchRequestByNonceRequest;

            /**
             * Decodes a QueryBatchRequestByNonceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchRequestByNonceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchRequestByNonceRequest;

            /**
             * Verifies a QueryBatchRequestByNonceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchRequestByNonceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchRequestByNonceRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchRequestByNonceRequest;

            /**
             * Creates a plain object from a QueryBatchRequestByNonceRequest message. Also converts values to other types if specified.
             * @param message QueryBatchRequestByNonceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchRequestByNonceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchRequestByNonceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchRequestByNonceResponse. */
        interface IQueryBatchRequestByNonceResponse {

            /** QueryBatchRequestByNonceResponse batch */
            batch?: (gravity.v1.IOutgoingTxBatch|null);
        }

        /** Represents a QueryBatchRequestByNonceResponse. */
        class QueryBatchRequestByNonceResponse implements IQueryBatchRequestByNonceResponse {

            /**
             * Constructs a new QueryBatchRequestByNonceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchRequestByNonceResponse);

            /** QueryBatchRequestByNonceResponse batch. */
            public batch?: (gravity.v1.IOutgoingTxBatch|null);

            /**
             * Creates a new QueryBatchRequestByNonceResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchRequestByNonceResponse instance
             */
            public static create(properties?: gravity.v1.IQueryBatchRequestByNonceResponse): gravity.v1.QueryBatchRequestByNonceResponse;

            /**
             * Encodes the specified QueryBatchRequestByNonceResponse message. Does not implicitly {@link gravity.v1.QueryBatchRequestByNonceResponse.verify|verify} messages.
             * @param message QueryBatchRequestByNonceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchRequestByNonceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchRequestByNonceResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchRequestByNonceResponse.verify|verify} messages.
             * @param message QueryBatchRequestByNonceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchRequestByNonceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchRequestByNonceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchRequestByNonceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchRequestByNonceResponse;

            /**
             * Decodes a QueryBatchRequestByNonceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchRequestByNonceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchRequestByNonceResponse;

            /**
             * Verifies a QueryBatchRequestByNonceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchRequestByNonceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchRequestByNonceResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchRequestByNonceResponse;

            /**
             * Creates a plain object from a QueryBatchRequestByNonceResponse message. Also converts values to other types if specified.
             * @param message QueryBatchRequestByNonceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchRequestByNonceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchRequestByNonceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchConfirmsRequest. */
        interface IQueryBatchConfirmsRequest {

            /** QueryBatchConfirmsRequest nonce */
            nonce?: (number|Long|null);

            /** QueryBatchConfirmsRequest contractAddress */
            contractAddress?: (string|null);
        }

        /** Represents a QueryBatchConfirmsRequest. */
        class QueryBatchConfirmsRequest implements IQueryBatchConfirmsRequest {

            /**
             * Constructs a new QueryBatchConfirmsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchConfirmsRequest);

            /** QueryBatchConfirmsRequest nonce. */
            public nonce: (number|Long);

            /** QueryBatchConfirmsRequest contractAddress. */
            public contractAddress: string;

            /**
             * Creates a new QueryBatchConfirmsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchConfirmsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryBatchConfirmsRequest): gravity.v1.QueryBatchConfirmsRequest;

            /**
             * Encodes the specified QueryBatchConfirmsRequest message. Does not implicitly {@link gravity.v1.QueryBatchConfirmsRequest.verify|verify} messages.
             * @param message QueryBatchConfirmsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchConfirmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchConfirmsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchConfirmsRequest.verify|verify} messages.
             * @param message QueryBatchConfirmsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchConfirmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchConfirmsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchConfirmsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchConfirmsRequest;

            /**
             * Decodes a QueryBatchConfirmsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchConfirmsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchConfirmsRequest;

            /**
             * Verifies a QueryBatchConfirmsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchConfirmsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchConfirmsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchConfirmsRequest;

            /**
             * Creates a plain object from a QueryBatchConfirmsRequest message. Also converts values to other types if specified.
             * @param message QueryBatchConfirmsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchConfirmsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchConfirmsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryBatchConfirmsResponse. */
        interface IQueryBatchConfirmsResponse {

            /** QueryBatchConfirmsResponse confirms */
            confirms?: (gravity.v1.IMsgConfirmBatch[]|null);
        }

        /** Represents a QueryBatchConfirmsResponse. */
        class QueryBatchConfirmsResponse implements IQueryBatchConfirmsResponse {

            /**
             * Constructs a new QueryBatchConfirmsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryBatchConfirmsResponse);

            /** QueryBatchConfirmsResponse confirms. */
            public confirms: gravity.v1.IMsgConfirmBatch[];

            /**
             * Creates a new QueryBatchConfirmsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryBatchConfirmsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryBatchConfirmsResponse): gravity.v1.QueryBatchConfirmsResponse;

            /**
             * Encodes the specified QueryBatchConfirmsResponse message. Does not implicitly {@link gravity.v1.QueryBatchConfirmsResponse.verify|verify} messages.
             * @param message QueryBatchConfirmsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryBatchConfirmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryBatchConfirmsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryBatchConfirmsResponse.verify|verify} messages.
             * @param message QueryBatchConfirmsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryBatchConfirmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryBatchConfirmsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryBatchConfirmsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryBatchConfirmsResponse;

            /**
             * Decodes a QueryBatchConfirmsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryBatchConfirmsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryBatchConfirmsResponse;

            /**
             * Verifies a QueryBatchConfirmsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryBatchConfirmsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryBatchConfirmsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryBatchConfirmsResponse;

            /**
             * Creates a plain object from a QueryBatchConfirmsResponse message. Also converts values to other types if specified.
             * @param message QueryBatchConfirmsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryBatchConfirmsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryBatchConfirmsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLogicConfirmsRequest. */
        interface IQueryLogicConfirmsRequest {

            /** QueryLogicConfirmsRequest invalidationId */
            invalidationId?: (Uint8Array|null);

            /** QueryLogicConfirmsRequest invalidationNonce */
            invalidationNonce?: (number|Long|null);
        }

        /** Represents a QueryLogicConfirmsRequest. */
        class QueryLogicConfirmsRequest implements IQueryLogicConfirmsRequest {

            /**
             * Constructs a new QueryLogicConfirmsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLogicConfirmsRequest);

            /** QueryLogicConfirmsRequest invalidationId. */
            public invalidationId: Uint8Array;

            /** QueryLogicConfirmsRequest invalidationNonce. */
            public invalidationNonce: (number|Long);

            /**
             * Creates a new QueryLogicConfirmsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLogicConfirmsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLogicConfirmsRequest): gravity.v1.QueryLogicConfirmsRequest;

            /**
             * Encodes the specified QueryLogicConfirmsRequest message. Does not implicitly {@link gravity.v1.QueryLogicConfirmsRequest.verify|verify} messages.
             * @param message QueryLogicConfirmsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLogicConfirmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLogicConfirmsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLogicConfirmsRequest.verify|verify} messages.
             * @param message QueryLogicConfirmsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLogicConfirmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLogicConfirmsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLogicConfirmsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLogicConfirmsRequest;

            /**
             * Decodes a QueryLogicConfirmsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLogicConfirmsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLogicConfirmsRequest;

            /**
             * Verifies a QueryLogicConfirmsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLogicConfirmsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLogicConfirmsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLogicConfirmsRequest;

            /**
             * Creates a plain object from a QueryLogicConfirmsRequest message. Also converts values to other types if specified.
             * @param message QueryLogicConfirmsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLogicConfirmsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLogicConfirmsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLogicConfirmsResponse. */
        interface IQueryLogicConfirmsResponse {

            /** QueryLogicConfirmsResponse confirms */
            confirms?: (gravity.v1.IMsgConfirmLogicCall[]|null);
        }

        /** Represents a QueryLogicConfirmsResponse. */
        class QueryLogicConfirmsResponse implements IQueryLogicConfirmsResponse {

            /**
             * Constructs a new QueryLogicConfirmsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLogicConfirmsResponse);

            /** QueryLogicConfirmsResponse confirms. */
            public confirms: gravity.v1.IMsgConfirmLogicCall[];

            /**
             * Creates a new QueryLogicConfirmsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLogicConfirmsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLogicConfirmsResponse): gravity.v1.QueryLogicConfirmsResponse;

            /**
             * Encodes the specified QueryLogicConfirmsResponse message. Does not implicitly {@link gravity.v1.QueryLogicConfirmsResponse.verify|verify} messages.
             * @param message QueryLogicConfirmsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLogicConfirmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLogicConfirmsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLogicConfirmsResponse.verify|verify} messages.
             * @param message QueryLogicConfirmsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLogicConfirmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLogicConfirmsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLogicConfirmsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLogicConfirmsResponse;

            /**
             * Decodes a QueryLogicConfirmsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLogicConfirmsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLogicConfirmsResponse;

            /**
             * Verifies a QueryLogicConfirmsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLogicConfirmsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLogicConfirmsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLogicConfirmsResponse;

            /**
             * Creates a plain object from a QueryLogicConfirmsResponse message. Also converts values to other types if specified.
             * @param message QueryLogicConfirmsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLogicConfirmsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLogicConfirmsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastEventNonceByAddrRequest. */
        interface IQueryLastEventNonceByAddrRequest {

            /** QueryLastEventNonceByAddrRequest address */
            address?: (string|null);
        }

        /** Represents a QueryLastEventNonceByAddrRequest. */
        class QueryLastEventNonceByAddrRequest implements IQueryLastEventNonceByAddrRequest {

            /**
             * Constructs a new QueryLastEventNonceByAddrRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastEventNonceByAddrRequest);

            /** QueryLastEventNonceByAddrRequest address. */
            public address: string;

            /**
             * Creates a new QueryLastEventNonceByAddrRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastEventNonceByAddrRequest instance
             */
            public static create(properties?: gravity.v1.IQueryLastEventNonceByAddrRequest): gravity.v1.QueryLastEventNonceByAddrRequest;

            /**
             * Encodes the specified QueryLastEventNonceByAddrRequest message. Does not implicitly {@link gravity.v1.QueryLastEventNonceByAddrRequest.verify|verify} messages.
             * @param message QueryLastEventNonceByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastEventNonceByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastEventNonceByAddrRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryLastEventNonceByAddrRequest.verify|verify} messages.
             * @param message QueryLastEventNonceByAddrRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastEventNonceByAddrRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastEventNonceByAddrRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastEventNonceByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastEventNonceByAddrRequest;

            /**
             * Decodes a QueryLastEventNonceByAddrRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastEventNonceByAddrRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastEventNonceByAddrRequest;

            /**
             * Verifies a QueryLastEventNonceByAddrRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastEventNonceByAddrRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastEventNonceByAddrRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastEventNonceByAddrRequest;

            /**
             * Creates a plain object from a QueryLastEventNonceByAddrRequest message. Also converts values to other types if specified.
             * @param message QueryLastEventNonceByAddrRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastEventNonceByAddrRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastEventNonceByAddrRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryLastEventNonceByAddrResponse. */
        interface IQueryLastEventNonceByAddrResponse {

            /** QueryLastEventNonceByAddrResponse eventNonce */
            eventNonce?: (number|Long|null);
        }

        /** Represents a QueryLastEventNonceByAddrResponse. */
        class QueryLastEventNonceByAddrResponse implements IQueryLastEventNonceByAddrResponse {

            /**
             * Constructs a new QueryLastEventNonceByAddrResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryLastEventNonceByAddrResponse);

            /** QueryLastEventNonceByAddrResponse eventNonce. */
            public eventNonce: (number|Long);

            /**
             * Creates a new QueryLastEventNonceByAddrResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryLastEventNonceByAddrResponse instance
             */
            public static create(properties?: gravity.v1.IQueryLastEventNonceByAddrResponse): gravity.v1.QueryLastEventNonceByAddrResponse;

            /**
             * Encodes the specified QueryLastEventNonceByAddrResponse message. Does not implicitly {@link gravity.v1.QueryLastEventNonceByAddrResponse.verify|verify} messages.
             * @param message QueryLastEventNonceByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryLastEventNonceByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryLastEventNonceByAddrResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryLastEventNonceByAddrResponse.verify|verify} messages.
             * @param message QueryLastEventNonceByAddrResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryLastEventNonceByAddrResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryLastEventNonceByAddrResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryLastEventNonceByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryLastEventNonceByAddrResponse;

            /**
             * Decodes a QueryLastEventNonceByAddrResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryLastEventNonceByAddrResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryLastEventNonceByAddrResponse;

            /**
             * Verifies a QueryLastEventNonceByAddrResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryLastEventNonceByAddrResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryLastEventNonceByAddrResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryLastEventNonceByAddrResponse;

            /**
             * Creates a plain object from a QueryLastEventNonceByAddrResponse message. Also converts values to other types if specified.
             * @param message QueryLastEventNonceByAddrResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryLastEventNonceByAddrResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryLastEventNonceByAddrResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryERC20ToDenomRequest. */
        interface IQueryERC20ToDenomRequest {

            /** QueryERC20ToDenomRequest erc20 */
            erc20?: (string|null);
        }

        /** Represents a QueryERC20ToDenomRequest. */
        class QueryERC20ToDenomRequest implements IQueryERC20ToDenomRequest {

            /**
             * Constructs a new QueryERC20ToDenomRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryERC20ToDenomRequest);

            /** QueryERC20ToDenomRequest erc20. */
            public erc20: string;

            /**
             * Creates a new QueryERC20ToDenomRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryERC20ToDenomRequest instance
             */
            public static create(properties?: gravity.v1.IQueryERC20ToDenomRequest): gravity.v1.QueryERC20ToDenomRequest;

            /**
             * Encodes the specified QueryERC20ToDenomRequest message. Does not implicitly {@link gravity.v1.QueryERC20ToDenomRequest.verify|verify} messages.
             * @param message QueryERC20ToDenomRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryERC20ToDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryERC20ToDenomRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryERC20ToDenomRequest.verify|verify} messages.
             * @param message QueryERC20ToDenomRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryERC20ToDenomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryERC20ToDenomRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryERC20ToDenomRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryERC20ToDenomRequest;

            /**
             * Decodes a QueryERC20ToDenomRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryERC20ToDenomRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryERC20ToDenomRequest;

            /**
             * Verifies a QueryERC20ToDenomRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryERC20ToDenomRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryERC20ToDenomRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryERC20ToDenomRequest;

            /**
             * Creates a plain object from a QueryERC20ToDenomRequest message. Also converts values to other types if specified.
             * @param message QueryERC20ToDenomRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryERC20ToDenomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryERC20ToDenomRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryERC20ToDenomResponse. */
        interface IQueryERC20ToDenomResponse {

            /** QueryERC20ToDenomResponse denom */
            denom?: (string|null);

            /** QueryERC20ToDenomResponse cosmosOriginated */
            cosmosOriginated?: (boolean|null);
        }

        /** Represents a QueryERC20ToDenomResponse. */
        class QueryERC20ToDenomResponse implements IQueryERC20ToDenomResponse {

            /**
             * Constructs a new QueryERC20ToDenomResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryERC20ToDenomResponse);

            /** QueryERC20ToDenomResponse denom. */
            public denom: string;

            /** QueryERC20ToDenomResponse cosmosOriginated. */
            public cosmosOriginated: boolean;

            /**
             * Creates a new QueryERC20ToDenomResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryERC20ToDenomResponse instance
             */
            public static create(properties?: gravity.v1.IQueryERC20ToDenomResponse): gravity.v1.QueryERC20ToDenomResponse;

            /**
             * Encodes the specified QueryERC20ToDenomResponse message. Does not implicitly {@link gravity.v1.QueryERC20ToDenomResponse.verify|verify} messages.
             * @param message QueryERC20ToDenomResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryERC20ToDenomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryERC20ToDenomResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryERC20ToDenomResponse.verify|verify} messages.
             * @param message QueryERC20ToDenomResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryERC20ToDenomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryERC20ToDenomResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryERC20ToDenomResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryERC20ToDenomResponse;

            /**
             * Decodes a QueryERC20ToDenomResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryERC20ToDenomResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryERC20ToDenomResponse;

            /**
             * Verifies a QueryERC20ToDenomResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryERC20ToDenomResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryERC20ToDenomResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryERC20ToDenomResponse;

            /**
             * Creates a plain object from a QueryERC20ToDenomResponse message. Also converts values to other types if specified.
             * @param message QueryERC20ToDenomResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryERC20ToDenomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryERC20ToDenomResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDenomToERC20Request. */
        interface IQueryDenomToERC20Request {

            /** QueryDenomToERC20Request denom */
            denom?: (string|null);
        }

        /** Represents a QueryDenomToERC20Request. */
        class QueryDenomToERC20Request implements IQueryDenomToERC20Request {

            /**
             * Constructs a new QueryDenomToERC20Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDenomToERC20Request);

            /** QueryDenomToERC20Request denom. */
            public denom: string;

            /**
             * Creates a new QueryDenomToERC20Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDenomToERC20Request instance
             */
            public static create(properties?: gravity.v1.IQueryDenomToERC20Request): gravity.v1.QueryDenomToERC20Request;

            /**
             * Encodes the specified QueryDenomToERC20Request message. Does not implicitly {@link gravity.v1.QueryDenomToERC20Request.verify|verify} messages.
             * @param message QueryDenomToERC20Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDenomToERC20Request, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDenomToERC20Request message, length delimited. Does not implicitly {@link gravity.v1.QueryDenomToERC20Request.verify|verify} messages.
             * @param message QueryDenomToERC20Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDenomToERC20Request, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDenomToERC20Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDenomToERC20Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDenomToERC20Request;

            /**
             * Decodes a QueryDenomToERC20Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDenomToERC20Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDenomToERC20Request;

            /**
             * Verifies a QueryDenomToERC20Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDenomToERC20Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDenomToERC20Request
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDenomToERC20Request;

            /**
             * Creates a plain object from a QueryDenomToERC20Request message. Also converts values to other types if specified.
             * @param message QueryDenomToERC20Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDenomToERC20Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDenomToERC20Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDenomToERC20Response. */
        interface IQueryDenomToERC20Response {

            /** QueryDenomToERC20Response erc20 */
            erc20?: (string|null);

            /** QueryDenomToERC20Response cosmosOriginated */
            cosmosOriginated?: (boolean|null);
        }

        /** Represents a QueryDenomToERC20Response. */
        class QueryDenomToERC20Response implements IQueryDenomToERC20Response {

            /**
             * Constructs a new QueryDenomToERC20Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDenomToERC20Response);

            /** QueryDenomToERC20Response erc20. */
            public erc20: string;

            /** QueryDenomToERC20Response cosmosOriginated. */
            public cosmosOriginated: boolean;

            /**
             * Creates a new QueryDenomToERC20Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDenomToERC20Response instance
             */
            public static create(properties?: gravity.v1.IQueryDenomToERC20Response): gravity.v1.QueryDenomToERC20Response;

            /**
             * Encodes the specified QueryDenomToERC20Response message. Does not implicitly {@link gravity.v1.QueryDenomToERC20Response.verify|verify} messages.
             * @param message QueryDenomToERC20Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDenomToERC20Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDenomToERC20Response message, length delimited. Does not implicitly {@link gravity.v1.QueryDenomToERC20Response.verify|verify} messages.
             * @param message QueryDenomToERC20Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDenomToERC20Response, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDenomToERC20Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDenomToERC20Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDenomToERC20Response;

            /**
             * Decodes a QueryDenomToERC20Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDenomToERC20Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDenomToERC20Response;

            /**
             * Verifies a QueryDenomToERC20Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDenomToERC20Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDenomToERC20Response
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDenomToERC20Response;

            /**
             * Creates a plain object from a QueryDenomToERC20Response message. Also converts values to other types if specified.
             * @param message QueryDenomToERC20Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDenomToERC20Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDenomToERC20Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAttestationsRequest. */
        interface IQueryAttestationsRequest {

            /** QueryAttestationsRequest limit */
            limit?: (number|Long|null);
        }

        /** Represents a QueryAttestationsRequest. */
        class QueryAttestationsRequest implements IQueryAttestationsRequest {

            /**
             * Constructs a new QueryAttestationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryAttestationsRequest);

            /** QueryAttestationsRequest limit. */
            public limit: (number|Long);

            /**
             * Creates a new QueryAttestationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryAttestationsRequest instance
             */
            public static create(properties?: gravity.v1.IQueryAttestationsRequest): gravity.v1.QueryAttestationsRequest;

            /**
             * Encodes the specified QueryAttestationsRequest message. Does not implicitly {@link gravity.v1.QueryAttestationsRequest.verify|verify} messages.
             * @param message QueryAttestationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryAttestationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAttestationsRequest message, length delimited. Does not implicitly {@link gravity.v1.QueryAttestationsRequest.verify|verify} messages.
             * @param message QueryAttestationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryAttestationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAttestationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAttestationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryAttestationsRequest;

            /**
             * Decodes a QueryAttestationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAttestationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryAttestationsRequest;

            /**
             * Verifies a QueryAttestationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAttestationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAttestationsRequest
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryAttestationsRequest;

            /**
             * Creates a plain object from a QueryAttestationsRequest message. Also converts values to other types if specified.
             * @param message QueryAttestationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryAttestationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAttestationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryAttestationsResponse. */
        interface IQueryAttestationsResponse {

            /** QueryAttestationsResponse attestations */
            attestations?: (gravity.v1.IAttestation[]|null);
        }

        /** Represents a QueryAttestationsResponse. */
        class QueryAttestationsResponse implements IQueryAttestationsResponse {

            /**
             * Constructs a new QueryAttestationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryAttestationsResponse);

            /** QueryAttestationsResponse attestations. */
            public attestations: gravity.v1.IAttestation[];

            /**
             * Creates a new QueryAttestationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryAttestationsResponse instance
             */
            public static create(properties?: gravity.v1.IQueryAttestationsResponse): gravity.v1.QueryAttestationsResponse;

            /**
             * Encodes the specified QueryAttestationsResponse message. Does not implicitly {@link gravity.v1.QueryAttestationsResponse.verify|verify} messages.
             * @param message QueryAttestationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryAttestationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryAttestationsResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryAttestationsResponse.verify|verify} messages.
             * @param message QueryAttestationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryAttestationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryAttestationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryAttestationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryAttestationsResponse;

            /**
             * Decodes a QueryAttestationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryAttestationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryAttestationsResponse;

            /**
             * Verifies a QueryAttestationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryAttestationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryAttestationsResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryAttestationsResponse;

            /**
             * Creates a plain object from a QueryAttestationsResponse message. Also converts values to other types if specified.
             * @param message QueryAttestationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryAttestationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryAttestationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByValidatorAddress. */
        interface IQueryDelegateKeysByValidatorAddress {

            /** QueryDelegateKeysByValidatorAddress validatorAddress */
            validatorAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByValidatorAddress. */
        class QueryDelegateKeysByValidatorAddress implements IQueryDelegateKeysByValidatorAddress {

            /**
             * Constructs a new QueryDelegateKeysByValidatorAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByValidatorAddress);

            /** QueryDelegateKeysByValidatorAddress validatorAddress. */
            public validatorAddress: string;

            /**
             * Creates a new QueryDelegateKeysByValidatorAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByValidatorAddress instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByValidatorAddress): gravity.v1.QueryDelegateKeysByValidatorAddress;

            /**
             * Encodes the specified QueryDelegateKeysByValidatorAddress message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByValidatorAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByValidatorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByValidatorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByValidatorAddress message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByValidatorAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByValidatorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByValidatorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByValidatorAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByValidatorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByValidatorAddress;

            /**
             * Decodes a QueryDelegateKeysByValidatorAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByValidatorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByValidatorAddress;

            /**
             * Verifies a QueryDelegateKeysByValidatorAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByValidatorAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByValidatorAddress
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByValidatorAddress;

            /**
             * Creates a plain object from a QueryDelegateKeysByValidatorAddress message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByValidatorAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByValidatorAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByValidatorAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByValidatorAddressResponse. */
        interface IQueryDelegateKeysByValidatorAddressResponse {

            /** QueryDelegateKeysByValidatorAddressResponse ethAddress */
            ethAddress?: (string|null);

            /** QueryDelegateKeysByValidatorAddressResponse orchestratorAddress */
            orchestratorAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByValidatorAddressResponse. */
        class QueryDelegateKeysByValidatorAddressResponse implements IQueryDelegateKeysByValidatorAddressResponse {

            /**
             * Constructs a new QueryDelegateKeysByValidatorAddressResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByValidatorAddressResponse);

            /** QueryDelegateKeysByValidatorAddressResponse ethAddress. */
            public ethAddress: string;

            /** QueryDelegateKeysByValidatorAddressResponse orchestratorAddress. */
            public orchestratorAddress: string;

            /**
             * Creates a new QueryDelegateKeysByValidatorAddressResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByValidatorAddressResponse instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByValidatorAddressResponse): gravity.v1.QueryDelegateKeysByValidatorAddressResponse;

            /**
             * Encodes the specified QueryDelegateKeysByValidatorAddressResponse message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByValidatorAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByValidatorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByValidatorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByValidatorAddressResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByValidatorAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByValidatorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByValidatorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByValidatorAddressResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByValidatorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByValidatorAddressResponse;

            /**
             * Decodes a QueryDelegateKeysByValidatorAddressResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByValidatorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByValidatorAddressResponse;

            /**
             * Verifies a QueryDelegateKeysByValidatorAddressResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByValidatorAddressResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByValidatorAddressResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByValidatorAddressResponse;

            /**
             * Creates a plain object from a QueryDelegateKeysByValidatorAddressResponse message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByValidatorAddressResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByValidatorAddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByValidatorAddressResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByEthAddress. */
        interface IQueryDelegateKeysByEthAddress {

            /** QueryDelegateKeysByEthAddress ethAddress */
            ethAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByEthAddress. */
        class QueryDelegateKeysByEthAddress implements IQueryDelegateKeysByEthAddress {

            /**
             * Constructs a new QueryDelegateKeysByEthAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByEthAddress);

            /** QueryDelegateKeysByEthAddress ethAddress. */
            public ethAddress: string;

            /**
             * Creates a new QueryDelegateKeysByEthAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByEthAddress instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByEthAddress): gravity.v1.QueryDelegateKeysByEthAddress;

            /**
             * Encodes the specified QueryDelegateKeysByEthAddress message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByEthAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByEthAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByEthAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByEthAddress message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByEthAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByEthAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByEthAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByEthAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByEthAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByEthAddress;

            /**
             * Decodes a QueryDelegateKeysByEthAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByEthAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByEthAddress;

            /**
             * Verifies a QueryDelegateKeysByEthAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByEthAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByEthAddress
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByEthAddress;

            /**
             * Creates a plain object from a QueryDelegateKeysByEthAddress message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByEthAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByEthAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByEthAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByEthAddressResponse. */
        interface IQueryDelegateKeysByEthAddressResponse {

            /** QueryDelegateKeysByEthAddressResponse validatorAddress */
            validatorAddress?: (string|null);

            /** QueryDelegateKeysByEthAddressResponse orchestratorAddress */
            orchestratorAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByEthAddressResponse. */
        class QueryDelegateKeysByEthAddressResponse implements IQueryDelegateKeysByEthAddressResponse {

            /**
             * Constructs a new QueryDelegateKeysByEthAddressResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByEthAddressResponse);

            /** QueryDelegateKeysByEthAddressResponse validatorAddress. */
            public validatorAddress: string;

            /** QueryDelegateKeysByEthAddressResponse orchestratorAddress. */
            public orchestratorAddress: string;

            /**
             * Creates a new QueryDelegateKeysByEthAddressResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByEthAddressResponse instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByEthAddressResponse): gravity.v1.QueryDelegateKeysByEthAddressResponse;

            /**
             * Encodes the specified QueryDelegateKeysByEthAddressResponse message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByEthAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByEthAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByEthAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByEthAddressResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByEthAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByEthAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByEthAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByEthAddressResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByEthAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByEthAddressResponse;

            /**
             * Decodes a QueryDelegateKeysByEthAddressResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByEthAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByEthAddressResponse;

            /**
             * Verifies a QueryDelegateKeysByEthAddressResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByEthAddressResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByEthAddressResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByEthAddressResponse;

            /**
             * Creates a plain object from a QueryDelegateKeysByEthAddressResponse message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByEthAddressResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByEthAddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByEthAddressResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByOrchestratorAddress. */
        interface IQueryDelegateKeysByOrchestratorAddress {

            /** QueryDelegateKeysByOrchestratorAddress orchestratorAddress */
            orchestratorAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByOrchestratorAddress. */
        class QueryDelegateKeysByOrchestratorAddress implements IQueryDelegateKeysByOrchestratorAddress {

            /**
             * Constructs a new QueryDelegateKeysByOrchestratorAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByOrchestratorAddress);

            /** QueryDelegateKeysByOrchestratorAddress orchestratorAddress. */
            public orchestratorAddress: string;

            /**
             * Creates a new QueryDelegateKeysByOrchestratorAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByOrchestratorAddress instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByOrchestratorAddress): gravity.v1.QueryDelegateKeysByOrchestratorAddress;

            /**
             * Encodes the specified QueryDelegateKeysByOrchestratorAddress message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByOrchestratorAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByOrchestratorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByOrchestratorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByOrchestratorAddress message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByOrchestratorAddress.verify|verify} messages.
             * @param message QueryDelegateKeysByOrchestratorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByOrchestratorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByOrchestratorAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByOrchestratorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByOrchestratorAddress;

            /**
             * Decodes a QueryDelegateKeysByOrchestratorAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByOrchestratorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByOrchestratorAddress;

            /**
             * Verifies a QueryDelegateKeysByOrchestratorAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByOrchestratorAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByOrchestratorAddress
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByOrchestratorAddress;

            /**
             * Creates a plain object from a QueryDelegateKeysByOrchestratorAddress message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByOrchestratorAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByOrchestratorAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByOrchestratorAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDelegateKeysByOrchestratorAddressResponse. */
        interface IQueryDelegateKeysByOrchestratorAddressResponse {

            /** QueryDelegateKeysByOrchestratorAddressResponse validatorAddress */
            validatorAddress?: (string|null);

            /** QueryDelegateKeysByOrchestratorAddressResponse ethAddress */
            ethAddress?: (string|null);
        }

        /** Represents a QueryDelegateKeysByOrchestratorAddressResponse. */
        class QueryDelegateKeysByOrchestratorAddressResponse implements IQueryDelegateKeysByOrchestratorAddressResponse {

            /**
             * Constructs a new QueryDelegateKeysByOrchestratorAddressResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryDelegateKeysByOrchestratorAddressResponse);

            /** QueryDelegateKeysByOrchestratorAddressResponse validatorAddress. */
            public validatorAddress: string;

            /** QueryDelegateKeysByOrchestratorAddressResponse ethAddress. */
            public ethAddress: string;

            /**
             * Creates a new QueryDelegateKeysByOrchestratorAddressResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryDelegateKeysByOrchestratorAddressResponse instance
             */
            public static create(properties?: gravity.v1.IQueryDelegateKeysByOrchestratorAddressResponse): gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse;

            /**
             * Encodes the specified QueryDelegateKeysByOrchestratorAddressResponse message. Does not implicitly {@link gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByOrchestratorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryDelegateKeysByOrchestratorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDelegateKeysByOrchestratorAddressResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse.verify|verify} messages.
             * @param message QueryDelegateKeysByOrchestratorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryDelegateKeysByOrchestratorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDelegateKeysByOrchestratorAddressResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDelegateKeysByOrchestratorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse;

            /**
             * Decodes a QueryDelegateKeysByOrchestratorAddressResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDelegateKeysByOrchestratorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse;

            /**
             * Verifies a QueryDelegateKeysByOrchestratorAddressResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDelegateKeysByOrchestratorAddressResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDelegateKeysByOrchestratorAddressResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse;

            /**
             * Creates a plain object from a QueryDelegateKeysByOrchestratorAddressResponse message. Also converts values to other types if specified.
             * @param message QueryDelegateKeysByOrchestratorAddressResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDelegateKeysByOrchestratorAddressResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryPendingSendToEth. */
        interface IQueryPendingSendToEth {

            /** QueryPendingSendToEth senderAddress */
            senderAddress?: (string|null);
        }

        /** Represents a QueryPendingSendToEth. */
        class QueryPendingSendToEth implements IQueryPendingSendToEth {

            /**
             * Constructs a new QueryPendingSendToEth.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryPendingSendToEth);

            /** QueryPendingSendToEth senderAddress. */
            public senderAddress: string;

            /**
             * Creates a new QueryPendingSendToEth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryPendingSendToEth instance
             */
            public static create(properties?: gravity.v1.IQueryPendingSendToEth): gravity.v1.QueryPendingSendToEth;

            /**
             * Encodes the specified QueryPendingSendToEth message. Does not implicitly {@link gravity.v1.QueryPendingSendToEth.verify|verify} messages.
             * @param message QueryPendingSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryPendingSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryPendingSendToEth message, length delimited. Does not implicitly {@link gravity.v1.QueryPendingSendToEth.verify|verify} messages.
             * @param message QueryPendingSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryPendingSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryPendingSendToEth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryPendingSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryPendingSendToEth;

            /**
             * Decodes a QueryPendingSendToEth message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryPendingSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryPendingSendToEth;

            /**
             * Verifies a QueryPendingSendToEth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryPendingSendToEth message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryPendingSendToEth
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryPendingSendToEth;

            /**
             * Creates a plain object from a QueryPendingSendToEth message. Also converts values to other types if specified.
             * @param message QueryPendingSendToEth
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryPendingSendToEth, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryPendingSendToEth to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryPendingSendToEthResponse. */
        interface IQueryPendingSendToEthResponse {

            /** QueryPendingSendToEthResponse transfersInBatches */
            transfersInBatches?: (gravity.v1.IOutgoingTransferTx[]|null);

            /** QueryPendingSendToEthResponse unbatchedTransfers */
            unbatchedTransfers?: (gravity.v1.IOutgoingTransferTx[]|null);
        }

        /** Represents a QueryPendingSendToEthResponse. */
        class QueryPendingSendToEthResponse implements IQueryPendingSendToEthResponse {

            /**
             * Constructs a new QueryPendingSendToEthResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IQueryPendingSendToEthResponse);

            /** QueryPendingSendToEthResponse transfersInBatches. */
            public transfersInBatches: gravity.v1.IOutgoingTransferTx[];

            /** QueryPendingSendToEthResponse unbatchedTransfers. */
            public unbatchedTransfers: gravity.v1.IOutgoingTransferTx[];

            /**
             * Creates a new QueryPendingSendToEthResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QueryPendingSendToEthResponse instance
             */
            public static create(properties?: gravity.v1.IQueryPendingSendToEthResponse): gravity.v1.QueryPendingSendToEthResponse;

            /**
             * Encodes the specified QueryPendingSendToEthResponse message. Does not implicitly {@link gravity.v1.QueryPendingSendToEthResponse.verify|verify} messages.
             * @param message QueryPendingSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IQueryPendingSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryPendingSendToEthResponse message, length delimited. Does not implicitly {@link gravity.v1.QueryPendingSendToEthResponse.verify|verify} messages.
             * @param message QueryPendingSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IQueryPendingSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryPendingSendToEthResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryPendingSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.QueryPendingSendToEthResponse;

            /**
             * Decodes a QueryPendingSendToEthResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryPendingSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.QueryPendingSendToEthResponse;

            /**
             * Verifies a QueryPendingSendToEthResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryPendingSendToEthResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryPendingSendToEthResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.QueryPendingSendToEthResponse;

            /**
             * Creates a plain object from a QueryPendingSendToEthResponse message. Also converts values to other types if specified.
             * @param message QueryPendingSendToEthResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.QueryPendingSendToEthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryPendingSendToEthResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SignType enum. */
        enum SignType {
            SIGN_TYPE_UNSPECIFIED = 0,
            SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE = 1,
            SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH = 2
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params gravityId */
            gravityId?: (string|null);

            /** Params contractSourceHash */
            contractSourceHash?: (string|null);

            /** Params bridgeEthereumAddress */
            bridgeEthereumAddress?: (string|null);

            /** Params bridgeChainId */
            bridgeChainId?: (number|Long|null);

            /** Params signedValsetsWindow */
            signedValsetsWindow?: (number|Long|null);

            /** Params signedBatchesWindow */
            signedBatchesWindow?: (number|Long|null);

            /** Params signedLogicCallsWindow */
            signedLogicCallsWindow?: (number|Long|null);

            /** Params targetBatchTimeout */
            targetBatchTimeout?: (number|Long|null);

            /** Params averageBlockTime */
            averageBlockTime?: (number|Long|null);

            /** Params averageEthereumBlockTime */
            averageEthereumBlockTime?: (number|Long|null);

            /** Params slashFractionValset */
            slashFractionValset?: (Uint8Array|null);

            /** Params slashFractionBatch */
            slashFractionBatch?: (Uint8Array|null);

            /** Params slashFractionLogicCall */
            slashFractionLogicCall?: (Uint8Array|null);

            /** Params unbondSlashingValsetsWindow */
            unbondSlashingValsetsWindow?: (number|Long|null);

            /** Params slashFractionBadEthSignature */
            slashFractionBadEthSignature?: (Uint8Array|null);

            /** Params valsetReward */
            valsetReward?: (cosmos.base.v1beta1.ICoin|null);

            /** Params bridgeActive */
            bridgeActive?: (boolean|null);

            /** Params ethereumBlacklist */
            ethereumBlacklist?: (string[]|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IParams);

            /** Params gravityId. */
            public gravityId: string;

            /** Params contractSourceHash. */
            public contractSourceHash: string;

            /** Params bridgeEthereumAddress. */
            public bridgeEthereumAddress: string;

            /** Params bridgeChainId. */
            public bridgeChainId: (number|Long);

            /** Params signedValsetsWindow. */
            public signedValsetsWindow: (number|Long);

            /** Params signedBatchesWindow. */
            public signedBatchesWindow: (number|Long);

            /** Params signedLogicCallsWindow. */
            public signedLogicCallsWindow: (number|Long);

            /** Params targetBatchTimeout. */
            public targetBatchTimeout: (number|Long);

            /** Params averageBlockTime. */
            public averageBlockTime: (number|Long);

            /** Params averageEthereumBlockTime. */
            public averageEthereumBlockTime: (number|Long);

            /** Params slashFractionValset. */
            public slashFractionValset: Uint8Array;

            /** Params slashFractionBatch. */
            public slashFractionBatch: Uint8Array;

            /** Params slashFractionLogicCall. */
            public slashFractionLogicCall: Uint8Array;

            /** Params unbondSlashingValsetsWindow. */
            public unbondSlashingValsetsWindow: (number|Long);

            /** Params slashFractionBadEthSignature. */
            public slashFractionBadEthSignature: Uint8Array;

            /** Params valsetReward. */
            public valsetReward?: (cosmos.base.v1beta1.ICoin|null);

            /** Params bridgeActive. */
            public bridgeActive: boolean;

            /** Params ethereumBlacklist. */
            public ethereumBlacklist: string[];

            /**
             * Creates a new Params instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Params instance
             */
            public static create(properties?: gravity.v1.IParams): gravity.v1.Params;

            /**
             * Encodes the specified Params message. Does not implicitly {@link gravity.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link gravity.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.Params;

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
            public static fromObject(object: { [k: string]: any }): gravity.v1.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (gravity.v1.IParams|null);

            /** GenesisState gravityNonces */
            gravityNonces?: (gravity.v1.IGravityNonces|null);

            /** GenesisState valsets */
            valsets?: (gravity.v1.IValset[]|null);

            /** GenesisState valsetConfirms */
            valsetConfirms?: (gravity.v1.IMsgValsetConfirm[]|null);

            /** GenesisState batches */
            batches?: (gravity.v1.IOutgoingTxBatch[]|null);

            /** GenesisState batchConfirms */
            batchConfirms?: (gravity.v1.IMsgConfirmBatch[]|null);

            /** GenesisState logicCalls */
            logicCalls?: (gravity.v1.IOutgoingLogicCall[]|null);

            /** GenesisState logicCallConfirms */
            logicCallConfirms?: (gravity.v1.IMsgConfirmLogicCall[]|null);

            /** GenesisState attestations */
            attestations?: (gravity.v1.IAttestation[]|null);

            /** GenesisState delegateKeys */
            delegateKeys?: (gravity.v1.IMsgSetOrchestratorAddress[]|null);

            /** GenesisState erc20ToDenoms */
            erc20ToDenoms?: (gravity.v1.IERC20ToDenom[]|null);

            /** GenesisState unbatchedTransfers */
            unbatchedTransfers?: (gravity.v1.IOutgoingTransferTx[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IGenesisState);

            /** GenesisState params. */
            public params?: (gravity.v1.IParams|null);

            /** GenesisState gravityNonces. */
            public gravityNonces?: (gravity.v1.IGravityNonces|null);

            /** GenesisState valsets. */
            public valsets: gravity.v1.IValset[];

            /** GenesisState valsetConfirms. */
            public valsetConfirms: gravity.v1.IMsgValsetConfirm[];

            /** GenesisState batches. */
            public batches: gravity.v1.IOutgoingTxBatch[];

            /** GenesisState batchConfirms. */
            public batchConfirms: gravity.v1.IMsgConfirmBatch[];

            /** GenesisState logicCalls. */
            public logicCalls: gravity.v1.IOutgoingLogicCall[];

            /** GenesisState logicCallConfirms. */
            public logicCallConfirms: gravity.v1.IMsgConfirmLogicCall[];

            /** GenesisState attestations. */
            public attestations: gravity.v1.IAttestation[];

            /** GenesisState delegateKeys. */
            public delegateKeys: gravity.v1.IMsgSetOrchestratorAddress[];

            /** GenesisState erc20ToDenoms. */
            public erc20ToDenoms: gravity.v1.IERC20ToDenom[];

            /** GenesisState unbatchedTransfers. */
            public unbatchedTransfers: gravity.v1.IOutgoingTransferTx[];

            /**
             * Creates a new GenesisState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GenesisState instance
             */
            public static create(properties?: gravity.v1.IGenesisState): gravity.v1.GenesisState;

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link gravity.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link gravity.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.GenesisState;

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
            public static fromObject(object: { [k: string]: any }): gravity.v1.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GravityNonces. */
        interface IGravityNonces {

            /** GravityNonces latestValsetNonce */
            latestValsetNonce?: (number|Long|null);

            /** GravityNonces lastObservedNonce */
            lastObservedNonce?: (number|Long|null);

            /** GravityNonces lastSlashedValsetNonce */
            lastSlashedValsetNonce?: (number|Long|null);

            /** GravityNonces lastSlashedBatchBlock */
            lastSlashedBatchBlock?: (number|Long|null);

            /** GravityNonces lastSlashedLogicCallBlock */
            lastSlashedLogicCallBlock?: (number|Long|null);

            /** GravityNonces lastTxPoolId */
            lastTxPoolId?: (number|Long|null);

            /** GravityNonces lastBatchId */
            lastBatchId?: (number|Long|null);
        }

        /** Represents a GravityNonces. */
        class GravityNonces implements IGravityNonces {

            /**
             * Constructs a new GravityNonces.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IGravityNonces);

            /** GravityNonces latestValsetNonce. */
            public latestValsetNonce: (number|Long);

            /** GravityNonces lastObservedNonce. */
            public lastObservedNonce: (number|Long);

            /** GravityNonces lastSlashedValsetNonce. */
            public lastSlashedValsetNonce: (number|Long);

            /** GravityNonces lastSlashedBatchBlock. */
            public lastSlashedBatchBlock: (number|Long);

            /** GravityNonces lastSlashedLogicCallBlock. */
            public lastSlashedLogicCallBlock: (number|Long);

            /** GravityNonces lastTxPoolId. */
            public lastTxPoolId: (number|Long);

            /** GravityNonces lastBatchId. */
            public lastBatchId: (number|Long);

            /**
             * Creates a new GravityNonces instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GravityNonces instance
             */
            public static create(properties?: gravity.v1.IGravityNonces): gravity.v1.GravityNonces;

            /**
             * Encodes the specified GravityNonces message. Does not implicitly {@link gravity.v1.GravityNonces.verify|verify} messages.
             * @param message GravityNonces message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IGravityNonces, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GravityNonces message, length delimited. Does not implicitly {@link gravity.v1.GravityNonces.verify|verify} messages.
             * @param message GravityNonces message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IGravityNonces, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GravityNonces message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GravityNonces
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.GravityNonces;

            /**
             * Decodes a GravityNonces message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GravityNonces
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.GravityNonces;

            /**
             * Verifies a GravityNonces message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GravityNonces message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GravityNonces
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.GravityNonces;

            /**
             * Creates a plain object from a GravityNonces message. Also converts values to other types if specified.
             * @param message GravityNonces
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.GravityNonces, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GravityNonces to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

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
             * Calls ValsetConfirm.
             * @param request MsgValsetConfirm message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgValsetConfirmResponse
             */
            public valsetConfirm(request: gravity.v1.IMsgValsetConfirm, callback: gravity.v1.Msg.ValsetConfirmCallback): void;

            /**
             * Calls ValsetConfirm.
             * @param request MsgValsetConfirm message or plain object
             * @returns Promise
             */
            public valsetConfirm(request: gravity.v1.IMsgValsetConfirm): Promise<gravity.v1.MsgValsetConfirmResponse>;

            /**
             * Calls SendToEth.
             * @param request MsgSendToEth message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSendToEthResponse
             */
            public sendToEth(request: gravity.v1.IMsgSendToEth, callback: gravity.v1.Msg.SendToEthCallback): void;

            /**
             * Calls SendToEth.
             * @param request MsgSendToEth message or plain object
             * @returns Promise
             */
            public sendToEth(request: gravity.v1.IMsgSendToEth): Promise<gravity.v1.MsgSendToEthResponse>;

            /**
             * Calls RequestBatch.
             * @param request MsgRequestBatch message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgRequestBatchResponse
             */
            public requestBatch(request: gravity.v1.IMsgRequestBatch, callback: gravity.v1.Msg.RequestBatchCallback): void;

            /**
             * Calls RequestBatch.
             * @param request MsgRequestBatch message or plain object
             * @returns Promise
             */
            public requestBatch(request: gravity.v1.IMsgRequestBatch): Promise<gravity.v1.MsgRequestBatchResponse>;

            /**
             * Calls ConfirmBatch.
             * @param request MsgConfirmBatch message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgConfirmBatchResponse
             */
            public confirmBatch(request: gravity.v1.IMsgConfirmBatch, callback: gravity.v1.Msg.ConfirmBatchCallback): void;

            /**
             * Calls ConfirmBatch.
             * @param request MsgConfirmBatch message or plain object
             * @returns Promise
             */
            public confirmBatch(request: gravity.v1.IMsgConfirmBatch): Promise<gravity.v1.MsgConfirmBatchResponse>;

            /**
             * Calls ConfirmLogicCall.
             * @param request MsgConfirmLogicCall message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgConfirmLogicCallResponse
             */
            public confirmLogicCall(request: gravity.v1.IMsgConfirmLogicCall, callback: gravity.v1.Msg.ConfirmLogicCallCallback): void;

            /**
             * Calls ConfirmLogicCall.
             * @param request MsgConfirmLogicCall message or plain object
             * @returns Promise
             */
            public confirmLogicCall(request: gravity.v1.IMsgConfirmLogicCall): Promise<gravity.v1.MsgConfirmLogicCallResponse>;

            /**
             * Calls SendToCosmosClaim.
             * @param request MsgSendToCosmosClaim message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSendToCosmosClaimResponse
             */
            public sendToCosmosClaim(request: gravity.v1.IMsgSendToCosmosClaim, callback: gravity.v1.Msg.SendToCosmosClaimCallback): void;

            /**
             * Calls SendToCosmosClaim.
             * @param request MsgSendToCosmosClaim message or plain object
             * @returns Promise
             */
            public sendToCosmosClaim(request: gravity.v1.IMsgSendToCosmosClaim): Promise<gravity.v1.MsgSendToCosmosClaimResponse>;

            /**
             * Calls BatchSendToEthClaim.
             * @param request MsgBatchSendToEthClaim message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgBatchSendToEthClaimResponse
             */
            public batchSendToEthClaim(request: gravity.v1.IMsgBatchSendToEthClaim, callback: gravity.v1.Msg.BatchSendToEthClaimCallback): void;

            /**
             * Calls BatchSendToEthClaim.
             * @param request MsgBatchSendToEthClaim message or plain object
             * @returns Promise
             */
            public batchSendToEthClaim(request: gravity.v1.IMsgBatchSendToEthClaim): Promise<gravity.v1.MsgBatchSendToEthClaimResponse>;

            /**
             * Calls ValsetUpdateClaim.
             * @param request MsgValsetUpdatedClaim message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgValsetUpdatedClaimResponse
             */
            public valsetUpdateClaim(request: gravity.v1.IMsgValsetUpdatedClaim, callback: gravity.v1.Msg.ValsetUpdateClaimCallback): void;

            /**
             * Calls ValsetUpdateClaim.
             * @param request MsgValsetUpdatedClaim message or plain object
             * @returns Promise
             */
            public valsetUpdateClaim(request: gravity.v1.IMsgValsetUpdatedClaim): Promise<gravity.v1.MsgValsetUpdatedClaimResponse>;

            /**
             * Calls ERC20DeployedClaim.
             * @param request MsgERC20DeployedClaim message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgERC20DeployedClaimResponse
             */
            public eRC20DeployedClaim(request: gravity.v1.IMsgERC20DeployedClaim, callback: gravity.v1.Msg.ERC20DeployedClaimCallback): void;

            /**
             * Calls ERC20DeployedClaim.
             * @param request MsgERC20DeployedClaim message or plain object
             * @returns Promise
             */
            public eRC20DeployedClaim(request: gravity.v1.IMsgERC20DeployedClaim): Promise<gravity.v1.MsgERC20DeployedClaimResponse>;

            /**
             * Calls LogicCallExecutedClaim.
             * @param request MsgLogicCallExecutedClaim message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgLogicCallExecutedClaimResponse
             */
            public logicCallExecutedClaim(request: gravity.v1.IMsgLogicCallExecutedClaim, callback: gravity.v1.Msg.LogicCallExecutedClaimCallback): void;

            /**
             * Calls LogicCallExecutedClaim.
             * @param request MsgLogicCallExecutedClaim message or plain object
             * @returns Promise
             */
            public logicCallExecutedClaim(request: gravity.v1.IMsgLogicCallExecutedClaim): Promise<gravity.v1.MsgLogicCallExecutedClaimResponse>;

            /**
             * Calls SetOrchestratorAddress.
             * @param request MsgSetOrchestratorAddress message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSetOrchestratorAddressResponse
             */
            public setOrchestratorAddress(request: gravity.v1.IMsgSetOrchestratorAddress, callback: gravity.v1.Msg.SetOrchestratorAddressCallback): void;

            /**
             * Calls SetOrchestratorAddress.
             * @param request MsgSetOrchestratorAddress message or plain object
             * @returns Promise
             */
            public setOrchestratorAddress(request: gravity.v1.IMsgSetOrchestratorAddress): Promise<gravity.v1.MsgSetOrchestratorAddressResponse>;

            /**
             * Calls CancelSendToEth.
             * @param request MsgCancelSendToEth message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgCancelSendToEthResponse
             */
            public cancelSendToEth(request: gravity.v1.IMsgCancelSendToEth, callback: gravity.v1.Msg.CancelSendToEthCallback): void;

            /**
             * Calls CancelSendToEth.
             * @param request MsgCancelSendToEth message or plain object
             * @returns Promise
             */
            public cancelSendToEth(request: gravity.v1.IMsgCancelSendToEth): Promise<gravity.v1.MsgCancelSendToEthResponse>;

            /**
             * Calls SubmitBadSignatureEvidence.
             * @param request MsgSubmitBadSignatureEvidence message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgSubmitBadSignatureEvidenceResponse
             */
            public submitBadSignatureEvidence(request: gravity.v1.IMsgSubmitBadSignatureEvidence, callback: gravity.v1.Msg.SubmitBadSignatureEvidenceCallback): void;

            /**
             * Calls SubmitBadSignatureEvidence.
             * @param request MsgSubmitBadSignatureEvidence message or plain object
             * @returns Promise
             */
            public submitBadSignatureEvidence(request: gravity.v1.IMsgSubmitBadSignatureEvidence): Promise<gravity.v1.MsgSubmitBadSignatureEvidenceResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link gravity.v1.Msg#valsetConfirm}.
             * @param error Error, if any
             * @param [response] MsgValsetConfirmResponse
             */
            type ValsetConfirmCallback = (error: (Error|null), response?: gravity.v1.MsgValsetConfirmResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#sendToEth}.
             * @param error Error, if any
             * @param [response] MsgSendToEthResponse
             */
            type SendToEthCallback = (error: (Error|null), response?: gravity.v1.MsgSendToEthResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#requestBatch}.
             * @param error Error, if any
             * @param [response] MsgRequestBatchResponse
             */
            type RequestBatchCallback = (error: (Error|null), response?: gravity.v1.MsgRequestBatchResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#confirmBatch}.
             * @param error Error, if any
             * @param [response] MsgConfirmBatchResponse
             */
            type ConfirmBatchCallback = (error: (Error|null), response?: gravity.v1.MsgConfirmBatchResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#confirmLogicCall}.
             * @param error Error, if any
             * @param [response] MsgConfirmLogicCallResponse
             */
            type ConfirmLogicCallCallback = (error: (Error|null), response?: gravity.v1.MsgConfirmLogicCallResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#sendToCosmosClaim}.
             * @param error Error, if any
             * @param [response] MsgSendToCosmosClaimResponse
             */
            type SendToCosmosClaimCallback = (error: (Error|null), response?: gravity.v1.MsgSendToCosmosClaimResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#batchSendToEthClaim}.
             * @param error Error, if any
             * @param [response] MsgBatchSendToEthClaimResponse
             */
            type BatchSendToEthClaimCallback = (error: (Error|null), response?: gravity.v1.MsgBatchSendToEthClaimResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#valsetUpdateClaim}.
             * @param error Error, if any
             * @param [response] MsgValsetUpdatedClaimResponse
             */
            type ValsetUpdateClaimCallback = (error: (Error|null), response?: gravity.v1.MsgValsetUpdatedClaimResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#eRC20DeployedClaim}.
             * @param error Error, if any
             * @param [response] MsgERC20DeployedClaimResponse
             */
            type ERC20DeployedClaimCallback = (error: (Error|null), response?: gravity.v1.MsgERC20DeployedClaimResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#logicCallExecutedClaim}.
             * @param error Error, if any
             * @param [response] MsgLogicCallExecutedClaimResponse
             */
            type LogicCallExecutedClaimCallback = (error: (Error|null), response?: gravity.v1.MsgLogicCallExecutedClaimResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#setOrchestratorAddress}.
             * @param error Error, if any
             * @param [response] MsgSetOrchestratorAddressResponse
             */
            type SetOrchestratorAddressCallback = (error: (Error|null), response?: gravity.v1.MsgSetOrchestratorAddressResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#cancelSendToEth}.
             * @param error Error, if any
             * @param [response] MsgCancelSendToEthResponse
             */
            type CancelSendToEthCallback = (error: (Error|null), response?: gravity.v1.MsgCancelSendToEthResponse) => void;

            /**
             * Callback as used by {@link gravity.v1.Msg#submitBadSignatureEvidence}.
             * @param error Error, if any
             * @param [response] MsgSubmitBadSignatureEvidenceResponse
             */
            type SubmitBadSignatureEvidenceCallback = (error: (Error|null), response?: gravity.v1.MsgSubmitBadSignatureEvidenceResponse) => void;
        }

        /** Properties of a MsgSetOrchestratorAddress. */
        interface IMsgSetOrchestratorAddress {

            /** MsgSetOrchestratorAddress validator */
            validator?: (string|null);

            /** MsgSetOrchestratorAddress orchestrator */
            orchestrator?: (string|null);

            /** MsgSetOrchestratorAddress ethAddress */
            ethAddress?: (string|null);
        }

        /** Represents a MsgSetOrchestratorAddress. */
        class MsgSetOrchestratorAddress implements IMsgSetOrchestratorAddress {

            /**
             * Constructs a new MsgSetOrchestratorAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSetOrchestratorAddress);

            /** MsgSetOrchestratorAddress validator. */
            public validator: string;

            /** MsgSetOrchestratorAddress orchestrator. */
            public orchestrator: string;

            /** MsgSetOrchestratorAddress ethAddress. */
            public ethAddress: string;

            /**
             * Creates a new MsgSetOrchestratorAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSetOrchestratorAddress instance
             */
            public static create(properties?: gravity.v1.IMsgSetOrchestratorAddress): gravity.v1.MsgSetOrchestratorAddress;

            /**
             * Encodes the specified MsgSetOrchestratorAddress message. Does not implicitly {@link gravity.v1.MsgSetOrchestratorAddress.verify|verify} messages.
             * @param message MsgSetOrchestratorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSetOrchestratorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSetOrchestratorAddress message, length delimited. Does not implicitly {@link gravity.v1.MsgSetOrchestratorAddress.verify|verify} messages.
             * @param message MsgSetOrchestratorAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSetOrchestratorAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSetOrchestratorAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSetOrchestratorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSetOrchestratorAddress;

            /**
             * Decodes a MsgSetOrchestratorAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSetOrchestratorAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSetOrchestratorAddress;

            /**
             * Verifies a MsgSetOrchestratorAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSetOrchestratorAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSetOrchestratorAddress
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSetOrchestratorAddress;

            /**
             * Creates a plain object from a MsgSetOrchestratorAddress message. Also converts values to other types if specified.
             * @param message MsgSetOrchestratorAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSetOrchestratorAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSetOrchestratorAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSetOrchestratorAddressResponse. */
        interface IMsgSetOrchestratorAddressResponse {
        }

        /** Represents a MsgSetOrchestratorAddressResponse. */
        class MsgSetOrchestratorAddressResponse implements IMsgSetOrchestratorAddressResponse {

            /**
             * Constructs a new MsgSetOrchestratorAddressResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSetOrchestratorAddressResponse);

            /**
             * Creates a new MsgSetOrchestratorAddressResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSetOrchestratorAddressResponse instance
             */
            public static create(properties?: gravity.v1.IMsgSetOrchestratorAddressResponse): gravity.v1.MsgSetOrchestratorAddressResponse;

            /**
             * Encodes the specified MsgSetOrchestratorAddressResponse message. Does not implicitly {@link gravity.v1.MsgSetOrchestratorAddressResponse.verify|verify} messages.
             * @param message MsgSetOrchestratorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSetOrchestratorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSetOrchestratorAddressResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSetOrchestratorAddressResponse.verify|verify} messages.
             * @param message MsgSetOrchestratorAddressResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSetOrchestratorAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSetOrchestratorAddressResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSetOrchestratorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSetOrchestratorAddressResponse;

            /**
             * Decodes a MsgSetOrchestratorAddressResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSetOrchestratorAddressResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSetOrchestratorAddressResponse;

            /**
             * Verifies a MsgSetOrchestratorAddressResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSetOrchestratorAddressResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSetOrchestratorAddressResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSetOrchestratorAddressResponse;

            /**
             * Creates a plain object from a MsgSetOrchestratorAddressResponse message. Also converts values to other types if specified.
             * @param message MsgSetOrchestratorAddressResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSetOrchestratorAddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSetOrchestratorAddressResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgValsetConfirm. */
        interface IMsgValsetConfirm {

            /** MsgValsetConfirm nonce */
            nonce?: (number|Long|null);

            /** MsgValsetConfirm orchestrator */
            orchestrator?: (string|null);

            /** MsgValsetConfirm ethAddress */
            ethAddress?: (string|null);

            /** MsgValsetConfirm signature */
            signature?: (string|null);
        }

        /** Represents a MsgValsetConfirm. */
        class MsgValsetConfirm implements IMsgValsetConfirm {

            /**
             * Constructs a new MsgValsetConfirm.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgValsetConfirm);

            /** MsgValsetConfirm nonce. */
            public nonce: (number|Long);

            /** MsgValsetConfirm orchestrator. */
            public orchestrator: string;

            /** MsgValsetConfirm ethAddress. */
            public ethAddress: string;

            /** MsgValsetConfirm signature. */
            public signature: string;

            /**
             * Creates a new MsgValsetConfirm instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgValsetConfirm instance
             */
            public static create(properties?: gravity.v1.IMsgValsetConfirm): gravity.v1.MsgValsetConfirm;

            /**
             * Encodes the specified MsgValsetConfirm message. Does not implicitly {@link gravity.v1.MsgValsetConfirm.verify|verify} messages.
             * @param message MsgValsetConfirm message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgValsetConfirm, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgValsetConfirm message, length delimited. Does not implicitly {@link gravity.v1.MsgValsetConfirm.verify|verify} messages.
             * @param message MsgValsetConfirm message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgValsetConfirm, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgValsetConfirm message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgValsetConfirm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgValsetConfirm;

            /**
             * Decodes a MsgValsetConfirm message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgValsetConfirm
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgValsetConfirm;

            /**
             * Verifies a MsgValsetConfirm message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgValsetConfirm message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgValsetConfirm
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgValsetConfirm;

            /**
             * Creates a plain object from a MsgValsetConfirm message. Also converts values to other types if specified.
             * @param message MsgValsetConfirm
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgValsetConfirm, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgValsetConfirm to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgValsetConfirmResponse. */
        interface IMsgValsetConfirmResponse {
        }

        /** Represents a MsgValsetConfirmResponse. */
        class MsgValsetConfirmResponse implements IMsgValsetConfirmResponse {

            /**
             * Constructs a new MsgValsetConfirmResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgValsetConfirmResponse);

            /**
             * Creates a new MsgValsetConfirmResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgValsetConfirmResponse instance
             */
            public static create(properties?: gravity.v1.IMsgValsetConfirmResponse): gravity.v1.MsgValsetConfirmResponse;

            /**
             * Encodes the specified MsgValsetConfirmResponse message. Does not implicitly {@link gravity.v1.MsgValsetConfirmResponse.verify|verify} messages.
             * @param message MsgValsetConfirmResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgValsetConfirmResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgValsetConfirmResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgValsetConfirmResponse.verify|verify} messages.
             * @param message MsgValsetConfirmResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgValsetConfirmResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgValsetConfirmResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgValsetConfirmResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgValsetConfirmResponse;

            /**
             * Decodes a MsgValsetConfirmResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgValsetConfirmResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgValsetConfirmResponse;

            /**
             * Verifies a MsgValsetConfirmResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgValsetConfirmResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgValsetConfirmResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgValsetConfirmResponse;

            /**
             * Creates a plain object from a MsgValsetConfirmResponse message. Also converts values to other types if specified.
             * @param message MsgValsetConfirmResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgValsetConfirmResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgValsetConfirmResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSendToEth. */
        interface IMsgSendToEth {

            /** MsgSendToEth sender */
            sender?: (string|null);

            /** MsgSendToEth ethDest */
            ethDest?: (string|null);

            /** MsgSendToEth amount */
            amount?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgSendToEth bridgeFee */
            bridgeFee?: (cosmos.base.v1beta1.ICoin|null);
        }

        /** Represents a MsgSendToEth. */
        class MsgSendToEth implements IMsgSendToEth {

            /**
             * Constructs a new MsgSendToEth.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToEth);

            /** MsgSendToEth sender. */
            public sender: string;

            /** MsgSendToEth ethDest. */
            public ethDest: string;

            /** MsgSendToEth amount. */
            public amount?: (cosmos.base.v1beta1.ICoin|null);

            /** MsgSendToEth bridgeFee. */
            public bridgeFee?: (cosmos.base.v1beta1.ICoin|null);

            /**
             * Creates a new MsgSendToEth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSendToEth instance
             */
            public static create(properties?: gravity.v1.IMsgSendToEth): gravity.v1.MsgSendToEth;

            /**
             * Encodes the specified MsgSendToEth message. Does not implicitly {@link gravity.v1.MsgSendToEth.verify|verify} messages.
             * @param message MsgSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToEth message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToEth.verify|verify} messages.
             * @param message MsgSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToEth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToEth;

            /**
             * Decodes a MsgSendToEth message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToEth;

            /**
             * Verifies a MsgSendToEth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToEth message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToEth
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToEth;

            /**
             * Creates a plain object from a MsgSendToEth message. Also converts values to other types if specified.
             * @param message MsgSendToEth
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToEth, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToEth to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSendToEthResponse. */
        interface IMsgSendToEthResponse {
        }

        /** Represents a MsgSendToEthResponse. */
        class MsgSendToEthResponse implements IMsgSendToEthResponse {

            /**
             * Constructs a new MsgSendToEthResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToEthResponse);

            /**
             * Creates a new MsgSendToEthResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSendToEthResponse instance
             */
            public static create(properties?: gravity.v1.IMsgSendToEthResponse): gravity.v1.MsgSendToEthResponse;

            /**
             * Encodes the specified MsgSendToEthResponse message. Does not implicitly {@link gravity.v1.MsgSendToEthResponse.verify|verify} messages.
             * @param message MsgSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToEthResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToEthResponse.verify|verify} messages.
             * @param message MsgSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToEthResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToEthResponse;

            /**
             * Decodes a MsgSendToEthResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToEthResponse;

            /**
             * Verifies a MsgSendToEthResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToEthResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToEthResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToEthResponse;

            /**
             * Creates a plain object from a MsgSendToEthResponse message. Also converts values to other types if specified.
             * @param message MsgSendToEthResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToEthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToEthResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRequestBatch. */
        interface IMsgRequestBatch {

            /** MsgRequestBatch sender */
            sender?: (string|null);

            /** MsgRequestBatch denom */
            denom?: (string|null);
        }

        /** Represents a MsgRequestBatch. */
        class MsgRequestBatch implements IMsgRequestBatch {

            /**
             * Constructs a new MsgRequestBatch.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgRequestBatch);

            /** MsgRequestBatch sender. */
            public sender: string;

            /** MsgRequestBatch denom. */
            public denom: string;

            /**
             * Creates a new MsgRequestBatch instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgRequestBatch instance
             */
            public static create(properties?: gravity.v1.IMsgRequestBatch): gravity.v1.MsgRequestBatch;

            /**
             * Encodes the specified MsgRequestBatch message. Does not implicitly {@link gravity.v1.MsgRequestBatch.verify|verify} messages.
             * @param message MsgRequestBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgRequestBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestBatch message, length delimited. Does not implicitly {@link gravity.v1.MsgRequestBatch.verify|verify} messages.
             * @param message MsgRequestBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgRequestBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestBatch message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgRequestBatch;

            /**
             * Decodes a MsgRequestBatch message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgRequestBatch;

            /**
             * Verifies a MsgRequestBatch message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestBatch message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestBatch
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgRequestBatch;

            /**
             * Creates a plain object from a MsgRequestBatch message. Also converts values to other types if specified.
             * @param message MsgRequestBatch
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgRequestBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestBatch to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRequestBatchResponse. */
        interface IMsgRequestBatchResponse {
        }

        /** Represents a MsgRequestBatchResponse. */
        class MsgRequestBatchResponse implements IMsgRequestBatchResponse {

            /**
             * Constructs a new MsgRequestBatchResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgRequestBatchResponse);

            /**
             * Creates a new MsgRequestBatchResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgRequestBatchResponse instance
             */
            public static create(properties?: gravity.v1.IMsgRequestBatchResponse): gravity.v1.MsgRequestBatchResponse;

            /**
             * Encodes the specified MsgRequestBatchResponse message. Does not implicitly {@link gravity.v1.MsgRequestBatchResponse.verify|verify} messages.
             * @param message MsgRequestBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgRequestBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestBatchResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgRequestBatchResponse.verify|verify} messages.
             * @param message MsgRequestBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgRequestBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestBatchResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgRequestBatchResponse;

            /**
             * Decodes a MsgRequestBatchResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgRequestBatchResponse;

            /**
             * Verifies a MsgRequestBatchResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestBatchResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestBatchResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgRequestBatchResponse;

            /**
             * Creates a plain object from a MsgRequestBatchResponse message. Also converts values to other types if specified.
             * @param message MsgRequestBatchResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgRequestBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestBatchResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgConfirmBatch. */
        interface IMsgConfirmBatch {

            /** MsgConfirmBatch nonce */
            nonce?: (number|Long|null);

            /** MsgConfirmBatch tokenContract */
            tokenContract?: (string|null);

            /** MsgConfirmBatch ethSigner */
            ethSigner?: (string|null);

            /** MsgConfirmBatch orchestrator */
            orchestrator?: (string|null);

            /** MsgConfirmBatch signature */
            signature?: (string|null);
        }

        /** Represents a MsgConfirmBatch. */
        class MsgConfirmBatch implements IMsgConfirmBatch {

            /**
             * Constructs a new MsgConfirmBatch.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgConfirmBatch);

            /** MsgConfirmBatch nonce. */
            public nonce: (number|Long);

            /** MsgConfirmBatch tokenContract. */
            public tokenContract: string;

            /** MsgConfirmBatch ethSigner. */
            public ethSigner: string;

            /** MsgConfirmBatch orchestrator. */
            public orchestrator: string;

            /** MsgConfirmBatch signature. */
            public signature: string;

            /**
             * Creates a new MsgConfirmBatch instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgConfirmBatch instance
             */
            public static create(properties?: gravity.v1.IMsgConfirmBatch): gravity.v1.MsgConfirmBatch;

            /**
             * Encodes the specified MsgConfirmBatch message. Does not implicitly {@link gravity.v1.MsgConfirmBatch.verify|verify} messages.
             * @param message MsgConfirmBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgConfirmBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgConfirmBatch message, length delimited. Does not implicitly {@link gravity.v1.MsgConfirmBatch.verify|verify} messages.
             * @param message MsgConfirmBatch message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgConfirmBatch, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgConfirmBatch message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgConfirmBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgConfirmBatch;

            /**
             * Decodes a MsgConfirmBatch message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgConfirmBatch
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgConfirmBatch;

            /**
             * Verifies a MsgConfirmBatch message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgConfirmBatch message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgConfirmBatch
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgConfirmBatch;

            /**
             * Creates a plain object from a MsgConfirmBatch message. Also converts values to other types if specified.
             * @param message MsgConfirmBatch
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgConfirmBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgConfirmBatch to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgConfirmBatchResponse. */
        interface IMsgConfirmBatchResponse {
        }

        /** Represents a MsgConfirmBatchResponse. */
        class MsgConfirmBatchResponse implements IMsgConfirmBatchResponse {

            /**
             * Constructs a new MsgConfirmBatchResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgConfirmBatchResponse);

            /**
             * Creates a new MsgConfirmBatchResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgConfirmBatchResponse instance
             */
            public static create(properties?: gravity.v1.IMsgConfirmBatchResponse): gravity.v1.MsgConfirmBatchResponse;

            /**
             * Encodes the specified MsgConfirmBatchResponse message. Does not implicitly {@link gravity.v1.MsgConfirmBatchResponse.verify|verify} messages.
             * @param message MsgConfirmBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgConfirmBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgConfirmBatchResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgConfirmBatchResponse.verify|verify} messages.
             * @param message MsgConfirmBatchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgConfirmBatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgConfirmBatchResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgConfirmBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgConfirmBatchResponse;

            /**
             * Decodes a MsgConfirmBatchResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgConfirmBatchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgConfirmBatchResponse;

            /**
             * Verifies a MsgConfirmBatchResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgConfirmBatchResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgConfirmBatchResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgConfirmBatchResponse;

            /**
             * Creates a plain object from a MsgConfirmBatchResponse message. Also converts values to other types if specified.
             * @param message MsgConfirmBatchResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgConfirmBatchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgConfirmBatchResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgConfirmLogicCall. */
        interface IMsgConfirmLogicCall {

            /** MsgConfirmLogicCall invalidationId */
            invalidationId?: (string|null);

            /** MsgConfirmLogicCall invalidationNonce */
            invalidationNonce?: (number|Long|null);

            /** MsgConfirmLogicCall ethSigner */
            ethSigner?: (string|null);

            /** MsgConfirmLogicCall orchestrator */
            orchestrator?: (string|null);

            /** MsgConfirmLogicCall signature */
            signature?: (string|null);
        }

        /** Represents a MsgConfirmLogicCall. */
        class MsgConfirmLogicCall implements IMsgConfirmLogicCall {

            /**
             * Constructs a new MsgConfirmLogicCall.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgConfirmLogicCall);

            /** MsgConfirmLogicCall invalidationId. */
            public invalidationId: string;

            /** MsgConfirmLogicCall invalidationNonce. */
            public invalidationNonce: (number|Long);

            /** MsgConfirmLogicCall ethSigner. */
            public ethSigner: string;

            /** MsgConfirmLogicCall orchestrator. */
            public orchestrator: string;

            /** MsgConfirmLogicCall signature. */
            public signature: string;

            /**
             * Creates a new MsgConfirmLogicCall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgConfirmLogicCall instance
             */
            public static create(properties?: gravity.v1.IMsgConfirmLogicCall): gravity.v1.MsgConfirmLogicCall;

            /**
             * Encodes the specified MsgConfirmLogicCall message. Does not implicitly {@link gravity.v1.MsgConfirmLogicCall.verify|verify} messages.
             * @param message MsgConfirmLogicCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgConfirmLogicCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgConfirmLogicCall message, length delimited. Does not implicitly {@link gravity.v1.MsgConfirmLogicCall.verify|verify} messages.
             * @param message MsgConfirmLogicCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgConfirmLogicCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgConfirmLogicCall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgConfirmLogicCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgConfirmLogicCall;

            /**
             * Decodes a MsgConfirmLogicCall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgConfirmLogicCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgConfirmLogicCall;

            /**
             * Verifies a MsgConfirmLogicCall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgConfirmLogicCall message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgConfirmLogicCall
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgConfirmLogicCall;

            /**
             * Creates a plain object from a MsgConfirmLogicCall message. Also converts values to other types if specified.
             * @param message MsgConfirmLogicCall
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgConfirmLogicCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgConfirmLogicCall to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgConfirmLogicCallResponse. */
        interface IMsgConfirmLogicCallResponse {
        }

        /** Represents a MsgConfirmLogicCallResponse. */
        class MsgConfirmLogicCallResponse implements IMsgConfirmLogicCallResponse {

            /**
             * Constructs a new MsgConfirmLogicCallResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgConfirmLogicCallResponse);

            /**
             * Creates a new MsgConfirmLogicCallResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgConfirmLogicCallResponse instance
             */
            public static create(properties?: gravity.v1.IMsgConfirmLogicCallResponse): gravity.v1.MsgConfirmLogicCallResponse;

            /**
             * Encodes the specified MsgConfirmLogicCallResponse message. Does not implicitly {@link gravity.v1.MsgConfirmLogicCallResponse.verify|verify} messages.
             * @param message MsgConfirmLogicCallResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgConfirmLogicCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgConfirmLogicCallResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgConfirmLogicCallResponse.verify|verify} messages.
             * @param message MsgConfirmLogicCallResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgConfirmLogicCallResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgConfirmLogicCallResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgConfirmLogicCallResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgConfirmLogicCallResponse;

            /**
             * Decodes a MsgConfirmLogicCallResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgConfirmLogicCallResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgConfirmLogicCallResponse;

            /**
             * Verifies a MsgConfirmLogicCallResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgConfirmLogicCallResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgConfirmLogicCallResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgConfirmLogicCallResponse;

            /**
             * Creates a plain object from a MsgConfirmLogicCallResponse message. Also converts values to other types if specified.
             * @param message MsgConfirmLogicCallResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgConfirmLogicCallResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgConfirmLogicCallResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSendToCosmosClaim. */
        interface IMsgSendToCosmosClaim {

            /** MsgSendToCosmosClaim eventNonce */
            eventNonce?: (number|Long|null);

            /** MsgSendToCosmosClaim blockHeight */
            blockHeight?: (number|Long|null);

            /** MsgSendToCosmosClaim tokenContract */
            tokenContract?: (string|null);

            /** MsgSendToCosmosClaim amount */
            amount?: (string|null);

            /** MsgSendToCosmosClaim ethereumSender */
            ethereumSender?: (string|null);

            /** MsgSendToCosmosClaim cosmosReceiver */
            cosmosReceiver?: (string|null);

            /** MsgSendToCosmosClaim orchestrator */
            orchestrator?: (string|null);
        }

        /** Represents a MsgSendToCosmosClaim. */
        class MsgSendToCosmosClaim implements IMsgSendToCosmosClaim {

            /**
             * Constructs a new MsgSendToCosmosClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToCosmosClaim);

            /** MsgSendToCosmosClaim eventNonce. */
            public eventNonce: (number|Long);

            /** MsgSendToCosmosClaim blockHeight. */
            public blockHeight: (number|Long);

            /** MsgSendToCosmosClaim tokenContract. */
            public tokenContract: string;

            /** MsgSendToCosmosClaim amount. */
            public amount: string;

            /** MsgSendToCosmosClaim ethereumSender. */
            public ethereumSender: string;

            /** MsgSendToCosmosClaim cosmosReceiver. */
            public cosmosReceiver: string;

            /** MsgSendToCosmosClaim orchestrator. */
            public orchestrator: string;

            /**
             * Creates a new MsgSendToCosmosClaim instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSendToCosmosClaim instance
             */
            public static create(properties?: gravity.v1.IMsgSendToCosmosClaim): gravity.v1.MsgSendToCosmosClaim;

            /**
             * Encodes the specified MsgSendToCosmosClaim message. Does not implicitly {@link gravity.v1.MsgSendToCosmosClaim.verify|verify} messages.
             * @param message MsgSendToCosmosClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToCosmosClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToCosmosClaim message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToCosmosClaim.verify|verify} messages.
             * @param message MsgSendToCosmosClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToCosmosClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToCosmosClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToCosmosClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToCosmosClaim;

            /**
             * Decodes a MsgSendToCosmosClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToCosmosClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToCosmosClaim;

            /**
             * Verifies a MsgSendToCosmosClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToCosmosClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToCosmosClaim
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToCosmosClaim;

            /**
             * Creates a plain object from a MsgSendToCosmosClaim message. Also converts values to other types if specified.
             * @param message MsgSendToCosmosClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToCosmosClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToCosmosClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSendToCosmosClaimResponse. */
        interface IMsgSendToCosmosClaimResponse {
        }

        /** Represents a MsgSendToCosmosClaimResponse. */
        class MsgSendToCosmosClaimResponse implements IMsgSendToCosmosClaimResponse {

            /**
             * Constructs a new MsgSendToCosmosClaimResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSendToCosmosClaimResponse);

            /**
             * Creates a new MsgSendToCosmosClaimResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSendToCosmosClaimResponse instance
             */
            public static create(properties?: gravity.v1.IMsgSendToCosmosClaimResponse): gravity.v1.MsgSendToCosmosClaimResponse;

            /**
             * Encodes the specified MsgSendToCosmosClaimResponse message. Does not implicitly {@link gravity.v1.MsgSendToCosmosClaimResponse.verify|verify} messages.
             * @param message MsgSendToCosmosClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSendToCosmosClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSendToCosmosClaimResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSendToCosmosClaimResponse.verify|verify} messages.
             * @param message MsgSendToCosmosClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSendToCosmosClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSendToCosmosClaimResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSendToCosmosClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSendToCosmosClaimResponse;

            /**
             * Decodes a MsgSendToCosmosClaimResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSendToCosmosClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSendToCosmosClaimResponse;

            /**
             * Verifies a MsgSendToCosmosClaimResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSendToCosmosClaimResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSendToCosmosClaimResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSendToCosmosClaimResponse;

            /**
             * Creates a plain object from a MsgSendToCosmosClaimResponse message. Also converts values to other types if specified.
             * @param message MsgSendToCosmosClaimResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSendToCosmosClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSendToCosmosClaimResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgBatchSendToEthClaim. */
        interface IMsgBatchSendToEthClaim {

            /** MsgBatchSendToEthClaim eventNonce */
            eventNonce?: (number|Long|null);

            /** MsgBatchSendToEthClaim blockHeight */
            blockHeight?: (number|Long|null);

            /** MsgBatchSendToEthClaim batchNonce */
            batchNonce?: (number|Long|null);

            /** MsgBatchSendToEthClaim tokenContract */
            tokenContract?: (string|null);

            /** MsgBatchSendToEthClaim orchestrator */
            orchestrator?: (string|null);
        }

        /** Represents a MsgBatchSendToEthClaim. */
        class MsgBatchSendToEthClaim implements IMsgBatchSendToEthClaim {

            /**
             * Constructs a new MsgBatchSendToEthClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgBatchSendToEthClaim);

            /** MsgBatchSendToEthClaim eventNonce. */
            public eventNonce: (number|Long);

            /** MsgBatchSendToEthClaim blockHeight. */
            public blockHeight: (number|Long);

            /** MsgBatchSendToEthClaim batchNonce. */
            public batchNonce: (number|Long);

            /** MsgBatchSendToEthClaim tokenContract. */
            public tokenContract: string;

            /** MsgBatchSendToEthClaim orchestrator. */
            public orchestrator: string;

            /**
             * Creates a new MsgBatchSendToEthClaim instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgBatchSendToEthClaim instance
             */
            public static create(properties?: gravity.v1.IMsgBatchSendToEthClaim): gravity.v1.MsgBatchSendToEthClaim;

            /**
             * Encodes the specified MsgBatchSendToEthClaim message. Does not implicitly {@link gravity.v1.MsgBatchSendToEthClaim.verify|verify} messages.
             * @param message MsgBatchSendToEthClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgBatchSendToEthClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgBatchSendToEthClaim message, length delimited. Does not implicitly {@link gravity.v1.MsgBatchSendToEthClaim.verify|verify} messages.
             * @param message MsgBatchSendToEthClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgBatchSendToEthClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgBatchSendToEthClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgBatchSendToEthClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgBatchSendToEthClaim;

            /**
             * Decodes a MsgBatchSendToEthClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgBatchSendToEthClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgBatchSendToEthClaim;

            /**
             * Verifies a MsgBatchSendToEthClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgBatchSendToEthClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgBatchSendToEthClaim
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgBatchSendToEthClaim;

            /**
             * Creates a plain object from a MsgBatchSendToEthClaim message. Also converts values to other types if specified.
             * @param message MsgBatchSendToEthClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgBatchSendToEthClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgBatchSendToEthClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgBatchSendToEthClaimResponse. */
        interface IMsgBatchSendToEthClaimResponse {
        }

        /** Represents a MsgBatchSendToEthClaimResponse. */
        class MsgBatchSendToEthClaimResponse implements IMsgBatchSendToEthClaimResponse {

            /**
             * Constructs a new MsgBatchSendToEthClaimResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgBatchSendToEthClaimResponse);

            /**
             * Creates a new MsgBatchSendToEthClaimResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgBatchSendToEthClaimResponse instance
             */
            public static create(properties?: gravity.v1.IMsgBatchSendToEthClaimResponse): gravity.v1.MsgBatchSendToEthClaimResponse;

            /**
             * Encodes the specified MsgBatchSendToEthClaimResponse message. Does not implicitly {@link gravity.v1.MsgBatchSendToEthClaimResponse.verify|verify} messages.
             * @param message MsgBatchSendToEthClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgBatchSendToEthClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgBatchSendToEthClaimResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgBatchSendToEthClaimResponse.verify|verify} messages.
             * @param message MsgBatchSendToEthClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgBatchSendToEthClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgBatchSendToEthClaimResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgBatchSendToEthClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgBatchSendToEthClaimResponse;

            /**
             * Decodes a MsgBatchSendToEthClaimResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgBatchSendToEthClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgBatchSendToEthClaimResponse;

            /**
             * Verifies a MsgBatchSendToEthClaimResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgBatchSendToEthClaimResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgBatchSendToEthClaimResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgBatchSendToEthClaimResponse;

            /**
             * Creates a plain object from a MsgBatchSendToEthClaimResponse message. Also converts values to other types if specified.
             * @param message MsgBatchSendToEthClaimResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgBatchSendToEthClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgBatchSendToEthClaimResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgERC20DeployedClaim. */
        interface IMsgERC20DeployedClaim {

            /** MsgERC20DeployedClaim eventNonce */
            eventNonce?: (number|Long|null);

            /** MsgERC20DeployedClaim blockHeight */
            blockHeight?: (number|Long|null);

            /** MsgERC20DeployedClaim cosmosDenom */
            cosmosDenom?: (string|null);

            /** MsgERC20DeployedClaim tokenContract */
            tokenContract?: (string|null);

            /** MsgERC20DeployedClaim name */
            name?: (string|null);

            /** MsgERC20DeployedClaim symbol */
            symbol?: (string|null);

            /** MsgERC20DeployedClaim decimals */
            decimals?: (number|Long|null);

            /** MsgERC20DeployedClaim orchestrator */
            orchestrator?: (string|null);
        }

        /** Represents a MsgERC20DeployedClaim. */
        class MsgERC20DeployedClaim implements IMsgERC20DeployedClaim {

            /**
             * Constructs a new MsgERC20DeployedClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgERC20DeployedClaim);

            /** MsgERC20DeployedClaim eventNonce. */
            public eventNonce: (number|Long);

            /** MsgERC20DeployedClaim blockHeight. */
            public blockHeight: (number|Long);

            /** MsgERC20DeployedClaim cosmosDenom. */
            public cosmosDenom: string;

            /** MsgERC20DeployedClaim tokenContract. */
            public tokenContract: string;

            /** MsgERC20DeployedClaim name. */
            public name: string;

            /** MsgERC20DeployedClaim symbol. */
            public symbol: string;

            /** MsgERC20DeployedClaim decimals. */
            public decimals: (number|Long);

            /** MsgERC20DeployedClaim orchestrator. */
            public orchestrator: string;

            /**
             * Creates a new MsgERC20DeployedClaim instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgERC20DeployedClaim instance
             */
            public static create(properties?: gravity.v1.IMsgERC20DeployedClaim): gravity.v1.MsgERC20DeployedClaim;

            /**
             * Encodes the specified MsgERC20DeployedClaim message. Does not implicitly {@link gravity.v1.MsgERC20DeployedClaim.verify|verify} messages.
             * @param message MsgERC20DeployedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgERC20DeployedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgERC20DeployedClaim message, length delimited. Does not implicitly {@link gravity.v1.MsgERC20DeployedClaim.verify|verify} messages.
             * @param message MsgERC20DeployedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgERC20DeployedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgERC20DeployedClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgERC20DeployedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgERC20DeployedClaim;

            /**
             * Decodes a MsgERC20DeployedClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgERC20DeployedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgERC20DeployedClaim;

            /**
             * Verifies a MsgERC20DeployedClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgERC20DeployedClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgERC20DeployedClaim
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgERC20DeployedClaim;

            /**
             * Creates a plain object from a MsgERC20DeployedClaim message. Also converts values to other types if specified.
             * @param message MsgERC20DeployedClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgERC20DeployedClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgERC20DeployedClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgERC20DeployedClaimResponse. */
        interface IMsgERC20DeployedClaimResponse {
        }

        /** Represents a MsgERC20DeployedClaimResponse. */
        class MsgERC20DeployedClaimResponse implements IMsgERC20DeployedClaimResponse {

            /**
             * Constructs a new MsgERC20DeployedClaimResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgERC20DeployedClaimResponse);

            /**
             * Creates a new MsgERC20DeployedClaimResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgERC20DeployedClaimResponse instance
             */
            public static create(properties?: gravity.v1.IMsgERC20DeployedClaimResponse): gravity.v1.MsgERC20DeployedClaimResponse;

            /**
             * Encodes the specified MsgERC20DeployedClaimResponse message. Does not implicitly {@link gravity.v1.MsgERC20DeployedClaimResponse.verify|verify} messages.
             * @param message MsgERC20DeployedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgERC20DeployedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgERC20DeployedClaimResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgERC20DeployedClaimResponse.verify|verify} messages.
             * @param message MsgERC20DeployedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgERC20DeployedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgERC20DeployedClaimResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgERC20DeployedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgERC20DeployedClaimResponse;

            /**
             * Decodes a MsgERC20DeployedClaimResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgERC20DeployedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgERC20DeployedClaimResponse;

            /**
             * Verifies a MsgERC20DeployedClaimResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgERC20DeployedClaimResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgERC20DeployedClaimResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgERC20DeployedClaimResponse;

            /**
             * Creates a plain object from a MsgERC20DeployedClaimResponse message. Also converts values to other types if specified.
             * @param message MsgERC20DeployedClaimResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgERC20DeployedClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgERC20DeployedClaimResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgLogicCallExecutedClaim. */
        interface IMsgLogicCallExecutedClaim {

            /** MsgLogicCallExecutedClaim eventNonce */
            eventNonce?: (number|Long|null);

            /** MsgLogicCallExecutedClaim blockHeight */
            blockHeight?: (number|Long|null);

            /** MsgLogicCallExecutedClaim invalidationId */
            invalidationId?: (Uint8Array|null);

            /** MsgLogicCallExecutedClaim invalidationNonce */
            invalidationNonce?: (number|Long|null);

            /** MsgLogicCallExecutedClaim orchestrator */
            orchestrator?: (string|null);
        }

        /** Represents a MsgLogicCallExecutedClaim. */
        class MsgLogicCallExecutedClaim implements IMsgLogicCallExecutedClaim {

            /**
             * Constructs a new MsgLogicCallExecutedClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgLogicCallExecutedClaim);

            /** MsgLogicCallExecutedClaim eventNonce. */
            public eventNonce: (number|Long);

            /** MsgLogicCallExecutedClaim blockHeight. */
            public blockHeight: (number|Long);

            /** MsgLogicCallExecutedClaim invalidationId. */
            public invalidationId: Uint8Array;

            /** MsgLogicCallExecutedClaim invalidationNonce. */
            public invalidationNonce: (number|Long);

            /** MsgLogicCallExecutedClaim orchestrator. */
            public orchestrator: string;

            /**
             * Creates a new MsgLogicCallExecutedClaim instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgLogicCallExecutedClaim instance
             */
            public static create(properties?: gravity.v1.IMsgLogicCallExecutedClaim): gravity.v1.MsgLogicCallExecutedClaim;

            /**
             * Encodes the specified MsgLogicCallExecutedClaim message. Does not implicitly {@link gravity.v1.MsgLogicCallExecutedClaim.verify|verify} messages.
             * @param message MsgLogicCallExecutedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgLogicCallExecutedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLogicCallExecutedClaim message, length delimited. Does not implicitly {@link gravity.v1.MsgLogicCallExecutedClaim.verify|verify} messages.
             * @param message MsgLogicCallExecutedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgLogicCallExecutedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLogicCallExecutedClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLogicCallExecutedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgLogicCallExecutedClaim;

            /**
             * Decodes a MsgLogicCallExecutedClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLogicCallExecutedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgLogicCallExecutedClaim;

            /**
             * Verifies a MsgLogicCallExecutedClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLogicCallExecutedClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLogicCallExecutedClaim
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgLogicCallExecutedClaim;

            /**
             * Creates a plain object from a MsgLogicCallExecutedClaim message. Also converts values to other types if specified.
             * @param message MsgLogicCallExecutedClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgLogicCallExecutedClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLogicCallExecutedClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgLogicCallExecutedClaimResponse. */
        interface IMsgLogicCallExecutedClaimResponse {
        }

        /** Represents a MsgLogicCallExecutedClaimResponse. */
        class MsgLogicCallExecutedClaimResponse implements IMsgLogicCallExecutedClaimResponse {

            /**
             * Constructs a new MsgLogicCallExecutedClaimResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgLogicCallExecutedClaimResponse);

            /**
             * Creates a new MsgLogicCallExecutedClaimResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgLogicCallExecutedClaimResponse instance
             */
            public static create(properties?: gravity.v1.IMsgLogicCallExecutedClaimResponse): gravity.v1.MsgLogicCallExecutedClaimResponse;

            /**
             * Encodes the specified MsgLogicCallExecutedClaimResponse message. Does not implicitly {@link gravity.v1.MsgLogicCallExecutedClaimResponse.verify|verify} messages.
             * @param message MsgLogicCallExecutedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgLogicCallExecutedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgLogicCallExecutedClaimResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgLogicCallExecutedClaimResponse.verify|verify} messages.
             * @param message MsgLogicCallExecutedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgLogicCallExecutedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgLogicCallExecutedClaimResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgLogicCallExecutedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgLogicCallExecutedClaimResponse;

            /**
             * Decodes a MsgLogicCallExecutedClaimResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgLogicCallExecutedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgLogicCallExecutedClaimResponse;

            /**
             * Verifies a MsgLogicCallExecutedClaimResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgLogicCallExecutedClaimResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgLogicCallExecutedClaimResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgLogicCallExecutedClaimResponse;

            /**
             * Creates a plain object from a MsgLogicCallExecutedClaimResponse message. Also converts values to other types if specified.
             * @param message MsgLogicCallExecutedClaimResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgLogicCallExecutedClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgLogicCallExecutedClaimResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgValsetUpdatedClaim. */
        interface IMsgValsetUpdatedClaim {

            /** MsgValsetUpdatedClaim eventNonce */
            eventNonce?: (number|Long|null);

            /** MsgValsetUpdatedClaim valsetNonce */
            valsetNonce?: (number|Long|null);

            /** MsgValsetUpdatedClaim blockHeight */
            blockHeight?: (number|Long|null);

            /** MsgValsetUpdatedClaim members */
            members?: (gravity.v1.IBridgeValidator[]|null);

            /** MsgValsetUpdatedClaim rewardAmount */
            rewardAmount?: (string|null);

            /** MsgValsetUpdatedClaim rewardToken */
            rewardToken?: (string|null);

            /** MsgValsetUpdatedClaim orchestrator */
            orchestrator?: (string|null);
        }

        /** Represents a MsgValsetUpdatedClaim. */
        class MsgValsetUpdatedClaim implements IMsgValsetUpdatedClaim {

            /**
             * Constructs a new MsgValsetUpdatedClaim.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgValsetUpdatedClaim);

            /** MsgValsetUpdatedClaim eventNonce. */
            public eventNonce: (number|Long);

            /** MsgValsetUpdatedClaim valsetNonce. */
            public valsetNonce: (number|Long);

            /** MsgValsetUpdatedClaim blockHeight. */
            public blockHeight: (number|Long);

            /** MsgValsetUpdatedClaim members. */
            public members: gravity.v1.IBridgeValidator[];

            /** MsgValsetUpdatedClaim rewardAmount. */
            public rewardAmount: string;

            /** MsgValsetUpdatedClaim rewardToken. */
            public rewardToken: string;

            /** MsgValsetUpdatedClaim orchestrator. */
            public orchestrator: string;

            /**
             * Creates a new MsgValsetUpdatedClaim instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgValsetUpdatedClaim instance
             */
            public static create(properties?: gravity.v1.IMsgValsetUpdatedClaim): gravity.v1.MsgValsetUpdatedClaim;

            /**
             * Encodes the specified MsgValsetUpdatedClaim message. Does not implicitly {@link gravity.v1.MsgValsetUpdatedClaim.verify|verify} messages.
             * @param message MsgValsetUpdatedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgValsetUpdatedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgValsetUpdatedClaim message, length delimited. Does not implicitly {@link gravity.v1.MsgValsetUpdatedClaim.verify|verify} messages.
             * @param message MsgValsetUpdatedClaim message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgValsetUpdatedClaim, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgValsetUpdatedClaim message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgValsetUpdatedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgValsetUpdatedClaim;

            /**
             * Decodes a MsgValsetUpdatedClaim message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgValsetUpdatedClaim
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgValsetUpdatedClaim;

            /**
             * Verifies a MsgValsetUpdatedClaim message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgValsetUpdatedClaim message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgValsetUpdatedClaim
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgValsetUpdatedClaim;

            /**
             * Creates a plain object from a MsgValsetUpdatedClaim message. Also converts values to other types if specified.
             * @param message MsgValsetUpdatedClaim
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgValsetUpdatedClaim, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgValsetUpdatedClaim to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgValsetUpdatedClaimResponse. */
        interface IMsgValsetUpdatedClaimResponse {
        }

        /** Represents a MsgValsetUpdatedClaimResponse. */
        class MsgValsetUpdatedClaimResponse implements IMsgValsetUpdatedClaimResponse {

            /**
             * Constructs a new MsgValsetUpdatedClaimResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgValsetUpdatedClaimResponse);

            /**
             * Creates a new MsgValsetUpdatedClaimResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgValsetUpdatedClaimResponse instance
             */
            public static create(properties?: gravity.v1.IMsgValsetUpdatedClaimResponse): gravity.v1.MsgValsetUpdatedClaimResponse;

            /**
             * Encodes the specified MsgValsetUpdatedClaimResponse message. Does not implicitly {@link gravity.v1.MsgValsetUpdatedClaimResponse.verify|verify} messages.
             * @param message MsgValsetUpdatedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgValsetUpdatedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgValsetUpdatedClaimResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgValsetUpdatedClaimResponse.verify|verify} messages.
             * @param message MsgValsetUpdatedClaimResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgValsetUpdatedClaimResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgValsetUpdatedClaimResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgValsetUpdatedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgValsetUpdatedClaimResponse;

            /**
             * Decodes a MsgValsetUpdatedClaimResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgValsetUpdatedClaimResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgValsetUpdatedClaimResponse;

            /**
             * Verifies a MsgValsetUpdatedClaimResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgValsetUpdatedClaimResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgValsetUpdatedClaimResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgValsetUpdatedClaimResponse;

            /**
             * Creates a plain object from a MsgValsetUpdatedClaimResponse message. Also converts values to other types if specified.
             * @param message MsgValsetUpdatedClaimResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgValsetUpdatedClaimResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgValsetUpdatedClaimResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCancelSendToEth. */
        interface IMsgCancelSendToEth {

            /** MsgCancelSendToEth transactionId */
            transactionId?: (number|Long|null);

            /** MsgCancelSendToEth sender */
            sender?: (string|null);
        }

        /** Represents a MsgCancelSendToEth. */
        class MsgCancelSendToEth implements IMsgCancelSendToEth {

            /**
             * Constructs a new MsgCancelSendToEth.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgCancelSendToEth);

            /** MsgCancelSendToEth transactionId. */
            public transactionId: (number|Long);

            /** MsgCancelSendToEth sender. */
            public sender: string;

            /**
             * Creates a new MsgCancelSendToEth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgCancelSendToEth instance
             */
            public static create(properties?: gravity.v1.IMsgCancelSendToEth): gravity.v1.MsgCancelSendToEth;

            /**
             * Encodes the specified MsgCancelSendToEth message. Does not implicitly {@link gravity.v1.MsgCancelSendToEth.verify|verify} messages.
             * @param message MsgCancelSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgCancelSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCancelSendToEth message, length delimited. Does not implicitly {@link gravity.v1.MsgCancelSendToEth.verify|verify} messages.
             * @param message MsgCancelSendToEth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgCancelSendToEth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCancelSendToEth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCancelSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgCancelSendToEth;

            /**
             * Decodes a MsgCancelSendToEth message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCancelSendToEth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgCancelSendToEth;

            /**
             * Verifies a MsgCancelSendToEth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCancelSendToEth message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCancelSendToEth
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgCancelSendToEth;

            /**
             * Creates a plain object from a MsgCancelSendToEth message. Also converts values to other types if specified.
             * @param message MsgCancelSendToEth
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgCancelSendToEth, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCancelSendToEth to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCancelSendToEthResponse. */
        interface IMsgCancelSendToEthResponse {
        }

        /** Represents a MsgCancelSendToEthResponse. */
        class MsgCancelSendToEthResponse implements IMsgCancelSendToEthResponse {

            /**
             * Constructs a new MsgCancelSendToEthResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgCancelSendToEthResponse);

            /**
             * Creates a new MsgCancelSendToEthResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgCancelSendToEthResponse instance
             */
            public static create(properties?: gravity.v1.IMsgCancelSendToEthResponse): gravity.v1.MsgCancelSendToEthResponse;

            /**
             * Encodes the specified MsgCancelSendToEthResponse message. Does not implicitly {@link gravity.v1.MsgCancelSendToEthResponse.verify|verify} messages.
             * @param message MsgCancelSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgCancelSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCancelSendToEthResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgCancelSendToEthResponse.verify|verify} messages.
             * @param message MsgCancelSendToEthResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgCancelSendToEthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCancelSendToEthResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCancelSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgCancelSendToEthResponse;

            /**
             * Decodes a MsgCancelSendToEthResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCancelSendToEthResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgCancelSendToEthResponse;

            /**
             * Verifies a MsgCancelSendToEthResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCancelSendToEthResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCancelSendToEthResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgCancelSendToEthResponse;

            /**
             * Creates a plain object from a MsgCancelSendToEthResponse message. Also converts values to other types if specified.
             * @param message MsgCancelSendToEthResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgCancelSendToEthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCancelSendToEthResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitBadSignatureEvidence. */
        interface IMsgSubmitBadSignatureEvidence {

            /** MsgSubmitBadSignatureEvidence subject */
            subject?: (google.protobuf.IAny|null);

            /** MsgSubmitBadSignatureEvidence signature */
            signature?: (string|null);

            /** MsgSubmitBadSignatureEvidence sender */
            sender?: (string|null);
        }

        /** Represents a MsgSubmitBadSignatureEvidence. */
        class MsgSubmitBadSignatureEvidence implements IMsgSubmitBadSignatureEvidence {

            /**
             * Constructs a new MsgSubmitBadSignatureEvidence.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitBadSignatureEvidence);

            /** MsgSubmitBadSignatureEvidence subject. */
            public subject?: (google.protobuf.IAny|null);

            /** MsgSubmitBadSignatureEvidence signature. */
            public signature: string;

            /** MsgSubmitBadSignatureEvidence sender. */
            public sender: string;

            /**
             * Creates a new MsgSubmitBadSignatureEvidence instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSubmitBadSignatureEvidence instance
             */
            public static create(properties?: gravity.v1.IMsgSubmitBadSignatureEvidence): gravity.v1.MsgSubmitBadSignatureEvidence;

            /**
             * Encodes the specified MsgSubmitBadSignatureEvidence message. Does not implicitly {@link gravity.v1.MsgSubmitBadSignatureEvidence.verify|verify} messages.
             * @param message MsgSubmitBadSignatureEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitBadSignatureEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitBadSignatureEvidence message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitBadSignatureEvidence.verify|verify} messages.
             * @param message MsgSubmitBadSignatureEvidence message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitBadSignatureEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitBadSignatureEvidence message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitBadSignatureEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitBadSignatureEvidence;

            /**
             * Decodes a MsgSubmitBadSignatureEvidence message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitBadSignatureEvidence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitBadSignatureEvidence;

            /**
             * Verifies a MsgSubmitBadSignatureEvidence message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitBadSignatureEvidence message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitBadSignatureEvidence
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitBadSignatureEvidence;

            /**
             * Creates a plain object from a MsgSubmitBadSignatureEvidence message. Also converts values to other types if specified.
             * @param message MsgSubmitBadSignatureEvidence
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitBadSignatureEvidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitBadSignatureEvidence to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgSubmitBadSignatureEvidenceResponse. */
        interface IMsgSubmitBadSignatureEvidenceResponse {
        }

        /** Represents a MsgSubmitBadSignatureEvidenceResponse. */
        class MsgSubmitBadSignatureEvidenceResponse implements IMsgSubmitBadSignatureEvidenceResponse {

            /**
             * Constructs a new MsgSubmitBadSignatureEvidenceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: gravity.v1.IMsgSubmitBadSignatureEvidenceResponse);

            /**
             * Creates a new MsgSubmitBadSignatureEvidenceResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgSubmitBadSignatureEvidenceResponse instance
             */
            public static create(properties?: gravity.v1.IMsgSubmitBadSignatureEvidenceResponse): gravity.v1.MsgSubmitBadSignatureEvidenceResponse;

            /**
             * Encodes the specified MsgSubmitBadSignatureEvidenceResponse message. Does not implicitly {@link gravity.v1.MsgSubmitBadSignatureEvidenceResponse.verify|verify} messages.
             * @param message MsgSubmitBadSignatureEvidenceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: gravity.v1.IMsgSubmitBadSignatureEvidenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgSubmitBadSignatureEvidenceResponse message, length delimited. Does not implicitly {@link gravity.v1.MsgSubmitBadSignatureEvidenceResponse.verify|verify} messages.
             * @param message MsgSubmitBadSignatureEvidenceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: gravity.v1.IMsgSubmitBadSignatureEvidenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgSubmitBadSignatureEvidenceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgSubmitBadSignatureEvidenceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gravity.v1.MsgSubmitBadSignatureEvidenceResponse;

            /**
             * Decodes a MsgSubmitBadSignatureEvidenceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgSubmitBadSignatureEvidenceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gravity.v1.MsgSubmitBadSignatureEvidenceResponse;

            /**
             * Verifies a MsgSubmitBadSignatureEvidenceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgSubmitBadSignatureEvidenceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgSubmitBadSignatureEvidenceResponse
             */
            public static fromObject(object: { [k: string]: any }): gravity.v1.MsgSubmitBadSignatureEvidenceResponse;

            /**
             * Creates a plain object from a MsgSubmitBadSignatureEvidenceResponse message. Also converts values to other types if specified.
             * @param message MsgSubmitBadSignatureEvidenceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: gravity.v1.MsgSubmitBadSignatureEvidenceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgSubmitBadSignatureEvidenceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

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
}
