import { action } from 'mobx'
import { useLocalObservable } from 'mobx-react-lite'
import { PopoverProps, ButtonProps, InputProps } from '@material-ui/core'

export function useImport() {
  return useLocalObservable(() => ({
    open: false,
    data: null as FormData | null,

    get popover(): PopoverProps {
      return {
        open: this.open,
        onClose: action(() => (this.open = false)),
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
      }
    },

    get button(): ButtonProps {
      return {
        onClick: action(() => (this.open = true)),
      }
    },

    get uKassa(): InputProps {
      return {
        type: 'file',
        sx: { display: 'none' },
      }
    },
  }))
}
