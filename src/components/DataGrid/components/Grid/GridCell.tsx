import { withStyles, TableCell } from '@material-ui/core'

export const GridCell = withStyles((theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&[data-freeze], &[data-checkbox]': {
      position: 'sticky',
      left: 0,
      zIndex: 1,
    },

    '&[data-checkbox]': {
      padding: 0,
      '& ~ [data-freeze]': {
        left: 42,
      },
    },
  },

  head: {
    background: theme.palette.grey['50'],
  },

  body: {
    background: theme.palette.background.paper,
    padding: theme.spacing(0.5, 1),
  },
}))(TableCell)
