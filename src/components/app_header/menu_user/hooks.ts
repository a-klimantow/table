import { useLocalObservable } from 'mobx-react-lite'
import { ButtonProps, MenuProps } from '@material-ui/core'
import { useAppStore } from 'hooks'

export const useMenuUser = () => {
  const app = useAppStore()

  return useLocalObservable(() => ({
    anchor: null as null | Element,

    toggle(el: Element | null) {
      this.anchor = el
    },

    items: app.userMenu,

    get button(): ButtonProps {
      return {
        onClick: (e) => this.toggle(e.currentTarget),
        name: app.user.name || 'Пользователь',
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
