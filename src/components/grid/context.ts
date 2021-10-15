import * as React from 'react'

import { Store } from './store'

const GridContext = React.createContext({} as Store)

export const Provider = GridContext.Provider

export const useGridContext = () => React.useContext(GridContext)
