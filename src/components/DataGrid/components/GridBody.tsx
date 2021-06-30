import { TableBody, TableRow, TableCell } from '@material-ui/core'

import { useDataGridContext } from '../hooks'

export const GridBody = () => {
  const { memoColumns, data } = useDataGridContext()
  return (
    <TableBody>
      {data.map((row, index) => (
        <TableRow key={index}>
          {memoColumns.map(({ field }, i) => (
            <TableCell key={i}>{row[field]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
