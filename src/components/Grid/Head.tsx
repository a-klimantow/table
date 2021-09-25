import { TableRow, TableCell } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { ICol } from 'types'
import { useGridContext } from './context'

export const Head = () => {
  const grid = useGridContext()
  return (
    <TableRow>
      {grid.columns.map((col) => (
        <HeadItem
          key={col.key}
          item={col}
          quickFilter={grid.quickFilter.includes(col.name)}
        />
      ))}
    </TableRow>
  )
}

const HeadItem = observer<{ item: ICol; quickFilter?: boolean }>(
  ({ item, quickFilter }) => (
    <TableCell data-hidden={item.hidden || null} data-qf={quickFilter || null}>
      {item.name}
    </TableCell>
  )
)
