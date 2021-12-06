import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Box, Grommet } from 'grommet';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import bcrypt from 'bcryptjs';

import theme from 'lib/theme';
import '../styles/globals.css';
import { DataProvider } from 'api/data';
import { Web3Provider } from 'api/web3';
import { ErrorFallback } from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SideNav } from 'components/NavBar/SideNav';

import Borrow from 'pages/borrow';

import Deposit from 'pages/deposit';
import Markets from 'pages/markets';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { BetaAuthModal } from 'components/BetaAuth';
import { StoreProvider } from '../api/cosmosStores';
import { AccountConnectionProvider } from '../lib/hooks/account/context';
import { QueryClient, QueryClientProvider } from 'react-query';

function Body() {
  return (
    <>
      <AccountConnectionProvider>
        <Box style={{position: 'absolute', right: '0'}} direction="column" margin={{ left: 'small', vertical: '25px', right: '25px' }} gap="small">
          <ConnectWalletButton />
        </Box>
        <Router>
          <SideNav />
          <Box margin={{top: 'xlarge'}} pad={{bottom: 'xlarge'}}>
            <Switch>
              <Route path="/borrow"><Borrow /></Route>
              <Route path="/deposit"><Deposit /></Route>
              <Route path="/markets"><Markets /></Route>
              <Route path="/"><Markets /> </Route>
            </Switch>
          </Box>
        </Router>
      </AccountConnectionProvider>
    </>
  );
}

function Auth() {
  const [success, setSuccess] = useState<boolean>(false);
  
  const valid = (password: string) => {
    setSuccess(true);
    localStorage.setItem('password', password);
  };

  useEffect(() => {
    if (!process.env.BETA_TESTING_PASSWORD_HASH) {
      setSuccess(true);
      return;
    }

    const password = localStorage.getItem('password');
    if (!password) {
      setSuccess(false);
      return;
    }

    const validPassword = bcrypt.compareSync(password, process.env.BETA_TESTING_PASSWORD_HASH);
    setSuccess(validPassword);
  }, []);

  if (!success && process.env.BETA_TESTING_PASSWORD_HASH !== undefined) {
    return <BetaAuthModal valid={valid} passwordHash={process.env.BETA_TESTING_PASSWORD_HASH} />;
  }

  return (
    <Body />
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <AccountConnectionProvider>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Web3Provider>
              <DataProvider>
                <Grommet theme={theme}>
                  <Auth />
                  <ToastContainer />
                </Grommet>
              </DataProvider>
            </Web3Provider>
          </ErrorBoundary>
        </AccountConnectionProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
