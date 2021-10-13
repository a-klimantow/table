import { observable } from 'mobx'

import { ICol, IAccrualItem } from 'types'
import { SearchStore, PaginationStore, ColMenuStore } from 'components'

const template = [
  ['Файл', 'file'],
  ['ID пользователя', 'author_id'],
  ['Дата и время загрузки', 'created'],
  ['Сумма', 'amount'],
] as [string, keyof IAccrualItem][]

const cols: ICol[] = observable.array(
  template.map(([name, key]) => ({ name, key })),
  { proxy: false }
)

export class PageStore {
  constructor(
    public columns = cols,
    public colMenu = new ColMenuStore(cols),
    public search = new SearchStore(),
    public pagination = new PaginationStore()
  ) {}
}
