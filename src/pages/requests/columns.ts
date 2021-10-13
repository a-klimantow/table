import { observable, reaction } from 'mobx'
import storage from 'store'
//
import { IRequestItem, ICol } from 'types'

export type RC = ICol<IRequestItem>[]

const KEY = 'requests_columns'

export const columns = observable.array(
  storage.get(KEY, [
    { key: 'panel_name', name: 'Наименование панели', quickFilter: true },
    { key: 'old_requests', name: 'Старше 3 дней' },
    { key: 'old_requests_sum', name: 'Сумма (старше 3 дней)' },
    { key: 'all_requests', name: 'На рассмотрении' },
    { key: 'all_requests_sum', name: 'Сумма (на рассмотрении)' },
    { key: 'accept_requests', name: 'В обработке' },
  ] as RC)
)

reaction(
  () => columns.map((c) => ({ ...c })),
  () => storage.set(KEY, columns)
)
