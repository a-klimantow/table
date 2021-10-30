import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T } from '../types'
import { useComponentsTheme } from '../theme'
import { TableContext } from '../context'

export const TableProvider = Mobx.observer<{ value: T }>(
  ({ value, children }) => (
    <Mui.ThemeProvider theme={useComponentsTheme()}>
      <TableContext.Provider value={value}>{children}</TableContext.Provider>
    </Mui.ThemeProvider>
  )
)
