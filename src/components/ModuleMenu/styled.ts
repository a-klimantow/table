import { ListItemButton, Theme } from '@material-ui/core'

import { withStyles } from '@material-ui/styles'

export const ItemStyled = withStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '24px auto',
    gap: theme.spacing(1.5),
    padding: theme.spacing(1, 1.5),
    overflow: 'hidden',
    fontWeight: 500,
    color: theme.palette.grey['600'],
    position: 'relative',

    '& > span:first-of-type': {
      gridColumn: 2,
    },

    '&[data-submenu] > span:first-of-type': {
      color: 'red',
    },
  },
}))(ListItemButton)
