import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { IDataItem as I } from '../types'
import { useGridContext } from '../context'
import { TableCell } from './table_cell'

function useTableRow() {
  const grid = useGridContext()

  return {
    cells: grid.currentCols,
  }
}

export const TableRow = Mobx.observer<{ item?: I }>((props) => {
  const { cells } = useTableRow()
  return (
    <Mui.TableRow>
      {cells.map((cell, i) => (
        <TableCell key={cell.key} cell={cell} item={props.item} index={i} />
      ))}
    </Mui.TableRow>
  )
})
