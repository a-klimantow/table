import { memo } from 'react'
import { observer, Observer } from 'mobx-react-lite'
import { TableBody, TableRow, TableCell } from '@material-ui/core'

import { useGridContext } from './context'

export const Body = observer(() => {
  const grid = useGridContext()
  return (
    <TableBody>
      {grid.rows.map((row, i) => (
        <Row key={i} row={row} />
      ))}
    </TableBody>
  )
})

type R = ReturnType<typeof useGridContext>['rows'][number]

const Row = memo<{ row: R }>(({ row }) => {
  const grid = useGridContext()
  return (
    <TableRow>
      {grid.columns.map((c) => (
        <Observer key={c.key}>
          {() => (
            <TableCell data-hidden={c.hidden || null}>{row[c.key]}</TableCell>
          )}
        </Observer>
      ))}
    </TableRow>
  )
})
