import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { useGridContext } from '../context'

export const Pagination = observer(() => {
  const grid = useGridContext()
  return (
    <Mui.TablePagination
      component="div"
      sx={{ ml: 'auto' }}
      {...grid.pagination}
    />
  )
})
