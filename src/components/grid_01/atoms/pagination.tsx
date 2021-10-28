import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useGridContext } from '../context'

function usePagination(): Mui.TablePaginationProps {
  const grid = useGridContext()
  return {
    sx: { ml: 'auto' },
    count: grid.count,
    page: grid.count ? grid.page : 0,
    onPageChange: (_, p) => grid.setPage(p),
    rowsPerPage: grid.rows,
    onRowsPerPageChange: (e) => {
      grid.setPage(0)
      grid.setRows(+e.target.value)
    },
    rowsPerPageOptions: [10, 20, 30],
  }
}

export const Pagination = Mobx.observer(() => {
  const props = usePagination()

  return <Mui.TablePagination component="div" {...props} />
})
