import cn from 'clsx';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IBCCurrency } from '@keplr-wallet/types';
import { useStore } from '../api/cosmosStores';
import { Bech32Address } from '@keplr-wallet/cosmos';
import { WalletStatus } from '@keplr-wallet/stores';
import { useFakeFeeConfig } from '../lib/hooks';
import { useBasicAmountConfig } from '../lib/hooks/basic-amount-config';
import { wrapBaseDialog } from './base';
import { useAccountConnection } from '../lib/hooks/account/useAccountConnection';
import { ConnectAccountButton } from '../components/ConnectAccountButton';
import { Buffer } from 'buffer/';
import { BaseModal } from 'components/common';
import { Box, Button, Text, Image, TextInput } from 'grommet';
import ModalHeader from 'components/ModalHeader';
import TxnAmountRangeInput from 'components/Transactions/TxnAmountRangeInput';
import { useData } from 'api/data';
import ATOM from '../public/images/cosmos-hub-logo.svg';
import UMEE from '../public/images/Umee_logo_icon_only.png';

export const TransferDialog = observer(
  ({
    currency,
    counterpartyChainId,
    sourceChannelId,
    destChannelId,
    close,
    onClose,
    isMobileView,
  }: {
    currency: IBCCurrency;
    counterpartyChainId: string;
    sourceChannelId: string;
    destChannelId: string;
    close?: () => void;
    onClose: (show: boolean) => void;
    isMobileView: boolean;
  }) => {
    const [isWithdraw, setIsWithdraw] = useState<boolean>(false);
    const [percentage, setPercentage] = useState<number>(0);
    const { chainStore, accountStore, queriesStore } = useStore();
    const { priceData } = useData();
    const [usdAtom, setUsdAtom] = useState<number>(0);

    useEffect(() => {
      if (priceData) {
        setUsdAtom(priceData['ATOM'].usd);
      }
    }, [priceData]);

    const account = accountStore.getAccount(chainStore.current.chainId);
    const counterpartyAccount = accountStore.getAccount(counterpartyChainId);
    const bal = queriesStore
      .get(chainStore.current.chainId)
      .queryBalances.getQueryBech32Address(account.bech32Address)
      .getBalanceFromCurrency(currency);

    const counterpartyBal = queriesStore
      .get(counterpartyChainId)
      .queryBalances.getQueryBech32Address(counterpartyAccount.bech32Address)
      .getBalanceFromCurrency(currency.originCurrency!);

    useEffect(() => {
      if (account.bech32Address && counterpartyAccount.walletStatus === WalletStatus.NotInit) {
        counterpartyAccount.init();
      }
    }, [account.bech32Address, counterpartyAccount]);

    const amountConfig = useBasicAmountConfig(
      chainStore,
      chainStore.current.chainId,
      pickOne(account.bech32Address, counterpartyAccount.bech32Address, isWithdraw),
      pickOne(currency, currency.originCurrency!, isWithdraw),
      pickOne(
        queriesStore.get(chainStore.current.chainId).queryBalances,
        queriesStore.get(counterpartyChainId).queryBalances,
        isWithdraw
      )
    );
    const feeConfig = useFakeFeeConfig(
      chainStore,
      pickOne(chainStore.current.chainId, counterpartyChainId, isWithdraw),
      pickOne(account.msgOpts.ibcTransfer.gas, counterpartyAccount.msgOpts.ibcTransfer.gas, isWithdraw)
    );
    amountConfig.setFeeConfig(feeConfig);
    const { isAccountConnected, connectAccount } = useAccountConnection();

    return (
      <BaseModal onClose={onClose}>
        <Box width="320px">
          <ModalHeader symbol={currency.coinDenom} src={currency.coinImageUrl} />
          <Box margin="-40px 0 0" direction="row" justify="between">
            <Box onClick={() => setIsWithdraw(false)}>
              <Text weight="bold" size="medium" className={!isWithdraw ? 'gradient-text' : ''}>
                Umee
              </Text>
            </Box>
            <Box onClick={() => setIsWithdraw(true)}>
              <Text weight="bold" size="medium" className={isWithdraw ? 'gradient-text' : ''}>
                Cosmos
              </Text>
            </Box>
          </Box>
          <Box direction="row" margin="10px 0 10px 0">
            <Box className={!isWithdraw ? 'modal-tab modal-tab1 active' : 'modal-tab modal-tab1'}></Box>
            <Box className={isWithdraw ? 'modal-tab modal-tab2 active' : 'modal-tab modal-tab2'}></Box>
          </Box>
          <Box margin={{ top: 'small' }}>
            <Box direction="row" justify="end" align="center">
              <Text size="small" weight="bold">
                Balance:{' '}
                <span style={{ marginLeft: '3px' }} className="gradient-text">
                  {pickOne(
                    bal.upperCase(true).trim(true).maxDecimals(6).toString(),
                    counterpartyBal.upperCase(true).trim(true).maxDecimals(6).toString(),
                    isWithdraw
                  )}
                </span>
              </Text>
            </Box>
            <Box
              direction="row"
              margin={{ top: '3px', bottom: '18px' }}
              justify="end"
              align="center"
              background="#E1F0FF"
              round="5px"
              focusIndicator={true}
              pad={{ vertical: '17px' }}
            >
              <Box width="80%">
                <Box direction="row">
                  <TextInput
                    type="number"
                    style={{ borderStyle: 'none', textAlign: 'right', padding: '0 5px' }}
                    onChange={(e) => {
                      e.preventDefault();
                      let value = e.currentTarget.value;
                      amountConfig.setAmount(value);
                      let max = pickOne(
                        bal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                        counterpartyBal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                        isWithdraw
                      );
                      setPercentage(
                        parseFloat(max) > 0 ? parseFloat(((parseFloat(value) / parseFloat(max)) * 100).toFixed(0)) : 0
                      );
                    }}
                    value={amountConfig.amount}
                    placeholder="0.00"
                    min="0"
                  />
                  <Text alignSelf="center" weight="bold" size="medium" color="#131A33">
                    {currency.coinDenom}
                  </Text>
                </Box>
                <Text margin={{ top: '-6px' }} textAlign="end" size="medium">
                  ~$
                  {parseFloat(amountConfig.amount) >= 0
                    ? (parseFloat(amountConfig.amount) * usdAtom).toFixed(2)
                    : '0.00'}
                </Text>
              </Box>
              <Box width="20%">
                <Box
                  align="center"
                  justify="center"
                  pad={{ horizontal: 'small' }}
                  onClick={() => {
                    amountConfig.setIsMax(true);
                    setPercentage(100);
                  }}
                >
                  <Text size="xsmall" weight="bold" color="clrStdBtnBg">
                    MAX
                  </Text>
                </Box>
              </Box>
            </Box>
            <TxnAmountRangeInput
              min={0}
              max={100}
              value={percentage}
              setValue={(value: any) => {
                let max = pickOne(
                  bal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                  counterpartyBal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                  isWithdraw
                );
                amountConfig.setAmount(((parseFloat(max) * parseFloat(value)) / 100).toFixed(2));
                setPercentage(Number(value));
              }}
              scales={[0, 1, 2, 3, 4]}
              maxAmount={pickOne(
                bal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                counterpartyBal.hideDenom(true).trim(true).maxDecimals(6).toString().replaceAll(',', ''),
                isWithdraw
              )}
            />
          </Box>
          <Box margin={{ top: 'small' }}>
            <Box pad={{ vertical: 'small' }}>
              <Text size="xsmall" weight="bold">
                From
              </Text>
              <Box margin={{ top: 'small' }} direction="row" justify="start" align="center">
                <Image
                  width="40px"
                  height="40px"
                  alt="token logo"
                  src={pickOne(UMEE, ATOM, isWithdraw)}
                />
                <Text color="#142A5B" margin={{ left: 'small' }} size="small">
                  {pickOne(
                    Bech32Address.shortenAddress(account.bech32Address, 25),
                    Bech32Address.shortenAddress(counterpartyAccount.bech32Address, 25),
                    isWithdraw
                  )}
                </Text>
              </Box>
            </Box>
            <Box pad={{ vertical: 'small' }} style={{ borderTop: '2px solid #E1F0FF' }}>
              <Text size="xsmall" weight="bold">
                To
              </Text>
              <Box margin={{ top: 'small' }} direction="row" justify="start" align="center">
                <Image
                  width="40px"
                  height="40px"
                  alt="token logo"
                  src={pickOne(ATOM, UMEE, isWithdraw)}
                />
                <Text color="#142A5B" margin={{ left: 'small' }} size="small">
                  {pickOne(
                    Bech32Address.shortenAddress(counterpartyAccount.bech32Address, 25),
                    Bech32Address.shortenAddress(account.bech32Address, 25),
                    isWithdraw
                  )}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box margin={{ top: 'medium' }}>
            {!isAccountConnected ? (
              <ConnectAccountButton
                className="w-full md:w-2/3 p-4 md:p-6 rounded-2xl"
                style={{ marginTop: isMobileView ? '16px' : '32px' }}
                onClick={(e) => {
                  e.preventDefault();
                  connectAccount();
                }}
              />
            ) : (
              <Button
                style={{ borderRadius: '10px', backgroundColor: '#131A33', width: '100%' }}
                size="large"
                color="black"
                primary
                disabled={
                  !account.isReadyToSendMsgs ||
                  !counterpartyAccount.isReadyToSendMsgs ||
                  amountConfig.getError() != null
                }
                onClick={async (e) => {
                  e.preventDefault();

                  try {
                    if (isWithdraw) {
                      console.log('IF');
                      if (account.isReadyToSendMsgs && counterpartyAccount.bech32Address) {
                        const sender = account.bech32Address;
                        const recipient = counterpartyAccount.bech32Address;

                        await account.cosmos.sendIBCTransferMsg(
                          {
                            portId: 'transfer',
                            channelId: sourceChannelId,
                            counterpartyChainId,
                          },
                          amountConfig.amount,
                          amountConfig.currency,
                          recipient,
                          '',
                          undefined,
                          undefined,
                          {
                            onBroadcasted: (txHash: Uint8Array) => {
                              console.log('broadcasted');
                            },
                            onFulfill: (tx) => {
                              if (!tx.code) {
                                const events = tx?.events as
                                  | { type: string; attributes: { key: string; value: string }[] }[]
                                  | undefined;
                                if (events) {
                                  for (const event of events) {
                                    if (event.type === 'send_packet') {
                                      const attributes = event.attributes;
                                      const sourceChannelAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_src_channel').toString('base64')
                                      );
                                      const sourceChannel = sourceChannelAttr
                                        ? Buffer.from(sourceChannelAttr.value, 'base64').toString()
                                        : undefined;
                                      const destChannelAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_dst_channel').toString('base64')
                                      );
                                      const destChannel = destChannelAttr
                                        ? Buffer.from(destChannelAttr.value, 'base64').toString()
                                        : undefined;
                                      const sequenceAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_sequence').toString('base64')
                                      );
                                      const sequence = sequenceAttr
                                        ? Buffer.from(sequenceAttr.value, 'base64').toString()
                                        : undefined;
                                      const timeoutHeightAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_timeout_height').toString('base64')
                                      );
                                      const timeoutHeight = timeoutHeightAttr
                                        ? Buffer.from(timeoutHeightAttr.value, 'base64').toString()
                                        : undefined;

                                      if (sourceChannel && destChannel && sequence) {
                                        {
                                        }
                                      }
                                    }
                                  }
                                }
                              }

                              //	close();
                            },
                          }
                        );
                      }
                    } else {
                      console.log('ELSE');
                      // Depositing atom from test node to umee network
                      if (counterpartyAccount.isReadyToSendMsgs && account.bech32Address) {
                        const sender = counterpartyAccount.bech32Address;
                        const recipient = account.bech32Address;
                        console.log('Current Chain ID ', chainStore.current.chainId);
                        console.log('Counter Party Chain ID ', counterpartyChainId);
                        console.log('Destination Channel ID ', destChannelId);

                        await counterpartyAccount.cosmos.sendIBCTransferMsg(
                          {
                            portId: 'transfer',
                            channelId: destChannelId,
                            counterpartyChainId: chainStore.current.chainId,
                          },
                          amountConfig.amount,
                          amountConfig.currency,
                          recipient,
                          '',
                          undefined,
                          undefined,
                          {
                            onBroadcasted: (txHash: Uint8Array) => {
                              console.log('Broadcasted');
                            },
                            onFulfill: (tx) => {
                              if (!tx.code) {
                                const events = tx?.events as
                                  | { type: string; attributes: { key: string; value: string }[] }[]
                                  | undefined;
                                if (events) {
                                  for (const event of events) {
                                    if (event.type === 'send_packet') {
                                      const attributes = event.attributes;
                                      const sourceChannelAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_src_channel').toString('base64')
                                      );
                                      const sourceChannel = sourceChannelAttr
                                        ? Buffer.from(sourceChannelAttr.value, 'base64').toString()
                                        : undefined;
                                      const destChannelAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_dst_channel').toString('base64')
                                      );
                                      const destChannel = destChannelAttr
                                        ? Buffer.from(destChannelAttr.value, 'base64').toString()
                                        : undefined;
                                      const sequenceAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_sequence').toString('base64')
                                      );
                                      const sequence = sequenceAttr
                                        ? Buffer.from(sequenceAttr.value, 'base64').toString()
                                        : undefined;
                                      const timeoutHeightAttr = attributes.find(
                                        (attr) => attr.key === Buffer.from('packet_timeout_height').toString('base64')
                                      );
                                      const timeoutHeight = timeoutHeightAttr
                                        ? Buffer.from(timeoutHeightAttr.value, 'base64').toString()
                                        : undefined;

                                      if (sourceChannel && destChannel && sequence) {
                                      }
                                    }
                                  }
                                }
                              }
                              //			close();
                            },
                          }
                        );
                      }
                    }
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                <Box pad="15px 0" justify="center">
                  <Text textAlign="center" size="large">
                    Transfer
                  </Text>
                </Box>
              </Button>
            )}
          </Box>
        </Box>
      </BaseModal>
    );
  }
);

function pickOne<V1, V2>(v1: V1, v2: V2, first: boolean): V1 | V2 {
  return first ? v1 : v2;
}
