import { TableBody, TableRow, TableCell } from '@material-ui/core'

export const GridBody = () => {
  return (
    <TableBody>
      {[].map((row, index) => (
        <TableRow key={index}>
          {[].map(({ field }, i) => (
            <TableCell key={i}>{row[field]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}
