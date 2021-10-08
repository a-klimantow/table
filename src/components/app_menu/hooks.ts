import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useLocalObservable } from 'mobx-react-lite'
import { useAppStore } from 'hooks'

export type MenuStateType = ReturnType<typeof useMenuState>

export const useMenuState = () => {
  const app = useAppStore()
  return useLocalObservable(() => ({
    isOpen: false,
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },

    toggle() {
      return this.isOpen ? this.close() : this.open()
    },

    pageMenus: app.pageMenus,
  }))
}

export const useTheme = () =>
  React.useMemo(
    () =>
      Mui.createTheme({
        components: {
          MuiCollapse: {
            defaultProps: {
              orientation: 'horizontal',
              collapsedSize: 48,
              sx: { borderRight: 1, borderColor: 'divider' },
            },
          },
        },
      }),
    []
  )
