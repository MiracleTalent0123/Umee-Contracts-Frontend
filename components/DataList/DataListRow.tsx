import { Box, BoxProps, Grid, GridProps, GridSizeType, ResponsiveContext } from 'grommet';
import React, { MouseEventHandler, useContext } from 'react';
import { Theme, useTheme } from 'lib/hooks/theme/context';
import { useHistory } from 'react-router-dom';
import './DataListRow.css';

export interface DataListRowProps {
  columnSizes: GridSizeType[];
  children?: any;
  linkUrl?: string;
  rowColor?: string;
  tokenAddress?: string;
  select?(): void;
  align?: GridProps['align'];
  onClick?: MouseEventHandler;
}

/**
 * @todo ADK: Abstract out the "marketDetails" to something more broad fitting.
 * @param param0
 * @returns
 */
const DataListRow = ({ children, columnSizes, rowColor, linkUrl, select, tokenAddress, align }: DataListRowProps) => {
  const size = useContext(ResponsiveContext);
  const history = useHistory();
  const handleClick = (e: any) => {
    e.preventDefault();
    if (!!linkUrl) {
      history.push(linkUrl);
    } else if (!!select) {
      select();
    }
  };

  const props: BoxProps = {
    direction: 'row',
    pad: { vertical: size === 'small' ? 'medium' : 'small' },
    align: 'center',
    justify: 'start',
    fill: 'horizontal',
    round: '0px',
  };

  if (!!linkUrl || !!select) {
    props.onClick = handleClick;
  }

  const { themeMode } = useTheme();

  return (
    <div className={`row-container ${themeMode === Theme.dark ? 'row-container-dark' : null}`}>
      <Box border={{ side: 'bottom', color: 'clrBorderGrey', size: '1px' }} {...props} focusIndicator={false}>
        {rowColor && <Box border={{ color: rowColor, side: 'left', size: '3px' }} height="2rem" />}
        <Grid
          className="row-content"
          columns={columnSizes}
          gap="small"
          fill="horizontal"
          align={align ? align : 'center'}
        >
          {children}
        </Grid>
      </Box>
    </div>
  );
};

export default DataListRow;
