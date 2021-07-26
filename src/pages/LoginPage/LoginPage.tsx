import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button, TextField, Typography, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Store } from './ObservableLoginStore'
import { useStyles } from './styles'

const store = new Store()

const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
  evt.preventDefault()
  store.submitForm()
}

export const LoginPage = observer(() => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img width="125px" height="125px" />
        PanelRider
      </div>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <Typography component="p" variant="body1">
          Вход в систему
        </Typography>
        <TextField
          variant="outlined"
          label="E-mail"
          size="small"
          type="email"
          value={store.login}
          onChange={(evt) => store.changeLogin(evt.target.value)}
          error={Boolean(store.loginError)}
          helperText={store.loginError}
        />
        <TextField
          variant="outlined"
          label="Пароль"
          size="small"
          type={store.isShowPassword ? 'text' : 'password'}
          value={store.password}
          onChange={(evt) => store.changePassword(evt.target.value)}
          error={Boolean(store.passwordError)}
          helperText={store.passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={store.switchShowingPassword}
                  onMouseDown={store.switchShowingPassword}
                >
                  {store.isShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Войти
        </Button>
      </form>
    </div>
  )
})
