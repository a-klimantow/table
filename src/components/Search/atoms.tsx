import { useMemo, memo, FC } from 'react'

import {
  IconButton,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from '@material-ui/core'

import { Icon } from 'components'

export const Provider: FC = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiOutlinedInput: {
            defaultProps: {
              size: 'small',
              sx: { fontSize: 12, pr: 0.5, width: 230, bgcolor: 'white' },
            },
          },
          MuiSvgIcon: {
            defaultProps: {
              fontSize: 'small',
            },
          },

          MuiIconButton: {
            defaultProps: {
              size: 'small',
            },
          },
        },
      }),
    []
  )
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const SearchIcon = memo(() => (
  <InputAdornment position="start">
    <Icon type="search" />
  </InputAdornment>
))

export const Button = memo<{ clear(): void; show: boolean }>((props) =>
  props.show ? (
    <InputAdornment position="end">
      <IconButton onClick={props.clear}>
        <Icon type="search_clear" />
      </IconButton>
    </InputAdornment>
  ) : null
)
