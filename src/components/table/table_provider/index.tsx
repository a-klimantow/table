import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T } from '../types'
import { useTheme } from '../theme'
import { TableContext } from '../context'

export const TableProvider = Mobx.observer<{ table: T }>(
  ({ table, children }) => (
    <Mui.ThemeProvider theme={useTheme()}>
      <TableContext.Provider value={{ table }}>
        {children}
      </TableContext.Provider>
    </Mui.ThemeProvider>
  )
)
