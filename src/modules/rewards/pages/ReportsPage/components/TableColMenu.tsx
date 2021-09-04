import { useRef, forwardRef } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import {
  IconButton,
  IconButtonProps,
  Popover,
  PopoverProps,
  Box,
  Switch,
  Typography,
  Button,
  ButtonProps,
  Stack,
} from '@material-ui/core'
import { ViewWeekSharp } from '@material-ui/icons'

const TableColButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => (
    <IconButton ref={ref} {...props}>
      <ViewWeekSharp />
    </IconButton>
  )
)

const TableColItem = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', p: 1, gap: 1 }}>
    <Switch size="small" />
    <Typography>test</Typography>
  </Box>
)

interface ButtonsProps {
  showAll: ButtonProps['onClick']
  hiddenAll: ButtonProps['onClick']
}

const Buttons = observer<ButtonsProps>(({ hiddenAll, showAll }) => (
  <Stack direction="row" gap={1} p={1}>
    <Button size="small" onClick={hiddenAll}>
      скрыть все
    </Button>
    <Button size="small" onClick={showAll}>
      показать все
    </Button>
  </Stack>
))

export const TableColMenu = observer(() => {
  const state = useTableColMenu()
  return (
    <>
      <TableColButton {...state.button} />
      <Popover {...state.popover}>
        <TableColItem />
        <Buttons hiddenAll={() => null} showAll={() => null} />
      </Popover>
    </>
  )
})

function useTableColMenu() {
  const ref = useRef<HTMLButtonElement>(null)

  return useLocalObservable(() => ({
    _isOpen: false,

    open() {
      this._isOpen = true
    },

    close() {
      this._isOpen = false
    },

    get popover(): PopoverProps {
      return {
        open: this._isOpen,
        onClose: this.close,
        anchorEl: ref.current,
        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
      }
    },

    get button(): IconButtonProps {
      return {
        ref,
        onClick: this.open,
      }
    },
  }))
}
