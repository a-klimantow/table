import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as C } from '../types'
import { CellResize } from '../cell_resize'

import { useSortLabel } from './hooks'

export const CellHead = Mobx.observer<{ col: C }>(({ col }) => {
  if (col.hidden) return null
  return (
    <Mui.TableCell align={col.align} data-key={col.key} width={col.width}>
      <SortLabel col={col}>
        <Mui.Typography
          variant="body2"
          fontWeight={col.quickFilter ? 500 : 300}
        >
          {col.name}
        </Mui.Typography>
      </SortLabel>
      <CellResize />
    </Mui.TableCell>
  )
})

const SortLabel = Mobx.observer<{ col: C }>(({ col, children }) => (
  <Mui.TableSortLabel {...useSortLabel(col)} children={children} />
))
