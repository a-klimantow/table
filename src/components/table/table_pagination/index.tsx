import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'
import { useTableContext } from '../context'

export const useTablePagination = (): Mui.TablePaginationProps => {
  const table = useTableContext()

  return {
    count: table.count,
    page: table.count ? table.page : table.count,

    onPageChange(_, page) {
      table.page = page
    },

    rowsPerPage: table.top,
    rowsPerPageOptions: [10, 20, 30],

    onRowsPerPageChange(e) {
      table.top = +e.target.value
      table.page = 0
    },
  }
}

export const TablePagination = Mobx.observer(() => {
  const p = useTablePagination()
  return (
    <Mui.TablePagination
      component="div"
      count={p.count}
      page={p.page}
      onPageChange={p.onPageChange}
      rowsPerPage={p.rowsPerPage}
      onRowsPerPageChange={p.onRowsPerPageChange}
      rowsPerPageOptions={p.rowsPerPageOptions}
    />
  )
})
