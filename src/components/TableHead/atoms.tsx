import { memo, ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

import { ICol } from 'types'

export const Head = memo<{ children: ReactNode }>(({ children }) => (
  <TableHead>
    <TableRow>{children}</TableRow>
  </TableHead>
))

export const HeadItem = observer<{ item: ICol }>(({ item }) => (
  <TableCell
    sx={{
      height: 48,
      bgcolor: 'grey.50',
      p: 1,
      display: item.hidden ? 'none' : 'table-cell',
    }}
  >
    {item.name}
  </TableCell>
))
