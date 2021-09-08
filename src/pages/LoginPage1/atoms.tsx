import { memo, ReactNode, FormEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Button, ButtonProps, LinearProgress } from '@material-ui/core'

export const Page = memo<{ children: ReactNode }>(({ children }) => (
  <Box
    sx={{
      display: 'grid',
      minHeight: '100vh',
      placeContent: 'center',
    }}
  >
    {children}
  </Box>
))

interface FormProps {
  children: ReactNode
  submit(e: FormEvent): void
}

export const Form = memo<FormProps>(({ children, submit }) => (
  <Box
    component="form"
    onSubmit={submit}
    sx={{
      minWidth: 380,
      display: 'grid',
      gap: 4,
    }}
  >
    {children}
  </Box>
))

export const SubmitButton = observer<{ button: ButtonProps }>(({ button }) => (
  <Button {...button}>Войти</Button>
))

export interface PageLoaderProps {
  show: boolean
}
export const PageLoader = observer<{ loader: PageLoaderProps }>(({ loader }) =>
  loader.show ? (
    <LinearProgress
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
  ) : null
)
