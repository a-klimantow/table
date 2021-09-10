import { FC, useMemo, memo } from 'react'
import {
  ThemeProvider,
  createTheme,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

import { Icon } from 'components'

export const Provider: FC = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiOutlinedInput: {
            defaultProps: {
              sx: {
                letterSpacing: 1,
                bgcolor: 'background.paper',
              },
            },
          },

          MuiFormHelperText: {
            defaultProps: {
              sx: {
                position: 'absolute',
                top: '100%',
                whiteSpace: 'nowrap',
                left: -14,
              },
            },
          },
        },
      }),
    []
  )
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

interface BtnProps {
  hidden: boolean
  click(): void
}

export const Button = memo<BtnProps>(({ hidden, click }) => (
  <InputAdornment position="end">
    <IconButton onClick={click}>
      {hidden ? <Icon type="eye_off" /> : <Icon type="eye_on" />}
    </IconButton>
  </InputAdornment>
))
