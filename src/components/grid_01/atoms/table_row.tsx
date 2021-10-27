import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { IDataItem as I } from '../types'
import { useGridContext } from '../context'
import { TableCell } from './table_cell'

interface TableRowProps {
  item?: I
}

function useTableRow(props: TableRowProps) {
  const grid = useGridContext()
  const { item } = props
  return {
    cells: grid.columns,
    item,
  }
}

function useRowProps(props: TableRowProps) {
  const { item } = props
  return {
    hover: !!item,
  }
}

export const TableRow = Mobx.observer<TableRowProps>((props) => {
  const { cells, item } = useTableRow(props)
  const rowProps = useRowProps(props)
  return (
    <Mui.TableRow {...rowProps}>
      {cells.map((cell, i) => (
        <TableCell key={cell.key} cell={cell} item={item} index={i} />
      ))}
    </Mui.TableRow>
  )
})
