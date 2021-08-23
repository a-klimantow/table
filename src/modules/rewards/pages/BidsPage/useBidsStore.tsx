import React from 'react'
import { makeAutoObservable } from 'mobx'
import buildQuery from 'odata-query'
import { Button } from '@material-ui/core'

import { ICol } from 'components'
import { useGetBids } from './useGetBids'
import { BidSuccessResponse, IBidItem } from '../../types'

type Keys = keyof IBidItem

type ColType = (ICol & { key: Keys })[]

class Store {
  loading = true
  columns: ColType
  data: null | BidSuccessResponse = null
  // ===========
  quickFilter = ''
  quickFilterCols: Keys[]

  constructor(columns: ColType) {
    this.columns = columns
    this.quickFilterCols = columns.filter((c) => c.quickFilter).map((c) => c.key)
    makeAutoObservable(this)
  }

  changeQuickFilter(qf: string) {
    console.log(qf)
    this.quickFilter = qf
  }

  success(data: BidSuccessResponse) {
    this.loading = false
    this.data = data
  }

  get cols() {
    return this.columns.filter((c) => !c.hidden)
  }

  get rows() {
    if (!this.data) return []

    return this.data.items.map((i) =>
      this.cols.map((c) => (c.renderCell ? c.renderCell(i) : i[c.key]))
    )
  }

  get queryString() {
    console.log(JSON.stringify(this, null, 2))
    if (this.quickFilter)
      return buildQuery({
        filter: {
          or: this.cols
            .filter((c) => this.quickFilterCols.includes(c.key))
            .map((c) => ({ [c.key]: { contains: this.quickFilter } })),
        },
      })
    return ''
  }

  // top = 20
  // page = 0
  // count = 0
  // loading = true
  // items: IBidItem[] = []
  // columns: (ICol & { key: ItemKeys })[]
  // data: null | BidSuccessResponse = null
  // constructor() {
  //   makeAutoObservable(this)
  //   this.columns = [
  //     { name: 'Наименование панели', key: 'panel_name' },
  //     { name: 'Старше 3 дней', key: 'old_requests' },
  //     { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
  //     { name: 'Всего заявок', key: 'all_requests' },
  //     { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
  //     { name: 'В обработке', key: 'accept_requests' },
  //   ]
  // }
  // success(data: BidSuccessResponse) {
  //   this.loading = false
  //   const { items, metadata } = data
  //   this.items = items
  //   this.count = metadata.pagination.total_count
  // }
  // get rows(): TableProps['rows'] {
  //   if (!this.items.length) return []
  //   const cols = this.columns.filter((c) => !c.hidden)
  //   return this.items.map((item) =>
  //     cols.map((c) => (c.renderCell ? c.renderCell(item) : item[c.key]))
  //   )
  // }
  // get query(): string {
  //   runInAction(() => (this.loading = true))
  //   return buildQuery({
  //     top: this.top,
  //     skip: this.page * this.top,
  //   })
  // }
  // get pagination(): TablePaginationProps {
  //   return {
  //     rowsPerPageOptions: [20, 40, 100],
  //     count: this.count,
  //     page: this.page,
  //     onPageChange: (_, page) => runInAction(() => (this.page = page)),
  //     rowsPerPage: this.top,
  //     onRowsPerPageChange: (e) =>
  //       runInAction(() => {
  //         this.top = +e.target.value
  //         this.page = 0
  //       }),
  //   }
  // }
}

export const useBidsStore = () => {
  const [store] = React.useState(
    () =>
      new Store([
        { name: 'Наименование панели', key: 'panel_name', quickFilter: true },
        { name: 'Старше 3 дней', key: 'old_requests' },
        { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
        { name: 'Всего заявок', key: 'all_requests' },
        { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
        { name: 'В обработке', key: 'accept_requests' },
      ])
  )
  useGetBids(store)
  return store
}

export type StoreType = Store
