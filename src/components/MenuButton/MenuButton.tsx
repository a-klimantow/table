import { forwardRef } from 'react'
import { Button, ButtonProps } from '@material-ui/core'

export const MenuButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, startIcon, endIcon }, ref) => (
    <Button
      ref={ref}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        textTransform: 'capitalize',
        color: 'inherit',
        fontWeight: 400,
      }}
    >
      {children}
    </Button>
  )
)
