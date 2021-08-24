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
  Box,
} from '@material-ui/core'

import { TableProps } from './types'
import { useTableTheme } from './useTableTheme'

export const Table = observer<TableProps>(({ columns, rows = [], loading }) => {
  const theme = useTableTheme()
  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map(({ name, key, hidden, quickFilter }) => (
                <TableCell
                  key={key}
                  sx={{
                    display: hidden ? 'none' : 'table-cell',
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: 'relative',

                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: quickFilter ? 'block' : 'none',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        bgcolor: 'grey.600',
                      },
                    }}
                  >
                    {name}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((cells, i) => (
              <TableRow key={i}>
                {(cells as React.ReactNode[]).map((cell, i) => (
                  <TableCell key={i}>{cell}</TableCell>
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
