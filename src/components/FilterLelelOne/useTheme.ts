import { useMemo } from 'react'
import { useTheme as useMuiTheme, createTheme } from '@material-ui/core'

export function useTheme() {
  const theme = useMuiTheme()
  return useMemo(
    () =>
      createTheme({
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                display: 'grid',
                gridTemplateColumns: '30px 1fr 30px',
                placeItems: 'center',
                padding: theme.spacing(0, 0.5),
                gap: theme.spacing(0.5),
                height: theme.spacing(4),
              },
            },
            defaultProps: {
              variant: 'outlined',
            },
          },

          MuiInputBase: {
            styleOverrides: {
              root: {
                fontSize: 12,
              },
            },
            defaultProps: {
              placeholder: 'Поиск...',
            },
          },

          MuiSvgIcon: {
            defaultProps: {
              color: 'action',
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
    [theme]
  )
}
