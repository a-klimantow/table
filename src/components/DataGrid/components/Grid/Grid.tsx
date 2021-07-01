import { TableContainer, Table } from '@material-ui/core'

import { GridHead } from './GridHead'
import { GridBody } from './GridBody'

export const Grid = () => (
  <TableContainer>
    <Table>
      <GridHead />
      <GridBody />
    </Table>
  </TableContainer>
)
