import 'regenerator-runtime/runtime'
import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'
import { Box, grommet, Grommet, ResponsiveContext } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import bcrypt from 'bcryptjs'
import grommetTheme from 'lib/theme'
import '../styles/globals.css'
import { DataProvider } from 'api/data'
import { Web3Provider } from 'api/web3'
import { ErrorFallback } from './ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SideNav } from 'components/NavBar/SideNav'

import Borrow from 'pages/borrow'
import Dashboard from 'pages/dashboard'
import Deposit from 'pages/deposit'
import Markets from 'pages/markets'
import Vote from 'pages/vote'
import Stake from 'pages/Stake'

import { BetaAuthModal } from 'components/BetaAuth'
import { StoreProvider } from '../api/cosmosStores'
import AccountConnectionProvider from '../lib/hooks/account/context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Theme, useTheme, ThemeProvider } from 'lib/hooks/theme/context'
import { ChainProvider } from 'lib/hooks/chain/context'
import ConvexityProvider from 'api/convexity/data'
import StakeProvider from 'api/stake/data'
import { GetKeplrProvider } from 'lib/hooks/useKeplr/context'

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID ?? '',
}

TagManager.initialize(tagManagerArgs)

function Body() {
  const size = useContext(ResponsiveContext)

  return (
    <Router>
      <SideNav />
      <Box
        background="clrBackground"
        className="markets-container"
        direction="row"
        justify="center"
        overflow="hidden"
        margin={{ left: size === 'small' || size === 'medium' ? '' : '106px' }}
      >
        <Box className="content">
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
            <Route path="/governance">
              <Vote />
            </Route>
            <Route path="/stake">
              <Stake />
            </Route>
            <Redirect from="/" to="/markets" />
          </Switch>
        </Box>
      </Box>
    </Router>
  )
}

function Auth() {
  const [success, setSuccess] = useState<boolean>(false)

  const valid = (password: string) => {
    setSuccess(true)
    localStorage.setItem('password', password)
  }

  useEffect(() => {
    if (!process.env.BETA_TESTING_PASSWORD_HASH) {
      setSuccess(true)
      return
    }

    const password = localStorage.getItem('password')
    if (!password) {
      setSuccess(false)
      return
    }

    const validPassword = bcrypt.compareSync(password, process.env.BETA_TESTING_PASSWORD_HASH)
    setSuccess(validPassword)
  }, [])

  if (!success && process.env.BETA_TESTING_PASSWORD_HASH !== undefined) {
    return <BetaAuthModal valid={valid} passwordHash={process.env.BETA_TESTING_PASSWORD_HASH} />
  }

  return <Body />
}

const queryClient = new QueryClient()

const theme = deepMerge(grommet, grommetTheme)

function GrommetTheme() {
  const { themeMode } = useTheme()

  return (
    <Grommet full theme={theme} themeMode={themeMode === Theme.light ? 'light' : 'dark'}>
      <GetKeplrProvider>
        <StoreProvider>
          <AccountConnectionProvider>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Web3Provider>
                <DataProvider>
                  <ConvexityProvider>
                    <StakeProvider>
                      <ChainProvider>
                        <Auth />
                        <ToastContainer
                          toastClassName={themeMode === Theme.light ? 'toast-container' : 'toast-container-dark'}
                        />
                      </ChainProvider>
                    </StakeProvider>
                  </ConvexityProvider>
                </DataProvider>
              </Web3Provider>
            </ErrorBoundary>
          </AccountConnectionProvider>
        </StoreProvider>
      </GetKeplrProvider>
    </Grommet>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GrommetTheme />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
