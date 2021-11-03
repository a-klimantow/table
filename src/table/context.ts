import * as React from 'react'

import { TableProps } from './types'

export const TableContext = React.createContext({} as TableProps)

export const useTableContext = () => React.useContext(TableContext)
