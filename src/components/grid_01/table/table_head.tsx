import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as Cell } from '../types'
import { Resize, useResize } from './table_resize'
import { SortLabel, useSortLabel } from './table_sort_label'
import { useHead, useAlign } from './hooks'

export const TableHead = Mobx.observer(() => {
  const head = useHead()
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {head.map((cell) => (
          <HeadCell key={cell.key} cell={cell} />
        ))}
      </Mui.TableRow>
    </Mui.TableHead>
  )
})

const HeadCell = Mobx.observer<{ cell: Cell }>(({ cell }) => {
  const align = useAlign(cell)
  const resize = useResize(cell)
  const label = useSortLabel(cell)

  if (cell.hidden) return null

  return (
    <Mui.TableCell
      align={align}
      data-fq={cell.filterQuick || null}
      sx={{ width: cell.width, maxWidth: cell.width }}
    >
      <SortLabel label={label}>{cell.name}</SortLabel>
      <Resize resize={resize} />
    </Mui.TableCell>
  )
})
