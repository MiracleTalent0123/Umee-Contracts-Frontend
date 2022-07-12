import React, { useContext } from 'react'
import { IDataListColumn } from 'components/DataList/DataList'
import Layout from 'pages/Layout'
import { Chain, useChain } from 'lib/hooks/chain/context'
import Reflection from './reflection'
import Convexity from './convexity'
import { ResponsiveContext, Text } from 'grommet'

const Dashboard = () => {
  const { chainMode } = useChain()
  const size = useContext(ResponsiveContext)

  const depositsColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex' },
    { title: `${chainMode === Chain.cosmos ? 'APR' : 'APY'}`, size: 'xsmall' },
    { title: '', size: 'flex' },
  ]

  const borrowsColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'BORROWED', size: 'flex' },
    { title: `${chainMode === Chain.cosmos ? 'APR' : 'APY'}`, size: 'xsmall' },
    { title: '', size: 'flex' },
  ]

  const depositsMobileColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'SUPPLIED', size: 'flex' },
    { title: '', size: 'flex' },
  ]

  const borrowsMobileColumns: IDataListColumn[] = [
    { title: 'ASSETS', size: 'flex' },
    { title: 'BORROWED', size: 'flex' },
    { title: '', size: 'flex' },
  ]

  return (
    <Layout title="Dashboard" subtitle="Your portfolio of Umee assets">
      {size === 'small' && (
        <Text 
          alignSelf='center' 
          margin={{ bottom: 'medium' }} 
          className='font-moret' 
          color={'clrTextAndDataListHeader'} 
          size="medium1"
        >
          Dashboard
        </Text>
      )}
      {chainMode == Chain.ethereum ? (
        <Reflection
          depositsColumns={depositsColumns}
          borrowsColumns={borrowsColumns}
          depositsMobileColumns={depositsMobileColumns}
          borrowsMobileColumns={borrowsMobileColumns}
        />
      ) : (
        <Convexity
          depositsColumns={depositsColumns}
          borrowsColumns={borrowsColumns}
          depositsMobileColumns={depositsMobileColumns}
          borrowsMobileColumns={borrowsMobileColumns}
        />
      )}
    </Layout>
  )
}

export default Dashboard
