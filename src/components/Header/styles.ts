import { styled, MenuItem } from '@material-ui/core'

export const HeaderWrap = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const MenuItemLink = styled(MenuItem)(({ theme }) => ({
  padding: 0,
  '& > a': {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(1, 2),
  },
  '& > a.active': {
    color: theme.palette.primary.main,
  },
}))
