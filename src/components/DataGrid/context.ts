import { createContext } from 'react'

import { IDataGridContext, IDataGridActionContext, IGridStore } from './types'

export const DataGridContext = createContext({} as IDataGridContext)
export const DataGridActionContext = createContext({} as IDataGridActionContext)

export const GridContext = createContext({} as IGridStore)
