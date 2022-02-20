import 'regenerator-runtime/runtime';
import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Dashboard from 'pages/dashboard';
import Deposit from 'pages/deposit';
import Markets from 'pages/markets';
import { BetaAuthModal } from 'components/BetaAuth';
import { StoreProvider } from '../api/cosmosStores';
import { AccountConnectionProvider } from '../lib/hooks/account/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import NavBarOpen from 'components/NavBar/NavBarOpen';

function Body() {
  const size = useContext(ResponsiveContext);

  return (
    <>
      <AccountConnectionProvider>
        <Router>
          <SideNav />
          <Box
            className="markets-container"
            direction="row"
            justify="center"
            pad={{
              top: 'medium',
              horizontal: size === 'small' || size === 'medium' || size === 'large' ? 'medium' : 'large',
            }}
            overflow="hidden"
            margin={{ left: size === 'small' || size === 'medium' ? '' : '106px' }}
          >
            <Box className="content" style={{ position: 'relative' }}>
              <Box style={{ position: 'absolute', right: 0, zIndex: 10 }}>
                {size === 'small' || size === 'medium' ? <NavBarOpen /> : <ConnectWalletButton />}
              </Box>
              <Switch>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/borrow">
                  <Borrow />
                </Route>
                <Route path="/supply">
                  <Deposit />
                </Route>
                <Route path="/markets">
                  <Markets />
                </Route>
                <Redirect from="/" to="/markets" />
              </Switch>
            </Box>
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

  return <Body />;
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
