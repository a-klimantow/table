import React from 'react'
import { makeAutoObservable, runInAction } from 'mobx'
import { TablePaginationProps } from '@material-ui/core'
import buildQuery from 'odata-query'

import { TableProps } from 'components'

type SuccessType = {
  type: 'get'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
  count: number
}

class Store {
  top = 10
  page = 0
  count = 0
  loading = true
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[] = []
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

  success(data: SuccessType) {
    this.loading = false
    switch (data.type) {
      case 'get':
        this.items = data.items
        this.count = data.count
        break
      default:
        console.error(data.type)
    }
  }

  get rows(): TableProps['rows'] {
    if (!this.items.length) return []
    return this.items.map((item) =>
      this.columns.map((c) => (c.renderCell ? c.renderCell(item) : item[c.key]))
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
