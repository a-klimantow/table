import * as React from 'react'
import * as Mui from '@mui/material'

import { TableProps } from '../types'
import { TableProvider } from '../table_provider'
import { TableContainer } from '../table_container'
import { TableHead } from '../table_head'
import { TableBody } from '../table_body'
import { TableLoader } from '../table_loader'
import { Toolbar } from '../toolbar'
import { Bottom } from '../bottom'

export const Table = React.memo<TableProps>(({ table, ...props }) => (
  <TableProvider table={table}>
    <Mui.Container disableGutters {...props}>
      <Toolbar />

      <TableContainer>
        <TableLoader />
        <Mui.Table>
          <TableHead />
          <TableBody />
        </Mui.Table>
      </TableContainer>

      <Bottom />
    </Mui.Container>
  </TableProvider>
))
