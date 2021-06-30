import { TableHead, TableRow, TableCell } from '@material-ui/core'

import { useDataGridContext } from '../hooks'

export const GridHead = () => {
  const { memoColumns } = useDataGridContext()
  return (
    <TableHead>
      <TableRow>
        {memoColumns.map(({ name }, i) => (
          <TableCell key={i}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
