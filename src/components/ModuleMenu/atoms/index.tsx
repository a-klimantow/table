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
import { Box } from '@material-ui/system'

// theme provider

export const Provider: FC = ({ children }) => {
  const t = useTheme()
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiBackdrop: { defaultProps: { invisible: true } },
          MuiList: {
            styleOverrides: {
              root: {
                gridArea: 'MENU',
                zIndex: t.zIndex.drawer,
                backgroundColor: t.palette.background.paper,
                borderRight: '1px solid',
                borderColor: t.palette.divider,
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
