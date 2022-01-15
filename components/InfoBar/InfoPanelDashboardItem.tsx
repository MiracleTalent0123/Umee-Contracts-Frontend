import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Link } from 'react-router-dom';

export interface infoPanelDashboardProps {
  value: string;
  icon?: any;
  link: string;
}

const InfoPanelDashboardItem = ({ value, icon, link }: infoPanelDashboardProps) => {
  return (
    <Box width="100%">
      <Text size="large" weight="bold">
        ${value}
      </Text>
      <Box width="100%" margin={{ top: 'large' }} direction="row" justify="end">
        <Link to={link}>
          <Box pad="xsmall" background="#E1F0FF" round>
            <Image width="30px" src={icon} alt="icon" />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default InfoPanelDashboardItem;
