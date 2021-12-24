import { AppCurrency, Currency, IBCCurrency } from '@keplr-wallet/types';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { IBCAssetInfos } from '../config';
import { TransferDialog } from '../dialogs/Transfer';
import { useStore } from '../api/cosmosStores';
import { makeIBCMinimalDenom } from '../utils/ibc';
import { ButtonItem } from 'components';

export const AssetBalancesList = observer(function AssetBalancesList() {
  const { chainStore, queriesStore, accountStore } = useStore();

  const account = accountStore.getAccount(chainStore.current.chainId);
  const queries = queriesStore.get(chainStore.current.chainId);

  const ibcBalances = IBCAssetInfos.map(channelInfo => {
    const chainInfo = chainStore.getChain(channelInfo.counterpartyChainId);
    const counterpartyAccount = accountStore.getAccount(channelInfo.counterpartyChainId);

    const currency = chainStore.current.currencies.find(
      cur => cur.coinMinimalDenom === channelInfo.coinMinimalDenom
    ) as Currency;

    const counterpartyCurrency = chainInfo.currencies.find(
      cur => cur.coinMinimalDenom === channelInfo.counterpartyCoinMinimalDenom
    ) as Currency;

    if (!currency) {
      throw new Error(`Unknown currency ${channelInfo.coinMinimalDenom} for ${chainStore.current.chainId}`);
    }

    if (!counterpartyCurrency) {
      throw new Error(`Unknown currency ${channelInfo.counterpartyCoinMinimalDenom} for ${channelInfo.counterpartyChainId}`);
    }

    const balance = queries.queryBalances.getQueryBech32Address(account.bech32Address).getBalanceFromCurrency(currency);

    const counterpartyBalance = queries.queryBalances.getQueryBech32Address(counterpartyAccount.bech32Address).getBalanceFromCurrency({
      ...counterpartyCurrency,
      paths: [
        {
          portId: 'transfer',
          channelId: channelInfo.sourceChannelId,
        },
      ],
      originChainId: chainInfo.chainId,
    });

    return {
      chainInfo: chainInfo,
      balance,
      counterpartyBalance,
      sourceChannelId: channelInfo.sourceChannelId,
      destChannelId: channelInfo.destChannelId,
    };
  });

  const [dialogState, setDialogState] = React.useState<
    | {
        open: true;
        currency: IBCCurrency;
        counterpartyCurrency: IBCCurrency;
        counterpartyChainId: string;
        sourceChannelId: string;
        destChannelId: string;
      }
    | {
        open: false;
      }
  >({ open: false });

  const close = () => setDialogState(v => ({ ...v, open: false }));

  return (
    <React.Fragment>
      {dialogState.open ? (
        <TransferDialog
          onClose={close}
          currency={dialogState.currency}
          counterpartyCurrency={dialogState.counterpartyCurrency}
          counterpartyChainId={dialogState.counterpartyChainId}
          sourceChannelId={dialogState.sourceChannelId}
          destChannelId={dialogState.destChannelId}
          isMobileView={false}
        />
        
      ) : null}
      {/* {chainStore.current.currencies
        .filter(cur => !cur.coinMinimalDenom.includes('/'))
        .map(cur => {
          const bal = queries.queryBalances
            .getQueryBech32Address(account.bech32Address)
            .getBalanceFromCurrency(cur);
        })} */}
      {ibcBalances.map(bal => {
        const currency = bal.balance.currency
        const counterpartyCurrency = bal.counterpartyBalance.currency

        return (
          <AssetBalanceRow
            key={currency.coinMinimalDenom}
            chainName={bal.chainInfo.chainName}
            coinDenom={currency.coinDenom}
            currency={currency}
            balance={bal.balance
              .hideDenom(true)
              .trim(true)
              .maxDecimals(6)
              .toString()}
            onDeposit={() => {
              setDialogState({
                open: true,
                counterpartyChainId: bal.chainInfo.chainId,
                currency: currency as IBCCurrency,
                counterpartyCurrency: counterpartyCurrency as IBCCurrency,
                sourceChannelId: bal.sourceChannelId,
                destChannelId: bal.destChannelId,
              });
            }}
            isMobileView={false}
          />
        );
      })}
    </React.Fragment>
  );
});

interface AssetBalanceRowProps {
  chainName: string;
  coinDenom: string;
  currency: AppCurrency;
  balance: string;
  onDeposit?: () => void;
  onWithdraw?: () => void;
  showComingSoon?: boolean;
  isMobileView: boolean;
}

function AssetBalanceRow({
  chainName,
  coinDenom,
  currency,
  balance,
  onDeposit,
  onWithdraw,
  showComingSoon,
  isMobileView,
}: AssetBalanceRowProps) {
  return (
    <>
      <ButtonItem
        onClick={onDeposit}
        textColor="white"
        background="#131A33"
        textSize="small"
        round="5px"
      >
        IBC
      </ButtonItem>
    </>
  );
}
