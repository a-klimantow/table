import { useRef } from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { IconButtonProps, PopoverProps } from '@material-ui/core'

type HookType = {
  button: IconButtonProps
  popover: PopoverProps
}

const initialState = {
  open: false,
  toggle() {
    this.open = !this.open
  },
}

export function usePopover(): HookType {
  const state = useLocalObservable(() => initialState)
  const ref = useRef(null)
  return {
    button: { ref, onClick: () => state.toggle() },
    popover: {
      open: state.open,
      onClose: () => state.toggle(),
      anchorEl: ref.current,
      anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
    },
  }
}
