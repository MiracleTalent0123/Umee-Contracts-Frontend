import React from 'react';
import styled from '@emotion/styled';
import { Box, Text } from 'grommet';
import { Theme, useTheme } from 'lib/hooks/theme/context';

interface InfoTooltipProps {
  content: string;
  children: React.ReactNode;
}

const ToolTipContent = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  line-height: 0;

  &:hover .tooltip {
    opacity: 1;
    z-index: 1000;
    bottom: 100%;
  }
`;

const ToolipContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 20px);
  transform: translateX(-50%);
  transition: 0.3s;
  opacity: 0;
  z-index: -1;
  padding-bottom: 10px;
`;

const Tooltip = styled(Box)`
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px;
  border-radius: 6px;
  font-size: 12px;
  padding: 16px 18px;
  width: 250px;
`;

const TooltipArrow = styled.div<{ darkMode?: boolean }>`
  width: 20px;
  height: 10px;
  position: absolute;
  top: calc(100% - 10px);
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    ${({ darkMode = false }) => ({ background: darkMode ? 'var(--umee-dark-grey-on-navy)' : 'white' })}
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    top: 0;
    left: 50%;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px;
  }
`;

const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, children }) => {
  const { themeMode } = useTheme();

  return (
    <Box direction="row">
      <ToolTipContent>
        {children}
        <ToolipContainer className="tooltip">
          <Tooltip background={'clrInfoTooltipBackground'} width={{ max: '250px' }}>
            <TooltipArrow darkMode={themeMode === Theme.dark} />
            <Text size="12px" color={'clrTextAndDataListHeader'}>
              {content}
            </Text>
          </Tooltip>
        </ToolipContainer>
      </ToolTipContent>
    </Box>
  );
};

export default InfoTooltip;
