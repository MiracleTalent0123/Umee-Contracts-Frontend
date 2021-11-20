import * as React from 'react';
import TxnOverviewContainer, { TxnOverviewContainerProps } from 'components/Transactions/TxnOverview/TxnOverviewContainer';
import {ETxnType} from 'lib/types';

/** ADK: I'm purposely creating this level of indirection so that the code is more readable and searchable. */
const BorrowOverview = (props: React.PropsWithChildren<TxnOverviewContainerProps>) => {
  return <TxnOverviewContainer {...props} txnType={ETxnType.borrow} />;
};

export default BorrowOverview;