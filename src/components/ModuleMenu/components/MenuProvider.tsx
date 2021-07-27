import { observer } from 'mobx-react-lite'
import { createContext, useContext } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

import { MenuStoreType, useMenuStore } from '../useMenuStore'
import { ModuleMenuProps } from '../ModuleMenu'

type ContextType = MenuStoreType & ModuleMenuProps

const Context = createContext({} as ContextType)

export const useMenuContext = () => useContext(Context)

export const MenuProvider = observer<ModuleMenuProps>(({ children, ...props }) => {
  const theme = useTheme()
  const store = useMenuStore()
  return (
    <Context.Provider value={{ ...store, ...props }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItem: {
              styleOverrides: {
                root: {
                  padding: theme.spacing(1, 1.5),
                  overflow: 'hidden',
                  color: theme.palette.grey['600'],
                },
              },
            },
            MuiListItemIcon: {
              styleOverrides: {
                root: {
                  minWidth: 40,
                },
              },
            },
            MuiListItemText: {
              styleOverrides: {
                primary: {
                  textTransform: 'uppercase',
                  fontSize: 14,
                  fontWeight: 500,
                },
              },
            },
          },
        })}
      >
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
})
