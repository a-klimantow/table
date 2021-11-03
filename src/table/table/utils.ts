import f from 'odata-filter-builder'

import { ICol as C } from '../types'

export const getQuickFilter = (str = '', cols: C[]): string => {
  const filter = f.or()
  const strLow = str.toLowerCase()
  const strNum = Number(str)

  cols.forEach((c) => {
    if (c.type === 'string') filter.contains((x) => x.toLower(c.key), strLow)
    if (strNum && c.type === 'number') filter.eq(c.key, strNum)
  })

  return filter.toString()
}
