import { observer } from 'mobx-react-lite'
import { action } from 'mobx'
import {
  TablePagination,
  TablePaginationProps as TPProps,
} from '@material-ui/core'

type Props = Pick<TPProps, 'count' | 'page' | 'rowsPerPage'>

export interface PaginationProps {
  pagination: Props
}

export const Pagination = observer<PaginationProps>((props) => {
  const p = usePagination(props)
  return (
    <TablePagination
      component="div"
      page={p.page}
      count={p.count}
      rowsPerPage={p.rowsPerPage}
      onPageChange={p.onPageChange}
      onRowsPerPageChange={p.onRowsPerPageChange}
    />
  )
})

function usePagination({ pagination }: PaginationProps): TPProps {
  const changePage: TPProps['onPageChange'] = action(
    'change_page',
    (_, p) => (pagination.page = p)
  )

  const changePerPage: TPProps['onRowsPerPageChange'] = action(
    'chage_per_page',
    (e) => {
      pagination.page = 0
      pagination.rowsPerPage = Number(e.target.value)
    }
  )

  return {
    count: pagination.count,
    page: pagination.page,
    rowsPerPage: pagination.rowsPerPage,
    onPageChange: changePage,
    onRowsPerPageChange: changePerPage,
  }
}
