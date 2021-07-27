import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'grid',
    placeContent: 'center',
    gap: theme.spacing(11),
    alignContent: 'center',
  },

  logo: {
    display: 'grid',
    gap: theme.spacing(3),
    placeItems: 'center',
    fontSize: 22,
    '&  img': {
      background: theme.palette.grey['500'],
    },
  },

  form: {
    minWidth: 370,
    display: 'grid',
    gap: theme.spacing(3),
  },
}))
