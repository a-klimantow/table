import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    padding: theme.spacing(3),
  },
  formContainer: {
    width: '400px',
    padding: theme.spacing(7, 4),
  },
  logoContainer: {
    width: '125px',
    height: '125px',
    margin: theme.spacing(0, 'auto', 3),
    backgroundColor: 'grey',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(11),
  },
}))
