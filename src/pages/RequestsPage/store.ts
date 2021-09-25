import { observable } from 'mobx'

import { ICol, IRequestItem } from 'types'
import { SearchStore, PaginationStore, GridStore } from 'components'

const template = [
  ['Назавние панели', 'panel_name'],
  ['Старше 3 дней', 'old_requests'],
  ['Сумма (старше 3 дней)', 'old_requests_sum'],
  ['На рассмотрении', 'all_requests'],
  ['Сумма (на рассмотрении)', 'all_requests_sum'],
  ['В обработке', 'accept_requests'],
] as [string, keyof IRequestItem][]

const columns: ICol[] = observable.array(
  template.map(([name, key]) => ({ name, key })),
  { proxy: false }
)

export class PageStore {
  columns = columns
  search = new SearchStore()
  pagination = new PaginationStore()
  grid = new GridStore(this.columns, ['Назавние панели'])
}
