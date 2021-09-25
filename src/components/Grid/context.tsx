import { createContext, useContext, FC } from 'react'

import { GridStore } from './store'

export const GridContext = createContext({} as GridStore)

export const useGridContext = () => useContext(GridContext)

export const GridContextProvider: FC<{ value: GridStore }> = ({
  value,
  children,
}) => <GridContext.Provider value={value}>{children}</GridContext.Provider>
