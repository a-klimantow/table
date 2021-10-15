import { observable, reaction } from 'mobx'
import storage from 'store'

import { IRequestItem, IGridCol } from 'types'

type K = keyof IRequestItem
type Cols = Array<IGridCol & { key: K }>

const KEY = 'request_columns'

const cols = [
  { key: 'panel_name', name: 'Наименование панели', quickFilter: true },
  { key: 'old_requests', name: 'Старше 3 дней' },
  { key: 'old_requests_sum', name: 'Сумма (старше 3 дней)' },
  { key: 'all_requests', name: 'На рассмотрении' },
  { key: 'all_requests_sum', name: 'Сумма (на рассмотрении)' },
  { key: 'accept_requests', name: 'В обработке' },
] as Cols

export const columns = observable.array<IGridCol>(storage.get(KEY, cols))

reaction(
  () => columns.map((col) => col.hidden),
  () => storage.set(KEY, columns)
)
