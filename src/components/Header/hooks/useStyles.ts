import { makeStyles } from '@material-ui/core'

export const useStylesHeader = makeStyles((t) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${t.spacing(1)}px ${t.spacing(2)}px`,
  },
}))
