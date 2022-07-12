import React, { useCallback, useState } from 'react'
import { Validator } from 'api/stake/data'
import { IDataListColumn } from 'components/DataList/DataList'
import { DataList, DataListRow, PrimaryText, TextItem } from 'components/DataList'
import ValidatorLogo from './ValidatorLogo'
import { usePaginate } from 'lib/hooks/usePaginate'
import { Box } from 'grommet'
import ShowMore from 'components/ShowMore'
import { useStake } from 'api/stake'
import { useSort } from 'lib/hooks/sort/useSort'
import { SortOption } from 'lib/hooks/sort/types'
import { SecondaryBtn } from 'components/common'
import Delegate from './Modals/Delegate'

interface ValidatorListProps {
  activeColumns: IDataListColumn[];
  activeValidators: Validator[];
}

const ValidatorList: React.FC<ValidatorListProps> = ({ activeColumns, activeValidators }) => {
  const [isOpenDelegate, setIsOpenDelegate] = useState<boolean>(false)
  const [selectedValidator, setSelectedValidator] = useState<Validator>()

  const columnSizes = activeColumns.map((col) => col.size)
  const { isShowMore, filter, goToNext } = usePaginate(activeValidators.length, 10, 1)
  const { sortedData, sortDirection, sortKey, handleSortChange } = useSort({
    data: activeValidators,
    sortOptions: activeColumns,
  })
  const { TotalBonded } = useStake()

  const voting_power = useCallback(
    (tokens) => {
      return TotalBonded.toNumber() > 0 ? (tokens / TotalBonded.toNumber()) * 100 : 0
    },
    [TotalBonded]
  )

  return (
    <Box>
      {isOpenDelegate && selectedValidator && (
        <Delegate
          validator={selectedValidator}
          onClose={() => {
            setIsOpenDelegate(false)
          }}
        />
      )}

      {sortedData.length > 0 && (
        <DataList<Validator>
          columns={activeColumns}
          sortDirection={sortDirection}
          sortKey={sortKey}
          handleSortChange={(sort: string) => handleSortChange({ sortLabel: sort } as SortOption<Validator>)}
        >
          {sortedData.map(
            (validator, index) =>
              filter(index) && (
                <DataListRow key={index} columnSizes={columnSizes}>
                  <TextItem justify="start">
                    <ValidatorLogo title={validator.moniker} imgUrl={validator.img_url} />
                  </TextItem>
                  <TextItem justify="end"></TextItem>
                  <TextItem justify="end">
                    <PrimaryText color="clrTextAndDataListHeader" size="small">
                      {voting_power(validator.tokens).toFixed(2)}%
                    </PrimaryText>
                  </TextItem>
                  <TextItem justify="center">
                    <SecondaryBtn
                      text="DELEGATE"
                      round="large"
                      pad={{ vertical: 'small', horizontal: 'small' }}
                      textSize="xsmall"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsOpenDelegate(true)
                        setSelectedValidator(validator)
                      }}
                    />
                  </TextItem>
                </DataListRow>
              )
          )}
        </DataList>
      )}
      <Box margin={{ top: 'large' }}>
        <ShowMore isShow={isShowMore} onClick={() => goToNext()} />
      </Box>
    </Box>
  )
}

export default ValidatorList
