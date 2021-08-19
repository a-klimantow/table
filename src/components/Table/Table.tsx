import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Backdrop,
  CircularProgress,
  ThemeProvider,
} from '@material-ui/core'

import { useTableTheme } from './useTableTheme'

interface ICol {
  name: string
  key: string
  renderCell?(item: unknown): React.ReactNode
  hidden?: boolean
}

export interface TableProps {
  columns: ICol[]
  rows?: React.ReactNode[][]
  loading?: boolean
}

export const Table = observer<TableProps>(({ columns, rows = [], loading }) => {
  const theme = useTableTheme()
  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map(({ name, key, hidden }) => (
                <TableCell
                  key={key}
                  sx={{
                    display: hidden ? 'none' : 'table-cell',
                  }}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((cells, i) => (
              <TableRow key={i}>
                {(cells as React.ReactNode[]).map((cell, i) => (
                  <TableCell key={i} >{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
        <Backdrop open={Boolean(loading)}>
          <CircularProgress />
        </Backdrop>
      </TableContainer>
    </ThemeProvider>
  )
})
