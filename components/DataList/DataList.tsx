import { Box, BoxProps, GridSizeType, ResponsiveContext } from 'grommet'
import { ItemKey, SortDirection } from 'lib/hooks/sort/types'
import * as React from 'react'
import { DataListBody, DataListHeader } from '.'
import { DataListHeaderProps } from './DataListHeader'

export interface IDataListColumn {
  title: string;
  size: GridSizeType;
  display?: boolean;
  tooltip?: string;
  jusitfy?: BoxProps['justify'];
  sortable?: boolean;
  sortLabel?: string;
  number?: boolean;
}

export interface DataListProps<T> {
  background?: BoxProps['background'];
  children?: any[];
  columns: IDataListColumn[];
  sortKey?: ItemKey<T>;
  sortDirection?: SortDirection;
  handleSortChange?: (sort: string) => void;
}

function DataList<T>({ background, children, columns, sortKey, sortDirection, handleSortChange }: DataListProps<T>) {
  const size = React.useContext(ResponsiveContext)

  if (size === 'small') {
    return (
      <Box>
        <DataListBody>{children}</DataListBody>
      </Box>
    )
  }

  return (
    <Box align="center" round="8px" fill="horizontal">
      <DataListHeader {...({ columns, sortKey, sortDirection, handleSortChange } as DataListHeaderProps<T>)} />
      <DataListBody>{children}</DataListBody>
    </Box>
  )
}

export default DataList
