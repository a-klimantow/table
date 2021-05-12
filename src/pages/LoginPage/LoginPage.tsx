import { Button, TextField, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    alignContent: 'center',
    padding: theme.spacing(3),
  },
  form: {
    display: 'inherit',
    gridGap: theme.spacing(2),
    maxWidth: 400,
    marginTop: theme.spacing(5),
  },
}))

export const LoginPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h4" align="center">
        Panel Rider
      </Typography>
      <form className={classes.form}>
        <TextField variant="outlined" size="small" />
        <TextField variant="outlined" size="small" />
        <Button variant="contained" color="primary" size="large">
          Войти
        </Button>
      </form>
    </div>
  )
}
