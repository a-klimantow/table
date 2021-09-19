import { observer } from 'mobx-react-lite'
import { action } from 'mobx'
import { TablePagination, TablePaginationProps as TP } from '@material-ui/core'

interface PaginationProps {
  count: number
  page: number
  perPage: number
}

export const Pagination = observer<{ pagination: PaginationProps }>(
  ({ pagination }) => {
    const pageChange: TP['onPageChange'] = action((_, page) => {
      pagination.page = page
    })

    const perPageChage: TP['onRowsPerPageChange'] = action(({ target }) => {
      pagination.perPage = Number(target.value)
    })

    return (
      <TablePagination
        component="div"
        page={pagination.page}
        count={pagination.count}
        rowsPerPage={pagination.perPage}
        onPageChange={pageChange}
        onRowsPerPageChange={perPageChage}
      />
    )
  }
)
