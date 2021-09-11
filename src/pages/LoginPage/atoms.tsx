import { memo, FC } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  ButtonProps,
  IconButton,
  LinearProgress,
  Typography,
  TextFieldProps,
  TextField,
  InputAdornment,
  Box,
  BoxProps,
} from '@material-ui/core'

import { Icon } from 'components'

export const Layout: FC<BoxProps> = ({ children }) => (
  <Box
    sx={{
      border: 1,
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: `
      ". . ." 1fr
      ". T ." 80px
      ". F ." auto
      ". . ." 1fr/ auto minmax(auto, 400px) auto
      `,
      gap: 2,
      '& form': { display: 'inherit', gridArea: 'F', gap: 4 },
    }}
  >
    {children}
  </Box>
)

export const Title = memo(() => (
  <Typography variant="h1" fontSize={30} align="center" gridArea="T">
    Panel Rider
  </Typography>
))

export type EmailProps = TextFieldProps

export const Email = observer<{ email: EmailProps }>(({ email }) => (
  <TextField {...email} />
))

export type PasswordProps = TextFieldProps & { onToggle?(): void }

export const Password = observer<{ password: PasswordProps }>(
  ({ password }) => {
    const { onToggle, ...rest } = password
    return (
      <TextField
        {...rest}
        InputProps={{
          endAdornment: (
            <ToggleButton
              hidden={password.type === 'password'}
              click={onToggle}
            />
          ),
        }}
      />
    )
  }
)

const ToggleButton = observer<{ hidden: boolean; click?(): void }>(
  ({ hidden, click }) => (
    <InputAdornment position="end">
      <IconButton onClick={click}>
        <Icon type={hidden ? 'eye_off' : 'eye_on'} />
      </IconButton>
    </InputAdornment>
  )
)

export type SubmitButtonProps = ButtonProps & {
  isLoading(): boolean
  isDisabled(): boolean
}

export const SubmitButton = observer<{ button: SubmitButtonProps }>(
  ({ button }) => {
    const { isDisabled, isLoading, ...rest } = button
    return (
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isDisabled()}
        {...rest}
      >
        Войти
        {isLoading() && <Loader />}
      </Button>
    )
  }
)

const Loader = () => (
  <LinearProgress sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }} />
)
