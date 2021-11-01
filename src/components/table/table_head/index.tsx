import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { CellHead } from '../cell_head'

import { useTableContext } from '../context'

export const TableHead = Mobx.observer(() => {
  const table = useTableContext()
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {table.columns.map((col) => (
          <CellHead key={col.key} col={col} />
        ))}
      </Mui.TableRow>
    </Mui.TableHead>
  )
})
