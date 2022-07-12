import InfoTooltip from 'components/common/InfoTooltip/InfoTooltip';
import { Box, Grid, Text } from 'grommet';
import { ItemKey, SortDirection } from 'lib/hooks/sort/types';
import * as React from 'react';
import { IDataListColumn } from './DataList';
import { CaretDownFill, CaretUpFill } from 'grommet-icons';

export interface DataListHeaderProps<T> {
  columns: IDataListColumn[];
  sortKey?: ItemKey<T>;
  sortDirection?: SortDirection;
  handleSortChange?: (sort: string) => void;
}

function Column<T>({
  column,
  sortKey,
  sortDirection,
}: {
  column: IDataListColumn;
  sortKey?: ItemKey<T>;
  sortDirection?: SortDirection;
}) {
  return (
    <>
      <Text size="xsmall" style={{ letterSpacing: '0.1em' }} color="clrTextAndDataListHeader">
        {column.title}
      </Text>
      {column.sortable && sortKey && (
        <Box margin={{ left: 'xsmall' }}>
          {sortKey == column.sortLabel ? (
            sortDirection === 'asc' || !sortDirection ? (
              <CaretUpFill color={!sortDirection ? 'clrButtonBorderGrey' : 'clrTextAndDataListHeader'} />
            ) : (
              <CaretDownFill color="clrTextAndDataListHeader" />
            )
          ) : (
            <CaretUpFill color="clrButtonBorderGrey" />
          )}
        </Box>
      )}
    </>
  );
}

function DataListHeader<T>({ columns, sortKey, sortDirection, handleSortChange }: DataListHeaderProps<T>) {
  const columnSizes = columns.map((col) => col.size);

  return (
    <Box
      direction="row"
      border={{ side: 'bottom', size: '1px', color: 'clrTextAndDataListHeader' }}
      align="center"
      justify="start"
      fill="horizontal"
    >
      <Grid columns={columnSizes} gap="small" fill="horizontal">
        {columns.map((column, i) => (
          <Box key={`column-${i}`} direction="row" align="center" justify={column.jusitfy || 'start'}>
            <Box
              pad={{ vertical: 'small' }}
              onClick={() =>
                column.sortable && handleSortChange && column.sortLabel ? handleSortChange(column.sortLabel) : null
              }
              direction="row"
              align="center"
            >
              {column.tooltip ? (
                <InfoTooltip content={column.tooltip}>
                  <Column {...{ column, sortKey, sortDirection }} />
                </InfoTooltip>
              ) : (
                <Column {...{ column, sortKey, sortDirection }} />
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default DataListHeader;
