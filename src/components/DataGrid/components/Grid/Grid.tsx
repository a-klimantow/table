import { TableContainer, Table, styled } from '@material-ui/core'

import { useHandleScroll } from '../../hooks'
import { GridHead } from './GridHead'
import { GridBody } from './GridBody'

export const Grid = () => (
  <TableContainerStyled onScroll={useHandleScroll()}>
    <TableStyled>
      <GridHead />
      <GridBody />
    </TableStyled>
  </TableContainerStyled>
)

const TableStyled = styled(Table)({
  borderCollapse: 'separate',
  borderSpacing: 0,
  whiteSpace: 'nowrap',
})

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  '&[data-scroll] [data-freeze]': {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))
