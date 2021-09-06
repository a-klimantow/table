import { useState } from 'react'
import { makeAutoObservable } from 'mobx'

import { IBidItem } from 'modules/rewards/types'
import { ICol } from 'types'
import {
  ColMenuProps,
  SearchProps,
  TableProps,
  PaginationProps,
} from 'components'
import { useUrl } from 'hooks'
import { useGet } from './useGet'

class PageStore<T> {
  private readonly _columns: ICol[]

  private _search: SearchProps['search'] = { value: '' }
  private _colMenu: ColMenuProps['menu'] = { items: [] }
  private _table: TableProps['table'] = { head: [], body: null, loading: true }
  private _pagination: PaginationProps['pagination'] = {
    count: 0,
    page: 0,
    rowsPerPage: 10,
  }

  constructor(cols: ICol<T>[]) {
    makeAutoObservable(this)

    this._columns = cols as unknown as ICol[]
    this._colMenu.items = this._columns
    this._table.head = this._columns
  }

  loading(show: boolean) {
    this._table.loading = show
  }

  getSuccess() {
    this.loading(false)
    console.log('success')
  }

  fail() {
    this.loading(false)
    console.log('error')
    this._pagination.count = 1000
  }

  get search() {
    return this._search
  }

  get colMenu() {
    return this._colMenu
  }

  get table() {
    return this._table
  }

  get pagination() {
    return this._pagination
  }
}

export function useReportPage() {
  const [store] = useState(
    () =>
      new PageStore<IBidItem>([
        { name: 'Наименование панели', key: 'panel_name' },
        { name: 'Старше 3 дней', key: 'old_requests' },
        { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
        { name: 'Всего заявок', key: 'all_requests' },
        { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
        { name: 'В обработке', key: 'accept_requests' },
      ])
  )
  const url = useUrl('withdrawal')
  useGet(
    url,
    () => store.getSuccess(),
    () => store.fail()
  )
  return store
}
