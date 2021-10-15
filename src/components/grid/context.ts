import * as React from 'react'

import { useGrid } from './store'

const GridContext = React.createContext({} as ReturnType<typeof useGrid>)

export const Provider = GridContext.Provider

export const useGridContext = () => React.useContext(GridContext)
