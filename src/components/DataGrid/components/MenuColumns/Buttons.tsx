import { Box, Button, ButtonProps } from '@material-ui/core'

import { useGridStore } from '../../hooks'

const defaultProps: ButtonProps = {
  color: 'primary',
}

export const Buttons = () => {
  const store = useGridStore()
  return (
    <Box display="flex" justifyContent="space-between">
      <Button {...defaultProps} onClick={() => store.hiddenAllCols()}>
        Скрыть все
      </Button>
      <Button {...defaultProps} onClick={() => store.showAllCols()}>
        Показать все
      </Button>
    </Box>
  )
}
