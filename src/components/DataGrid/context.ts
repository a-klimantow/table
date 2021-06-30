import { createContext } from 'react'

import { IDataGridContext, IDataGridActionContext } from './types'

export const DataGridContext = createContext({} as IDataGridContext)
export const DataGridActionContext = createContext({} as IDataGridActionContext)
