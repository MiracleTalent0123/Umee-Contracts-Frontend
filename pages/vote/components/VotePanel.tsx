import { Box, Text } from 'grommet'
import React from 'react'

interface VotePenalProps {
  color: string;
  title: string;
  value: string;
}

const VotePanel: React.FC<VotePenalProps> = ({ color, title, value }) => {
  return (
    <Box round="5px" border={{ size: '1px', color: color }} pad="small" flex>
      <Text color="clrTextAndDataListHeader" weight={'bold'} size="xsmall">
        {title}
      </Text>
      <Text margin={{ top: 'xsmall' }} color="clrTextAndDataListHeader" size="small">
        {(value)}%
      </Text>
    </Box>
  )
}

export default VotePanel
