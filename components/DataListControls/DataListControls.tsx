import React from 'react';
import { useEffect, useState } from 'react';
import { Box, TextInput } from 'grommet';
import { ToggleSwitch } from 'components';
import * as Icons from 'grommet-icons';
import { stableFilter, searchFilter } from 'lib/filter-utils';

interface IDataListControlsProps {
  setFilteredData: (arr: any[]) => void;
  fullDataList: any[];
}
export const DataListControls = ({ setFilteredData, fullDataList }: IDataListControlsProps) => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayStable, setDisplayStable] = useState<boolean>(false);

  useEffect(() => {
    if (displayStable) {
      setFilteredData(stableFilter(fullDataList));
    } else {
      setFilteredData(fullDataList);
    }
  }, [fullDataList, displayStable, setFilteredData]);

  useEffect(() => {
    if (displayStable) {
      setFilteredData(searchFilter(searchTerm, stableFilter(fullDataList)));
    } else {
      setFilteredData(searchFilter(searchTerm, fullDataList));
    }
  }, [searchTerm, fullDataList, displayStable, setFilteredData]);

  return (
    <Box direction="row" fill="horizontal" justify="center">
      <ToggleSwitch choiceA="All" choiceB="Stablecoins" defaultSelected="All" handler={(choice) => setDisplayStable(choice === 'Stablecoins')} />
    </Box>
  );
};