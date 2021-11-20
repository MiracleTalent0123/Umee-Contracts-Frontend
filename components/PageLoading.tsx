import React from 'react';
import { Box, Spinner } from 'grommet';

const PageLoading = () => {
  return(
    <div style={{ position: 'fixed', top: '50%', right: '50%', transform: 'translate(50%, -50%)' }}>
      <Spinner color="clrSpinnerLarge" size="large" />
    </div>
  );
};

export default PageLoading;