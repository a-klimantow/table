import { observable, reaction } from 'mobx'
import storage from 'store'

import { IAccrualItem, IGridCol } from 'types'

type K = keyof IAccrualItem
type Cols = Array<IGridCol & { key: K }>

const KEY = 'accruals_columns'

const cols = [
  { key: 'file', name: 'Файл', quickFilter: true },
  { key: 'author_id', name: 'ID пользователя' },
  { key: 'created', name: 'Дата и время загрузки' },
  { key: 'amount', name: 'Сумма' },
] as Cols

export const columns = observable.array<IGridCol>(storage.get(KEY, cols))

reaction(
  () => columns.map((col) => col.hidden),
  () => storage.set(KEY, columns)
)
