import { memo, FC } from 'react'
import { observer } from 'mobx-react-lite'
import {
  Button,
  ButtonProps,
  LinearProgress,
  Typography,
  Box,
  BoxProps,
} from '@material-ui/core'

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

export type SubmitButtonProps = ButtonProps & { loading: boolean }

export const SubmitButton = observer<{ button: SubmitButtonProps }>(
  ({ button }) => {
    const { loading, ...rest } = button
    return (
      <Button type="submit" variant="contained" size="large" {...rest}>
        Войти
        {loading && <Loader />}
      </Button>
    )
  }
)

const Loader = () => (
  <LinearProgress sx={{ position: 'absolute', left: 0, right: 0, bottom: 0 }} />
)
