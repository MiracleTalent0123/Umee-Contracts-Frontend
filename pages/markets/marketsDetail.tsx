import React from 'react';
import { Box } from 'grommet';
import { BaseModal } from 'components/common/BaseModal';
import ModalHeader from 'components/ModalHeader';
import { ButtonItem } from 'components';
import { Link } from 'react-router-dom';

const MarketsDetail = ({ token, onClose }: { token: any; onClose: (show: boolean) => void }) => {  
  return (
    <BaseModal onClose={onClose}>
      <Box width="350px">
        <ModalHeader
          symbol={token.name}
        />
        <Box margin={{top: 'medium'}}>
          <Link 
            to={{
              pathname: '/deposit',
              state: {tokenAddress: token.address}
            }}
          >
            <Box>
              <ButtonItem
                textColor="white"
                background="#131A33"
                textSize="large"
                round="12px"
                height="60px"
              >
                Deposit
              </ButtonItem>
            </Box>
          </Link>
          <Link 
            to={{
              pathname: '/borrow',
              state: {tokenAddress: token.address}
            }}
          >
            <Box margin={{top: 'medium'}}>
              <ButtonItem
                textColor="white"
                background="#131A33"
                textSize="large"
                round="12px"
                height="60px"
              >
                Borrow
              </ButtonItem>
            </Box>
          </Link>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default MarketsDetail;
