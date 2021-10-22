import { observable, reaction } from 'mobx'
import storage from 'store'

import { IReportItem as I, IGridCol as GC } from 'types'

type K = keyof I
type Cols = Array<GC & { key: K }>

const KEY = 'reports_columns'

const cols = [
  { key: 'panel_name', name: 'Наименование панели', quickFilter: true },
  {
    key: 'processed_date',
    name: 'Дата',
    renderCell(item: I) {
      return new Date(item.processed_date).toLocaleDateString()
    },
  },
  { key: 'payment_type_name', name: 'Тип выплат' },
  { key: 'total_success_requests', name: 'Количество выплат' },
  { key: 'amount', name: 'Сумма' },
  { key: 'currency_name', name: 'Валюта' },
] as Cols

export const columns = observable.array<GC>(storage.get(KEY, cols))

reaction(
  () => columns.map((col) => col.hidden),
  () => storage.set(KEY, columns)
)
