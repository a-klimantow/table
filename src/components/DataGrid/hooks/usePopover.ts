import { useState, MouseEvent } from 'react'
import { PopoverProps } from '@material-ui/core'

export const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const close = () => setAnchorEl(null)

  return {
    props: {
      open: Boolean(anchorEl),
      anchorEl,
      onClose: close,
      anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
    } as PopoverProps,
    open,
  }
}
