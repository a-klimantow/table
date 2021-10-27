import * as React from 'react'

import { useGrid } from './hooks'

type G = ReturnType<typeof useGrid>

const Context = React.createContext({} as G)

export const Provider = Context.Provider

export const useGridContext = () => React.useContext(Context)
