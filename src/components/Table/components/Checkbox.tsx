import { memo } from 'react'
import { Checkbox as MuiCheckbox, CheckboxProps, TableCell } from '@material-ui/core'

interface Props extends CheckboxProps {
  show: boolean
}

export const Checkbox = memo<Props>(({ show, name, ...props }) => {
  if (!show) return null

  return (
    <TableCell data-checkbox>
      <MuiCheckbox inputProps={{ name }} {...props} />
    </TableCell>
  )
})
