import * as React from 'react'
import * as Mui from '@mui/material'

export const useMenuTheme = () => {
  const t = Mui.useTheme()
  return React.useMemo(
    () =>
      Mui.createTheme({
        components: {
          MuiTypography: {
            defaultProps: {
              sx: {
                gridColumn: 2,
                placeSelf: 'start',
              },
            },
          },

          MuiButtonBase: {
            defaultProps: {
              sx: {
                display: 'grid',
                gridTemplateColumns: '48px 1fr 20px',
                placeItems: 'center',
                py: 1.5,
                width: '100%',
                transition: 'color .5s ease, background .5s ease',
                '&[data-active=true]': {
                  color: t.palette.primary.main,
                  background: t.palette.action.selected,
                },
              },
            },
          },

          MuiTooltip: {
            defaultProps: {
              placement: 'right',
            },
          },
        },
      }),
    [t]
  )
}
