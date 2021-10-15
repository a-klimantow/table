import { observable, reaction } from 'mobx'
import storage from 'store'

import { IReportItem, IGridCol } from 'types'

type K = keyof IReportItem
type Cols = Array<IGridCol & { key: K }>

const KEY = 'requests_columns'

const cols = [
  { key: 'panel_name', name: 'Наименование панели', quickFilter: true },
  { key: 'processed_date', name: 'Дата' },
  { key: 'total_success_requests', name: 'Количество выплат' },
  { key: 'amount', name: 'Сумма' },
  { key: 'currency_name', name: 'Валюта' },
] as Cols

export const columns = observable.array<IGridCol>(storage.get(KEY, cols))

reaction(
  () => columns.map((col) => col.hidden),
  () => storage.set(KEY, columns)
)
