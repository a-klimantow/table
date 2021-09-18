import { FC, useMemo } from 'react'
import {
  createTheme,
  ThemeProvider,
  List,
  Backdrop,
  useTheme,
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'

export * from './MenuItem'
import { useMenu, MenuContextProvider } from '../store'

// theme provider

export const Provider: FC = ({ children }) => {
  const t = useTheme()
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiBackdrop: { defaultProps: { invisible: true } },
          MuiList: {
            defaultProps: {
              sx: {
                gridArea: 'M',
                bgcolor: 'grey.200',
                borderRight: 1,
                borderColor: 'divider',
                minWidth: '100%',
                transition: 'min-width .3s ease',
                overflow: 'hidden',
                '&[data-open=true]': {
                  minWidth: '300px',
                },
              },
            },
          },
          MuiListItem: {
            styleOverrides: {
              root: {
                paddingLeft: 12,
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                alignItems: 'center',
                position: 'relative',
                color: t.palette.grey['700'],
              },
            },
          },
          MuiListItemText: {
            styleOverrides: {
              primary: {
                textTransform: 'uppercase',
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                gridColumn: '2',
              },
            },
          },
          MuiSvgIcon: {
            defaultProps: {
              color: 'action',
            },
          },
        },
      }),
    [t]
  )
  return (
    <ThemeProvider theme={theme}>
      <MenuContextProvider>
        <MenuList>{children}</MenuList>
      </MenuContextProvider>
    </ThemeProvider>
  )
}

const MenuList = observer(({ children }) => {
  const menu = useMenu()
  return (
    <>
      <Backdrop open={menu.open} onClick={() => menu.close()} />
      <List data-open={menu.open}>{children}</List>
    </>
  )
})
