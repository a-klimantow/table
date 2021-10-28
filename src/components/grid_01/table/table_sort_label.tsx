import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'
import * as mobx from 'mobx'

import { ICol as Cell } from '../types'
import { useGridContext } from '../context'

type L = ReturnType<typeof useSortLabel>

export const useSortLabel = (cell: Cell) => {
  const { columns } = useGridContext()

  const changeSort = mobx.action(() => {
    const { key, sorted } = cell
    cell.sorted = !sorted ? 'asc' : sorted === 'asc' ? 'desc' : undefined
    columns.forEach((c) => {
      if (c.key !== key) c.sorted = undefined
    })
  })

  return {
    onClick: changeSort,
    direction: cell.sorted,
    active: !!cell.sorted,
  } as Mui.TableSortLabelProps
}

export const SortLabel = Mobx.observer<{ label: L }>(({ children, label }) => (
  <Mui.TableSortLabel {...label}>
    <Mui.Box
      sx={{
        flexShrink: 1,
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {children}
    </Mui.Box>
  </Mui.TableSortLabel>
))
