import { observer } from 'mobx-react-lite'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

import { useGridStore } from '../../hooks'

export const GridHead = observer(() => {
  const store = useGridStore()
  return (
    <TableHead>
      <TableRow>
        {store.renderColumns.map(({ name }, i) => (
          <TableCell key={i}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
})
