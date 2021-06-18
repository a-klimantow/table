import { FC } from 'react'
import { styled } from '@material-ui/core'

export const TableFooter: FC = ({ children }) => (
  <TableFooterStyled>
    {children}
    <div>table footer</div>
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
