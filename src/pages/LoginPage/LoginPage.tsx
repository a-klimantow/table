import {
  Button,
  TextField,
  Typography,
  makeStyles,
  Container,
  Box,
  InputAdornment, IconButton,
} from '@material-ui/core';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
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
}));

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const classes = useStyles();

  const switchIsShowingPassword = (): void => {
    setIsShowPassword((isShowPassword) => !isShowPassword);
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.formContainer}>
        <Box className={classes.logoContainer} />
        <Typography component='h1' variant='h6' align='center' className={classes.header}>
          PanelRider
        </Typography>
        <form className={classes.form}>
          <Typography component='p' variant='body1'>
            Вход в систему
          </Typography>
          <TextField
            variant='outlined'
            label='E-mail'
            size='small'
            type='email'
            error
            helperText='Пользователь с таким E-mail не зарегистрирован'
          />
          <TextField
            variant='outlined'
            label='Пароль'
            size='small'
            type={isShowPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={switchIsShowingPassword}
                    onMouseDown={switchIsShowingPassword}
                  >
                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant='contained' color='primary' size='large' type='submit'>
            Войти
          </Button>
        </form>
      </Box>
    </Container>
  );
};
