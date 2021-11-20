import { Box, Grid, Text } from 'grommet';
import * as React from 'react';
import { IDataListColumn } from './DataList';

export interface DataListHeaderProps {
  columns: IDataListColumn[];
}

const DataListHeader = ({ columns }: DataListHeaderProps) => {
  const columnSizes = columns.map((col) => col.size);
  return (
    <Box direction="row" pad={{ vertical: 'small', left: '3px' }} align="center" justify="start" fill="horizontal">
      <Grid columns={columnSizes} pad={{ horizontal: 'small' }} gap="small" fill="horizontal">
        {columns.map((column, i) => (
          <Box key={`column-${i}`} align={i === 0 ? 'start' : 'center'}>
            <Text size="small" weight={i === 0 ? 'bold' : 'normal'}>
              {column.title}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DataListHeader;
