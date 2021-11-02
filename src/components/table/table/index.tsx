import * as React from 'react'
import * as Mui from '@mui/material'

import { TableProps } from '../types'
import { TableProvider } from '../table_provider'
import { TableContainer } from '../table_container'
import { TableHead } from '../table_head'
import { TableBody } from '../table_body'
import { Toolbar } from '../toolbar'
import { Bottom } from '../bottom'

export const Table = React.memo<TableProps>((props) => (
  <TableProvider value={props}>
    <Mui.Paper
      data-app-page={props.isPage || null}
      elevation={1}
      data-table-container
    >
      <Toolbar />

      <TableContainer>
        <Mui.Table>
          <TableHead />
          <TableBody />
        </Mui.Table>
      </TableContainer>

      <Bottom />
    </Mui.Paper>
  </TableProvider>
))
