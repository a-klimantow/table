import { observer } from 'mobx-react-lite'
import {
  TablePagination,
  TablePaginationProps as Props,
} from '@material-ui/core'
import { makeAutoObservable, action } from 'mobx'
import { useRef } from 'react'

export class PaginationStore {
  private count = 0
  private page = 0
  private rowsPerPage = 15

  constructor() {
    makeAutoObservable(this, {}, { proxy: false })
  }

  setCount(count: number) {
    this.count = count
    if (this.skip > count) this.page = 0
  }

  get props(): Props {
    return {
      count: this.count,
      page: this.page,
      rowsPerPage: this.rowsPerPage,
      onPageChange: action((_, page) => (this.page = page)),
      onRowsPerPageChange: action((e) => {
        this.rowsPerPage = +e.target.value
        this.page = 0
      }),
      rowsPerPageOptions: [15, 20, 30]
    }
  }

  get top() {
    return this.rowsPerPage
  }

  get skip() {
    return this.top * this.page
  }

  get query() {
    return { $top: this.top || {}, $skip: this.skip || {} }
  }
}

export const usePagination = () => useRef(new PaginationStore()).current

export const Pagination = observer<{
  pagination: PaginationStore
}>(({ pagination }) => (
  <TablePagination
    component="div"
    data-name="pagination"
    {...pagination.props}
  />
))
