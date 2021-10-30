import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

// import { TableType as T } from './types'
// import { useTableTheme } from './theme'
// import { TableContext } from './context'

// import { TableContainer } from './table_container'
// import { MenuColumns } from './menu_columns'
// import { Search } from './search'
// import { CellHead } from './cell_head'
// import { CellResize } from './cell_resize'
import { CellHead } from '../cell_head'

import { useTableContext } from '../context'

export const TableHead = Mobx.observer(() => {
  const table = useTableContext()
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {table.columns.map((col) => (
          <CellHead
            key={col.key}
            col={col}
            // onSortClick={() => changeSort(col)}
            // resize={<CellResize table={table} />}
          />
        ))}
      </Mui.TableRow>
    </Mui.TableHead>
  )
})
