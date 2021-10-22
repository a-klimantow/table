import { observable, reaction } from 'mobx'
import storage from 'store'

import { IAccrualItem as I, IGridCol as GC } from 'types'

type K = keyof I
type Cols = Array<GC & { key: K }>

const KEY = 'accruals_columns'

const cols = [
  {
    key: 'file',
    name: 'Файл',
    quickFilter: true,
    renderCell(item: I) {
      return item.file.file_name
    },
  },
  { key: 'author_id', name: 'ID пользователя' },
  {
    key: 'created',
    name: 'Дата и время загрузки',
    renderCell(item: I) {
      return new Date(item.created).toLocaleString()
    },
  },
  {
    key: 'amount',
    name: 'Сумма',
    renderCell(item: I) {
      return item.amount.toLocaleString()
    },
  },
] as Cols

export const columns = observable.array<GC>(storage.get(KEY, cols))

reaction(
  () => columns.map((col) => col.hidden),
  () => storage.set(KEY, columns)
)
