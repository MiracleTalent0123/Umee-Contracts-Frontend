import { useEffect, useState } from 'react';
import { compareObjectsByKey } from './utils';
import { SortDirection, ItemKey, SortOption } from './types';
import { IDataListColumn } from 'components/DataList/DataList';

export interface SortProps<T> {
  data: T[];
  sortOptions: IDataListColumn[];
  defaultDirection?: SortDirection;
}

export function useSort<T>({ data, sortOptions, defaultDirection }: SortProps<T>) {
  const [sortDirection, setSortDirection] = useState<SortDirection | undefined>(defaultDirection);
  const initialSortKey = sortOptions[0].sortLabel as ItemKey<T>;
  const [sortKey, setSortKey] = useState<ItemKey<T>>(initialSortKey);
  const [sortedData, setSortedData] = useState<T[]>([]);

  useEffect(() => {
    const dataArr = [...data];
    if (dataArr?.length) {
      if (sortDirection) {
        dataArr.sort(compareObjectsByKey(sortKey, sortDirection === 'asc'));

        setSortedData(dataArr);
      } else setSortedData(data);
    }
  }, [data, sortDirection, sortKey]);

  const handleSortChange = (selectedOption: SortOption<T> | null) => {
    const newSortKey = selectedOption?.sortLabel;
    if (newSortKey) {
      if (sortKey !== newSortKey) {
        setSortKey(newSortKey);
        setSortDirection('asc');
      } else setSortDirection(!sortDirection ? 'asc' : sortDirection === 'asc' ? 'desc' : 'asc');
    }
  };

  return {
    handleSortChange,
    sortDirection,
    sortKey,
    sortedData,
  };
}
