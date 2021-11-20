import { Box, BoxProps, GridSizeType } from 'grommet';
import * as React from 'react';
import { DataListBody, DataListHeader } from '.';
export interface IDataListColumn {
  title: string;
  size: GridSizeType;
}

export interface DataListProps {
  background?: BoxProps['background'];
  children?: any[];
  columns: IDataListColumn[];
}

const DataList = ({ background, children, columns }: DataListProps) => {
  return (
    <Box height="100%" align="center" background='white' fill="horizontal">
      <DataListHeader columns={columns} />
      <DataListBody>{children}</DataListBody>
    </Box>
  );
};

export default DataList;
