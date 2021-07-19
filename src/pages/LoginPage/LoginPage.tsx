import React  from 'react';
import { Store } from './ObservableLoginStore';
import { observer } from 'mobx-react-lite';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  InputAdornment, IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useStyles } from './styles';

const store = new Store();

const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
  evt.preventDefault();
  store.submitForm();
}

export const LoginPage = observer(() => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.formContainer}>
        <Box className={classes.logoContainer} />
        <Typography component='h1' variant='h6' align='center' className={classes.header}>
          PanelRider
        </Typography>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Typography component='p' variant='body1'>
            Вход в систему
          </Typography>
          <TextField
            variant='outlined'
            label='E-mail'
            size='small'
            type='email'
            value={store.login}
            onChange={(evt) => store.changeLogin(evt.target.value)}
            error={Boolean(store.loginError)}
            helperText={store.loginError}
          />
          <TextField
            variant='outlined'
            label='Пароль'
            size='small'
            type={store.isShowPassword ? 'text' : 'password'}
            value={store.password}
            onChange={(evt) => store.changePassword(evt.target.value)}
            error={Boolean(store.passwordError)}
            helperText={store.passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={store.switchShowingPassword}
                    onMouseDown={store.switchShowingPassword}
                  >
                    {store.isShowPassword ? <Visibility /> : <VisibilityOff />}
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
});
