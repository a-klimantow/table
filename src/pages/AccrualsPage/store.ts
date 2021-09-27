import { observable } from 'mobx'

import { ICol, IAccrualItem } from 'types'
import { SearchStore, PaginationStore, GridStore } from 'components'

const template = [
  ['Файл', 'file'],
  ['ID пользователя', 'author_id'],
  ['Дата и время загрузки', 'created'],
  ['Сумма', 'amount'],
] as [string, keyof IAccrualItem][]

const columns: ICol[] = observable.array(
  template.map(([name, key]) => ({ name, key })),
  { proxy: false }
)

export class PageStore {
  columns = columns
  search = new SearchStore()
  pagination = new PaginationStore()
  grid = new GridStore(this.columns, ['Файл', 'ID пользователя'])
}
