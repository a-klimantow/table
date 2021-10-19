import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import { Icon } from 'components'
import { useStore } from './store'
import { useLoginContext, LoginContext } from './context'
import { useFetch } from './hooks'

// provider

export const Provider = observer(({ children }) => {
  const store = useStore()
  useFetch(store)
  return <LoginContext.Provider value={store}>{children}</LoginContext.Provider>
})

// login page wrapper

export const Page = observer((props) => {
  return (
    <Mui.Box
      data-app-page
      sx={{
        display: 'grid',
        gridTemplate: `1fr 2fr / auto minmax(auto, 400px) auto`,
        rowGap: 8,
      }}
    >
      {props.children}
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

export const Form = React.memo(() => (
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
    <Email />
    <Password />
    <Button />
  </Mui.Box>
))

// login email

export const Email = observer(() => {
  const { email } = useLoginContext()
  return (
    <Mui.TextField
      value={email.value}
      onChange={(e) => email.changeValue(e.target.value)}
      error={email.error}
      helperText={email.helperText}
      onBlur={() => email.onBlur('Введите корректный e-mail')}
    />
  )
})

// login pass

export const Password = observer(() => {
  const { password } = useLoginContext()

  return (
    <Mui.TextField
      value={password.value}
      onChange={(e) => password.changeValue(e.target.value)}
      error={password.error}
      helperText={password.helperText}
      type={password.type}
      InputProps={{ endAdornment: <TogglePass /> }}
      onBlur={() => password.onBlur('Пароль должен быть не менее 6 символов')}
    />
  )
})

// toggle hidden pass

export const TogglePass = observer(() => {
  const { password } = useLoginContext()
  return (
    <Mui.InputAdornment position="end">
      <Mui.IconButton onClick={password.toggleType}>
        <Icon type={password.isValueHidden ? 'eye_off' : 'eye_on'} />
      </Mui.IconButton>
    </Mui.InputAdornment>
  )
})

// submit button

export const Button = observer(() => {
  const { form } = useLoginContext()
  return (
    <Mui.Button
      type="submit"
      variant="contained"
      size="large"
      onClick={form.submit}
      disabled={form.disabled}
    >
      Войти
      <Loader />
    </Mui.Button>
  )
})

const Loader = observer(() => {
  const { form } = useLoginContext()
  if (!form.data) return null
  return (
    <Mui.LinearProgress
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
  )
})
