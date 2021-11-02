import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as C } from '../types'
import { CellResize } from '../cell_resize'

import { useSortLabel } from './hooks'

export const CellHead = Mobx.observer<{ col: C }>(({ col }) => {
  if (col.hidden) return null

  const isSortable = col.sortable ?? true

  return (
    <Mui.TableCell
      align={col.type === 'string' ? 'left' : 'right'}
      data-key={col.key}
      sx={{ width: col.width, maxWidth: col.width }}
    >
      {isSortable ? (
        <SortLabel col={col}>
          <Name col={col} />
        </SortLabel>
      ) : (
        <Name col={col} />
      )}
      <CellResize />
    </Mui.TableCell>
  )
})

const SortLabel = Mobx.observer<{ col: C }>(({ col, children }) => (
  <Mui.TableSortLabel {...useSortLabel(col)} children={children} />
))

const Name = Mobx.observer<{ col: C }>(({ col }) => (
  <Mui.Typography
    variant="body2"
    fontWeight={col.quickFilter ? 500 : 300}
    children={col.name}
  />
))
