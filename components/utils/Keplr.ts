import { assertIsBroadcastTxSuccess, SigningStargateClient } from "@cosmjs/stargate";

// import { MsgDelegate } from "@cosmjs/launchpad";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Registry } from "@cosmjs/proto-signing";
import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgVote } from 'cosmjs-types/cosmos/gov/v1beta1/tx';
import { MsgSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx';
import { MsgDeposit } from 'cosmjs-types/cosmos/gov/v1beta1/tx';
import { MsgWithdrawDelegatorReward, MsgSetWithdrawAddress } from 'cosmjs-types/cosmos/distribution/v1beta1/tx'

declare const window: any

// TODO: Move inside .env files
export const chainConfig = {
  id: process.env.LOCAL_CHAIN_ID,
  rpc: process.env.LOCAL_PROVIDER_URL + '/rpc/',
  lcd: process.env.LOCAL_PROVIDER_URL + '/rest',
};

export const checkExtensionAndBrowser = (): boolean => {
  if (typeof window !== `undefined`) {
    if (
      window.getOfflineSigner &&
      window.keplr
    ) {
      return true;
    } else {
      console.log("Keplr undefined", window);
    }
  } else {
    console.log("Window is undefined :|", window);
  }
  return false;
};

export const initStargateClient = async (offlineSigner): Promise<SigningStargateClient> => {
  // Initialize the cosmic casino api with the offline signer that is injected by Keplr extension.
  const registry = new Registry();

  registry.register("/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate);
  registry.register("/cosmos.gov.v1beta1.MsgVote", MsgVote);
  registry.register("/cosmos.bank.v1beta1.MsgSend", MsgSend);
  registry.register("/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit);
  registry.register("/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward);
  registry.register("/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress);
  
  const options = { registry: registry };

  const cosmJS: SigningStargateClient = await SigningStargateClient.connectWithSigner(
    chainConfig.rpc,
    offlineSigner,
    options
  );

  return cosmJS;
};

export const connectKeplr = async () => {
  if (!checkExtensionAndBrowser()) {
    return [null, null]
  }

  // Suggest chain if we don't have

  // Enable chain
  await window.keplr.enable(chainConfig.id);

  // Setup signer
  const offlineSigner = window.getOfflineSigner(chainConfig.id);
  const accounts = await offlineSigner.getAccounts(); // only one account currently supported by keplr

  return [accounts, offlineSigner];
};

export const sendTransaction = async (client, delegatorAddress, payload) => {
  try {
    const signed = await client.sign(delegatorAddress, [payload.msgAny], payload.fee, payload.memo);
    const result = await client.broadcastTx(Uint8Array.from(TxRaw.encode(signed).finish()));
    assertIsBroadcastTxSuccess(result);
    return result;
  } catch (e) {
    console.log('sendTransaction', e);
    throw e;
  }
}

export const getKeplr = async() => {
  if (window.keplr) {
      return window.keplr;
  }

  if (document.readyState === "complete") {
      return window.keplr;
  }

  return new Promise((resolve) => {
    const documentStateChange = (event: Event) => {
      if (
          event.target &&
          (event.target as Document).readyState === "complete"
      ) {
          resolve(window.keplr);
          document.removeEventListener("readystatechange", documentStateChange);
      }
    };

    document.addEventListener("readystatechange", documentStateChange);
  });
}

window.addEventListener("keplr_keystorechange", () => {
  console.log("Key store in Keplr is changed. You may need to refetch the account info.")
})