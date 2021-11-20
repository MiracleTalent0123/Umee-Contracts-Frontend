import { Box, Main } from 'grommet';
import React from 'react';
import { InfoBar } from 'components';
import { MainPageTextTitle } from './MainPageTextTitle';

type MainPageProps = {
  title: string | JSX.Element;
};

export const MainPageContainer: React.FC<MainPageProps> = ({ title, children }) => {
  return (
    <Box background="clrHeaderBg">
      <InfoBar>{typeof title === 'string' ? <MainPageTextTitle title={title} /> : title}</InfoBar>
      <Main background="clrDefaultBg" pad={{ horizontal: 'large', vertical: 'small' }} gap="small">
        {children}
      </Main>
    </Box>
  );
};
