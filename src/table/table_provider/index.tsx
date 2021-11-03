import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { TableProps } from '../types'
import { useTheme } from '../theme'
import { TableContext } from '../context'

export const TableProvider = Mobx.observer<{ value: TableProps }>((props) => (
  <Mui.ThemeProvider theme={useTheme()}>
    <TableContext.Provider {...props} />
  </Mui.ThemeProvider>
))
