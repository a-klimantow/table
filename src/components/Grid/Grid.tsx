import { FC } from 'react'
import { TableContainer, Table, TableHead } from '@material-ui/core'

import { GridStore } from './store'
import { GridContextProvider } from './context'
import { GridTheme } from './GridTheme'
import { Head } from './Head'
import { Body } from './Body'

export const Grid: FC<{ grid: GridStore }> = ({ grid }) => (
  <GridContextProvider value={grid}>
    <GridTheme>
      <TableContainer>
        <Table>
          <TableHead>
            <Head />
          </TableHead>
          <Body />
        </Table>
      </TableContainer>
    </GridTheme>
  </GridContextProvider>
)
