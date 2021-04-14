import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((t) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: t.spacing(1),
  },
  item: {
    padding: 0,
    '& > a': {
      display: 'flex',
      flex: 1,
      padding: t.spacing(1, 2),
    },
  },
}))
