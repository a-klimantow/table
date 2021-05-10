import { styled, makeStyles } from '@material-ui/core'

export const HeaderWrap = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const useStyles = makeStyles((t) => ({
  item: {
    padding: 0,
  },
  navlink: {
    display: 'flex',
    flex: 1,
    padding: t.spacing(1, 2),
    '&.active': {
      color: t.palette.primary.main,
    },
  },
}))
