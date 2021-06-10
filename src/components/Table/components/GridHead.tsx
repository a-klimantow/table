import { FC } from 'react'
import { TableHead } from '@material-ui/core'

import { GridRowHead } from './styled'

export const GridHead: FC = ({ children }) => (
  <TableHead>
    <GridRowHead>{children}</GridRowHead>
  </TableHead>
)
