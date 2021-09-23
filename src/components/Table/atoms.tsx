import { FC, useMemo, memo } from 'react'
import { observer, Observer } from 'mobx-react-lite'
import {
  ThemeProvider,
  createTheme,
  LinearProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from '@material-ui/core'

import { ICol } from 'types'
import { TableProps } from './Table'

export const Provider: FC<TableProps> = ({ children, loading }) => {
  const t = useTheme()
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          // container
          MuiTableContainer: {
            styleOverrides: {
              root: {
                position: 'relative',
              },
            },
          },
          // table
          MuiTable: {
            styleOverrides: {
              root: {
                borderSpacing: 0,
                borderCollapse: 'separate',
              },
            },
          },
          // table head
          MuiTableHead: {
            styleOverrides: {
              root: {
                position: 'sticky',
                top: '0',
                zIndex: 3,
              },
            },
          },
          // table cells
          MuiTableCell: {
            styleOverrides: {
              head: {
                backgroundColor: t.palette.grey["50"],
              },
            },
          },

          MuiLinearProgress: {
            styleOverrides: {
              root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
              },
            },
          },
        },
      }),
    [t]
  )
  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        {loading && <LinearProgress />}
        <Table>{children}</Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export const Head = memo<TableProps>(({ columns }) => (
  <TableHead>
    <TableRow>
      {columns?.map((col) => (
        <HeadItem key={col.key} item={col} />
      ))}
    </TableRow>
  </TableHead>
))

const HeadItem = observer<{ item: ICol }>(({ item }) => (
  <TableCell
    sx={{
      display: item.hidden ? 'none' : '',
      fontWeight: item.quickFilter ? 500 : 400,
    }}
  >
    {item.name}
  </TableCell>
))

export const Body = memo<TableProps>(({ columns, data }) => {
  return (
    <TableBody>
      {data?.map((d, i) => (
        <TableRow key={i}>
          {columns?.map((c) => (
            <Observer key={c.key}>
              {() => (
                <TableCell sx={{ display: c.hidden ? 'none' : '' }}>
                  {c.renderCell ? c.renderCell(d) : d[c.key]}
                </TableCell>
              )}
            </Observer>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
})
