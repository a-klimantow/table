import { FC } from 'react'
import { Checkbox, CheckboxProps, TableCell } from '@material-ui/core'

export const CheckboxCell: FC<CheckboxProps & { show: boolean }> = ({
  show,
  className,
  ...props
}) =>
  !show ? null : (
    <TableCell className={className} data-action data-freeze>
      <Checkbox color="primary" size="small" {...props} />
    </TableCell>
  )
