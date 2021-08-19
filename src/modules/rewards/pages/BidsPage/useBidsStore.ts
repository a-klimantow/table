import React from 'react'
import { makeAutoObservable, runInAction } from 'mobx'
import { TablePaginationProps } from '@material-ui/core'
import buildQuery from 'odata-query'

import { TableProps } from 'components'
import { BidResType } from '../../types'

type ItemKeys = keyof BidResType['items'][number]

class Store {
  top = 20
  page = 0
  count = 0
  loading = true
  items: BidResType['items'] = []
  columns: TableProps['columns']

  constructor() {
    makeAutoObservable(this)
    this.columns = [
      { name: 'Наименование панели', key: 'panel_name' },
      { name: 'Старше 3 дней', key: 'old_requests' },
      { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
      { name: 'Всего заявок', key: 'all_requests' },
      { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
      { name: 'В обработке', key: 'accept_requests' },
    ]
  }

  success(data: BidResType) {
    this.loading = false
    const { items, metadata } = data
    this.items = items
    this.count = metadata.pagination.total_count
  }

  get rows(): TableProps['rows'] {
    if (!this.items.length) return []

    const cols = this.columns.filter((c) => !c.hidden)
    return this.items.map((item) =>
      cols.map((c) => (c.renderCell ? c.renderCell(item) : item[c.key as ItemKeys]))
    )
  }

  get query(): string {
    runInAction(() => (this.loading = true))
    return buildQuery({
      top: this.top,
      skip: this.page * this.top,
    })
  }

  get pagination(): TablePaginationProps {
    return {
      rowsPerPageOptions: [20, 40, 100],
      count: this.count,
      page: this.page,
      onPageChange: (_, page) => runInAction(() => (this.page = page)),
      rowsPerPage: this.top,
      onRowsPerPageChange: (e) =>
        runInAction(() => {
          this.top = +e.target.value
          this.page = 0
        }),
    }
  }
}

export const useBidsStore = () => React.useRef(new Store()).current

export type StoreType = Store
