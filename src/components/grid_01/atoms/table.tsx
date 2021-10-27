import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useGridContext } from '../context'
import { TableRow } from './table_row'

export const Table = React.memo(() => (
  <Mui.TableContainer sx={{ position: 'relative', flex: 1 }}>
    <Loader />
    <Mui.Table>
      <Mui.TableHead>
        <TableRow />
      </Mui.TableHead>
      <TableBody />
    </Mui.Table>
  </Mui.TableContainer>
))

export const TableBody = Mobx.observer(() => {
  const grid = useGridContext()
  return (
    <Mui.TableBody>
      {grid.items.map((item, i) => (
        <TableRow key={i} item={item} />
      ))}
    </Mui.TableBody>
  )
})

const Loader = Mobx.observer(() => {
  const grid = useGridContext()
  if (!grid.loading) return null
  return (
    <Mui.LinearProgress
      sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}
    />
  )
})
