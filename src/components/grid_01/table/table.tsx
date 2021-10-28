import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableTheme } from './theme'
import { TableHead } from './table_head'
import { TableBody } from './table_body'
import { TableContainer } from './table_container'
import { useGridContext } from '../context'

export const Table = React.memo(() => {
  return (
    <Mui.ThemeProvider theme={useTableTheme()}>
      <TableContainer>
        <Mui.Table>
          <TableHead />
          <TableBody />
        </Mui.Table>
        <Loading />
      </TableContainer>
    </Mui.ThemeProvider>
  )
})

const Loading = Mobx.observer(() =>
  useGridContext().loading ? <Mui.LinearProgress /> : null
)
