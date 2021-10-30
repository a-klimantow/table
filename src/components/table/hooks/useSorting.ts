import * as mobx from 'mobx'

import { TableType as T, ICol as C } from '../types'

export const useSorting = (table: T) =>
  mobx.action((col: C) => {
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
