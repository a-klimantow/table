import { observer, useLocalObservable } from 'mobx-react-lite'
import { TablePagination, TablePaginationProps } from '@material-ui/core'

export const usePagination = (): TablePaginationProps =>
  useLocalObservable(() => ({
    count: 0,
    page: 0,
    rowsPerPage: 10,
    onPageChange(_, page) {
      this.page = page
    },
    onRowsPerPageChange(e) {
      this.rowsPerPage = Number(e.target.value)
    },
  }))

export type PaginationType = ReturnType<typeof usePagination>

export const Pagination = observer<{
  pagination: PaginationType
}>(({ pagination: p }) => (
  <TablePagination
    component="div"
    data-name="pagination"
    count={p.count}
    page={p.page}
    rowsPerPage={p.rowsPerPage}
    onPageChange={p.onPageChange}
    onRowsPerPageChange={p.onRowsPerPageChange}
  />
))
