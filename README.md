# umee-v1-client

Front end repo for the Umee contracts

## Setup

## MetaMask

This runs on the Rinkeby testnet: [ETH Faucet](http://rinkeby-faucet.com/) or [Other ETH faucet](https://app.mycrypto.com/faucet)

See [this guide](https://teller.gitbook.io/teller-1/testing-guide/getting-testnet-tokens-rinkeby) for getting USDC and DAI tokens.

### Environment

You need a `.env.local` file with the contents shown in `.env.example`.

## How to run

### Development
New DATA_PROVIDER_ADDRESS is the 
New LENDING_POOL_ADDRESS is the 

**Make sure you're connected to Rinkeby Testnet**

1. `nvm use`
2. `npm i`
3. `npm run dev`

## Error notes:
If you add a new chain with new chain id and addresses, you may run into an error about an unknown usd value. This is because we use coingecko to pull the usd prices of all the assets and sometimes the token symbols are not the same on the new chain as they are on mainnet. 

For example: Goerli uses the symbol 'uatom' for the mainnet symbol 'ATOM'. So you must change the 'uatom' name in the 'assets' object to match the mainnet 'ATOM' 
**See api/data/assetdata.ts lines 25-48 for two examples. There are comments on where and how to add more exceptions**

