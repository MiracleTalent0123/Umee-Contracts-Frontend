
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from 'components';
import { Box } from 'grommet';

import Borrow from 'pages/borrow';
import BorrowToken from 'pages/borrow/borrowToken';
import Dashboard from 'pages/dashboard/dashboard';

import Deposit from 'pages/deposit';
import DepositToken from 'pages/deposit/depositToken';
import Markets from 'pages/markets';
import WithdrawToken from './withdraw/withdrawToken';
import RepayToken from './repay/repayToken';

const Routes = () => {

  return (
    <Box background='neutral-1' style={{ minHeight: '100vh' }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/borrow/:tokenAddress"><BorrowToken /></Route>
          <Route path="/borrow"><Borrow /></Route>
          {/* <Route path="/deposit/:tokenAddress"><DepositToken /></Route> */}
          <Route path="/deposit"><Deposit /></Route>
          <Route path="/markets"><Markets /></Route>
          <Route path="/withdraw/:tokenAddress"><WithdrawToken /></Route>
          <Route path="/repay/:tokenAddress/:interestRateType"><RepayToken /></Route>
          <Route path="/"><Dashboard /> </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default Routes;