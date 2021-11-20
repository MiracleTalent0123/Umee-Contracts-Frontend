import * as React from 'react';
import RepayOverview, { RepayOverviewProps } from '../RepayOverview';

/** ADK: I'm purposely creating this level of indirection so that the code is more readable and searchable. */
const RepayOverviewWallet = (props: React.PropsWithChildren<RepayOverviewProps>) => {
  return <RepayOverview {...props} />;
};

export default RepayOverviewWallet;
