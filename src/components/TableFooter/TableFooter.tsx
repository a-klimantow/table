import { FC } from 'react'
import { styled, TablePagination } from '@material-ui/core'

export const TableFooter: FC = ({ children }) => (
  <TableFooterStyled>
    {children}
    <TablePagination
      count={10}
      page={0}
      onPageChange={() => null}
      rowsPerPage={10}
      labelDisplayedRows={({ from, to, count }) => `${from}-${to} из ${count}`}
      labelRowsPerPage="Строк на странице"
    />
  </TableFooterStyled>
)

const TableFooterStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  minHeight: theme.spacing(7),

  '& > :last-child': {
    marginLeft: 'auto',
  },
}))
