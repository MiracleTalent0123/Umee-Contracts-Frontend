import { useContext } from 'react'
import { StakeContext } from './data'

export function useStake() {
  const context = useContext(StakeContext)
  if (!context) {
    throw new Error('You forgot to use StakeProvider')
  }
  return context
}
