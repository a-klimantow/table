import * as React from 'react'
import * as Mui from '@material-ui/core'

export const Pagination = React.memo<{
  pagination: Mui.TablePaginationProps
  count: number
}>(({ count, pagination }) => (
  <Mui.TablePagination
    {...pagination}
    count={count}
    rowsPerPageOptions={[10, 20, 30]}
    component="div"
  />
))

export const usePagination = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  return {
    page,
    onPageChange: (_, page) => setPage(page),
    rowsPerPage,
    onRowsPerPageChange: (e) => {
      setPage(0)
      setRowsPerPage(Number(e.target.value))
    },
  } as Mui.TablePaginationProps
}
