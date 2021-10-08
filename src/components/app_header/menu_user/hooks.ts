import { useLocalObservable } from 'mobx-react-lite'
import { ButtonProps, MenuProps } from '@material-ui/core'
import { useAppStore } from 'hooks'

export const useMenuUser = () => {
  const app = useAppStore()

  return useLocalObservable(() => ({
    items: app.userMenu,

    anchor: null as null | Element,
    toggle(el: Element | null) {
      this.anchor = el
    },

    get button(): ButtonProps {
      return {
        onClick: (e) => this.toggle(e.currentTarget),
        children: app.user.name,
      }
    },

    get menu(): MenuProps {
      return {
        open: Boolean(this.anchor),
        anchorEl: this.anchor,
        onClose: () => this.toggle(null),
      }
    },
  }))
}
