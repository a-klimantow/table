import { observer } from 'mobx-react-lite'
import { TableBody, TableRow, TableCell } from '@material-ui/core'

import { useGridStore } from '../../hooks'

export const GridBody = observer(() => {
  const store = useGridStore()
  return (
    <TableBody>
      {store.data.map((row, index) => (
        <TableRow key={index}>
          {store.renderColumns.map(({ field }, i) => (
            <TableCell key={i}>{row[field]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
})
