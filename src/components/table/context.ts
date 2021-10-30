import * as React from 'react'

import { TableType as T } from './types'

export const TableContext = React.createContext({} as T)

export const useTableContext = () => React.useContext(TableContext)
