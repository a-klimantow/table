import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import { useFetchLogin } from 'hooks'
import * as Btn from 'components/buttons'
import { useLoginForm } from './hooks'

type F = ReturnType<typeof useLoginForm>

// login page wrapper

export const Page: React.FC = ({ children }) => {
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
}

// title page

export const Title: React.FC = () => (
  <Mui.Typography
    sx={{
      gridArea: '1 / 2 / 2 / 3',
      placeSelf: 'end center',
      fontSize: 30,
    }}
  >
    Panel Rider
  </Mui.Typography>
)

// login form

export const Form = observer(() => {
  const form = useLoginForm()
  useFetchLogin(form)
  return (
    <Mui.Box
      component="form"
      onSubmit={form.submit}
      gridArea="2 / 2 / 3 / 3"
      sx={{
        placeSelf: 'start stretch',
        display: 'grid',
        gridAutoRows: 90,
        placeItems: 'start stretch',
      }}
    >
      <Email form={form} />
      <Password form={form} />
      <Button form={form} />
    </Mui.Box>
  )
})

// login email

export const Email = observer<{ form: F }>(({ form }) => (
  <Mui.TextField
    value={form.data.email}
    onChange={(e) => form.setValue('email', e.target.value)}
    error={Boolean(form.errors.email)}
    helperText={form.errors.email}
    onBlur={() => form.onBlur('email')}
  />
))

// login pass

export const Password = observer<{ form: F }>(({ form }) => (
  <Mui.TextField
    value={form.data.password}
    onChange={(e) => form.setValue('password', e.target.value)}
    error={Boolean(form.errors.password)}
    helperText={form.errors.password}
    type={form.type}
    onBlur={() => form.onBlur('password')}
    InputProps={{ endAdornment: <EndAdorment form={form} /> }}
  />
))

// toggle hidden pass

const EndAdorment = React.memo<{ form: F }>(({ form }) => (
  <Mui.InputAdornment position="end">
    <Btn.TogglePass
      hidden={form.type === 'password'}
      onClick={form.toggleType}
    />
  </Mui.InputAdornment>
))

// submit button

export const Button = observer<{ form: F }>(({ form }) => (
  <Btn.Submit
    variant="contained"
    size="large"
    disabled={form.disabled}
    loading={form.loading}
  >
    Войти
  </Btn.Submit>
))
