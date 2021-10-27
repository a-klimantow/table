import f from 'odata-filter-builder'

import { ICol } from '../types'

export function createFQ(str = '', cols: ICol[]): string {
  if (!str) return ''
  const filter = f.or()

  cols
    .filter((c) => c.filterQuick)
    .forEach((c) => {
      c.type === 'string' &&
        filter.contains((x) => x.toLower(c.key), str.toLowerCase())

      c.type === 'number' && Number(str) && filter.eq(c.key, Number(str))
    })

  return filter.toString()
}

export const getKey = (...p: string[]) => p.join('_')
