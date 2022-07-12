import { useContext } from 'react';
import { ConvexityContext } from './data';

export function useConvexityData() {
  const context = useContext(ConvexityContext);
  if (!context) {
    throw new Error('You forgot to use AccountConnectionProvider');
  }
  return context;
}
