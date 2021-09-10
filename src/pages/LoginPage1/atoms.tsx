import { memo, ReactNode, FormEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Button, LinearProgress, Typography } from '@material-ui/core'

export const Page = memo<{ children: ReactNode }>(({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'grid',
      p: 2,
      gridTemplate: `
      ". . ." 1fr 
      ". T ." auto
      ". F ." auto
      ". . ." 1fr / 1fr minmax(auto, 380px) 1fr
      `,
      rowGap: 6,
    }}
  >
    {children}
  </Box>
))

export const Title = memo(() => (
  <Typography variant="h1" fontSize={30} align="center" gridArea="T">
    Panel Rider
  </Typography>
))

export interface FormProps {
  submit(e: FormEvent): void
  disabled: boolean
  loading: boolean
}

export const Form = observer<{ form: FormProps }>(({ children, form }) => (
  <Box
    component="form"
    onSubmit={(e: FormEvent) => form.submit(e)}
    sx={{ gridArea: 'F', display: 'grid', gap: 4, position: 'relative' }}
  >
    {children}
    <SubmitButton form={form} />
    <Loader form={form} />
  </Box>
))

export const SubmitButton = observer<{ form: FormProps }>(({ form }) => (
  <Button
    variant="contained"
    size="large"
    type="submit"
    disabled={form.disabled}
  >
    Войти
  </Button>
))

export const Loader = observer<{ form: FormProps }>(({ form }) =>
  form.loading ? (
    <LinearProgress
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
  ) : null
)
