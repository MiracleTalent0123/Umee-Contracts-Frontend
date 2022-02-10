import { Box, Grid, Text } from 'grommet';
import * as React from 'react';
import { IDataListColumn } from './DataList';

export interface DataListHeaderProps {
  columns: IDataListColumn[];
}

const DataListHeader = ({ columns }: DataListHeaderProps) => {
  const columnSizes = columns.map((col) => col.size);
  return (
    <Box
      direction="row"
      border={{ side: 'bottom', size: '1px', color: '#16183C' }}
      pad={{ vertical: 'small' }}
      align="center"
      justify="start"
      fill="horizontal"
    >
      <Grid columns={columnSizes} gap="small" fill="horizontal">
        {columns.map((column, i) => (
          <Box key={`column-${i}`}>
            <Text size="xsmall" style={{ letterSpacing: '0.1em' }}>
              {column.title}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DataListHeader;
