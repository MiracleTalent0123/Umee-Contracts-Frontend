import React, { useContext } from 'react';
import { Box, Image, ResponsiveContext, Text } from 'grommet';

interface TransferStatusProps {
  image: any;
  label: string;
}

const TransferStatus: React.FC<TransferStatusProps> = ({ image, label }) => {
  const size = useContext(ResponsiveContext);

  return (
    <Box direction="row" align="center">
      <Image width={size === 'medium' || size === 'small' ? '12px' : '20px'} src={image} alt="transfer status" />
      <Text
        color="clrTextAndDataListHeader"
        size={size === 'medium' || size === 'small' ? 'xsmall' : 'small'}
        margin={{ left: 'xsmall' }}
      >
        {label}
      </Text>
    </Box>
  );
};

export default TransferStatus;
