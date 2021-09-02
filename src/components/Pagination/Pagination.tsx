import { memo } from 'react'
import { makeAutoObservable } from 'mobx'
import { TablePagination, TablePaginationProps } from '@material-ui/core'
import buildQuery from 'odata-query'

export const Pagination = memo<TablePaginationProps>((props) => (
  <TablePagination {...props} />
))

export class PaginationStore {
  count = 0
  page = 0
  perPage = 10

  constructor() {
    makeAutoObservable(this)
  }

  changePage(page: number) {
    this.page = page
  }

  changePerPage(perPage: number) {
    this.perPage = perPage
  }

  setCount(count: number) {
    this.count = count
  }

  get props(): TablePaginationProps {
    return {
      count: this.count,
      page: this.page,
      rowsPerPage: this.perPage,
      onPageChange: (_, page) => this.changePage(page),
      onRowsPerPageChange: (e) => this.changePerPage(+e.target.value),
    }
  }

  get query(): string {
    return buildQuery({
      top: this.perPage,
      skip: this.perPage * this.page,
    }).slice(1)
  }
}
