import { observable } from 'mobx'

import { ICol, IRequestItem } from 'types'
import {
  ColMenuStore,
  SearchStore,
  PaginationStore,
  GridStore,
  ExportStore,
} from 'components'

const template = [
  ['Назавние панели', 'panel_name'],
  ['Старше 3 дней', 'old_requests'],
  ['Сумма (старше 3 дней)', 'old_requests_sum'],
  ['На рассмотрении', 'all_requests'],
  ['Сумма (на рассмотрении)', 'all_requests_sum'],
  ['В обработке', 'accept_requests'],
] as [string, keyof IRequestItem][]

const cols: ICol[] = observable.array(
  template.map(([name, key]) => ({ name, key })),
  { proxy: false }
)

export class PageStore {
  constructor(
    public columns = cols,
    public colMenu = new ColMenuStore(cols),
    public search = new SearchStore(),
    public pagination = new PaginationStore(),
    public grid = new GridStore(cols, []),
    public exp = new ExportStore()
  ) {}
}
