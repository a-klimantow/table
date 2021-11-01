import * as mobx from 'mobx'
import * as Mui from '@mui/material'

import { ICol as C } from '../types'
import { useTableContext } from '../context'

export const useSortLabel = (col: C) => {
  const { table } = useTableContext()

  const changSort = mobx.action(() => {
    const { key, sort } = col
    switch (sort) {
      case undefined:
        col.sort = 'asc'
        break
      case 'asc':
        col.sort = 'desc'
        break
      default:
        col.sort = undefined
        break
    }

    table.columns.forEach((c) => {
      if (c.key !== key) c.sort = undefined
    })
  })

  return {
    direction: col.sort,
    active: !!col.sort,
    onClick: changSort,
  } as Mui.TableSortLabelProps
}

export const useAlign = (col: C): C['align'] =>
  col.align ?? col.type === 'string' ? 'left' : 'right'
