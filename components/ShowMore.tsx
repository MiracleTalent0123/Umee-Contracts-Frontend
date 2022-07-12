import React from 'react';
import { Box, Text, Image } from 'grommet';
import ShowMoreIcon from '../public/images/show-more.svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface ShowMoreProps {
  onClick: () => void;
  isShow: boolean;
}

const ShowMoreAnimation = keyframes`
  0% {padding-top: 15px}
  40% {padding-top: 22px}
  80% {padding-top: 15px}
  100% {padding-top: 15px}
`;

const ShowMoreButton = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${ShowMoreAnimation} 1.5s ease-in infinite;
`;

const ShowMore: React.FC<ShowMoreProps> = ({ onClick, isShow }) => {
  return isShow ? (
    <Box align="center">
      <Box onClick={() => onClick()} style={{ position: 'relative' }}>
        <Text size="small" color="clrTextAndDataListHeader">
          Show More
        </Text>
        <ShowMoreButton>
          <Image margin={{ top: 'xsmall' }} width="100px" src={ShowMoreIcon} alt="show more" />
        </ShowMoreButton>
      </Box>
    </Box>
  ) : null;
};

export default ShowMore;
