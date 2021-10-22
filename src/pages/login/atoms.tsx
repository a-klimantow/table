import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import { Icon } from 'components'
import { StoreType as S } from './store'

// login page wrapper

export const Page = observer(({ children }) => {
  return (
    <Mui.Box
      data-app-page
      sx={{
        display: 'grid',
        gridTemplate: `1fr 2fr / auto minmax(auto, 400px) auto`,
        rowGap: 8,
      }}
    >
      {children}
    </Mui.Box>
  )
})

// title page

export const Title = React.memo(() => (
  <Mui.Typography
    sx={{
      gridArea: '1 / 2 / 2 / 3',
      placeSelf: 'end center',
      fontSize: 30,
    }}
  >
    Panel Rider
  </Mui.Typography>
))

// login form

export const Form = observer(({ children }) => (
  <Mui.Box
    component="form"
    onSubmit={(e: React.FormEvent) => e.preventDefault()}
    gridArea="2 / 2 / 3 / 3"
    sx={{
      placeSelf: 'start stretch',
      display: 'grid',
      gridAutoRows: 90,
      placeItems: 'start stretch',
    }}
  >
    {children}
  </Mui.Box>
))

// login email

export const Email = observer<{ email: S['email'] }>(({ email }) => (
  <Mui.TextField
    value={email.value}
    onChange={(e) => email.changeValue(e.target.value)}
    error={email.error}
    helperText={email.helperText}
    onBlur={() => email.onBlur('Введите корректный e-mail')}
  />
))

// login pass

export const Password = observer<{ password: S['password'] }>(
  ({ password }) => (
    <Mui.TextField
      value={password.value}
      onChange={(e) => password.changeValue(e.target.value)}
      error={password.error}
      helperText={password.helperText}
      type={password.type}
      InputProps={{ endAdornment: <TogglePass password={password} /> }}
      onBlur={() => password.onBlur('Пароль должен быть не менее 6 символов')}
    />
  )
)

// toggle hidden pass

export const TogglePass = observer<{ password: S['password'] }>(
  ({ password }) => (
    <Mui.InputAdornment position="end">
      <Mui.IconButton onClick={password.toggleType}>
        <Icon type={password.isValueHidden ? 'eye_off' : 'eye_on'} />
      </Mui.IconButton>
    </Mui.InputAdornment>
  )
)

// submit button

export const Button = observer<{ store: S }>(({ store }) => (
  <Mui.Button
    type="submit"
    variant="contained"
    size="large"
    onClick={store.submit}
    disabled={store.disabled}
  >
    Войти
    {store.data ? <Loader /> : null}
  </Mui.Button>
))

const Loader = React.memo(() => (
  <Mui.LinearProgress
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    }}
  />
))
