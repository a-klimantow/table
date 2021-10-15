import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import { action } from 'mobx'

import { useGridContext } from '../context'

export const Pagination = observer(() => {
  const grid = useGridContext()
  return (
    <Mui.TablePagination
      component="div"
      sx={{ ml: 'auto' }}
      count={grid.count}
      page={grid.page}
      onPageChange={action((_, page) => (grid.page = page))}
      rowsPerPage={grid.rowsPerPage}
      onRowsPerPageChange={action((e) => {
        grid.page = 0
        grid.rowsPerPage = +e.target.value
      })}
      rowsPerPageOptions={grid.rowsPerPageOptions}
    />
  )
})
