import { TableHead, TableRow, TableCell } from '@material-ui/core'

export const GridHead = () => {
  return (
    <TableHead>
      <TableRow>
        {[].map(({ name }, i) => (
          <TableCell key={i}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
