import styled from '@emotion/styled'
import { Text } from 'grommet'
import abbreviateNumber from 'lib/abbreviate'
import React from 'react'
import { TallyResult, VoteResultColor } from 'api/stake/data'

interface VoteChartProps {
  turnout: string;
  tally: TallyResult[];
  totalVoted: string;
  totalBonded: string;
}

const Container = styled.div`
  width: 100%;
  height: 8px;
  background: #464869;
  position: relative;
`

const ChartValue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
`

const Chart = styled.div`
  height: 100%;
`

const VoteChart: React.FC<VoteChartProps> = ({ turnout, tally, totalVoted, totalBonded }) => {
  return (
    <>
      <Container>
        <ChartValue style={{ width: `${turnout}%` }}>
          {tally.map((result, index) => (
            <Chart key={index} style={{ background: VoteResultColor[result.label], width: `${result.value}%` }} />
          ))}
        </ChartValue>
      </Container>
      <Text margin={{ top: 'xsmall' }} size="xsmall" color="clrTextAndDataListHeader">
        Voted: {abbreviateNumber(totalVoted)} / {abbreviateNumber(totalBonded)}
      </Text>
    </>
  )
}

export default VoteChart
