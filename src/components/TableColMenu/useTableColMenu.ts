import React from 'react'

import { useLocalObservable } from 'mobx-react-lite'
import { IconButtonProps, PopoverProps } from '@material-ui/core'

const menuStore = {
  open: false,
  toggleMenu(type: 'open' | 'close' | 'toggle') {
    switch (type) {
      case 'open':
        this.open = true
        break
      case 'close':
        this.open = false
        break
      case 'toggle':
        this.open = !this.open
        break
      default:
        console.error(type)
        break
    }
  },
}

type HookType = () => { button: IconButtonProps; popover: PopoverProps }

export const useTableColMenu: HookType = () => {
  const ref = React.useRef<HTMLButtonElement>(null)
  const store = useLocalObservable(() => menuStore)
  return {
    button: {
      ref,
      onClick: () => store.toggleMenu('open'),
    },
    popover: {
      open: store.open,
      onClose: () => store.toggleMenu('close'),
      anchorEl: ref.current,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    },
  }
}
