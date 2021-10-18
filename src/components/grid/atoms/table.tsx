import * as React from 'react'
import * as Mui from '@mui/material'
import { observer, Observer } from 'mobx-react-lite'

import { useGridContext } from '../context'

// _______________ table

export const Table = React.memo(() => (
  <Mui.TableContainer sx={{ flex: 1, position: 'relative' }}>
    <Loader />
    <Mui.Table>
      <TableHead />
      <TableBody />
    </Mui.Table>
  </Mui.TableContainer>
))

// _______________ table loading

const Loader = observer(() => {
  const grid = useGridContext()

  if (!grid.loading) return null

  return (
    <Mui.LinearProgress
      sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}
    />
  )
})

// _______________ table head

const TableHead = React.memo(() => {
  const grid = useGridContext()
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {grid.tableHead.map((c) => (
          <Observer key={c.key}>
            {() => (
              <Mui.TableCell
                data-hidden={c.hidden || null}
                data-quick-filter={c.quickFilter || null}
              >
                {c.name}
              </Mui.TableCell>
            )}
          </Observer>
        ))}
      </Mui.TableRow>
    </Mui.TableHead>
  )
})

// _______________ table body

const TableBody = observer(() => {
  const grid = useGridContext()
  return (
    <Mui.TableBody>
      {grid.rows.map((row) => (
        <Mui.TableRow key={row.key}>
          {row.cells.map((cell) => (
            <Observer key={cell.col.key}>
              {() => (
                <Mui.TableCell
                  data-hidden={cell.col.hidden || null}
                  align={cell.col.aling}
                >
                  {cell.node}
                </Mui.TableCell>
              )}
            </Observer>
          ))}
        </Mui.TableRow>
      ))}
    </Mui.TableBody>
  )
})
