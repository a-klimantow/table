import * as React from 'react'
import * as Mui from '@mui/material'

import { TableType as T } from '../types'

import { TableProvider } from '../table_provider'
import { TableContainer } from '../table_container'
import { TableHead } from '../table_head'
import { TableBody } from '../table_body'
import { Toolbar } from '../toolbar'
import { Bottom } from '../bottom'

interface TableProps {
  table: T
}

export const Table = React.memo<TableProps>(({ table, ...props }) => (
  <TableProvider value={table}>
    <Mui.Container disableGutters {...props}>
      <Toolbar />

      <TableContainer>
        <Mui.Table>
          <TableHead />
          <TableBody />
        </Mui.Table>
      </TableContainer>

      <Bottom />
    </Mui.Container>
  </TableProvider>
))
