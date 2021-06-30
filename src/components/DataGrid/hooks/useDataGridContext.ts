import { useContext } from 'react'

import { DataGridActionContext, DataGridContext } from '../context'

export const useDataGridContext = () => ({
  ...useContext(DataGridContext),
  ...useContext(DataGridActionContext),
})
