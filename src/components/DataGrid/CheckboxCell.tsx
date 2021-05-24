import { FC } from 'react'
import { Checkbox, CheckboxProps } from '@material-ui/core'
import { IndeterminateCheckBox as ChBoxIcon } from '@material-ui/icons'

interface ICheckboxCellProps extends CheckboxProps {
  head?: boolean
}
export const CheckboxCell: FC<ICheckboxCellProps> = ({ head = false, className, ...props }) => (
  <div
    data-head={head || null}
    data-cell={!head || null}
    data-checkbox
    className={className}
    data-freeze
  >
    <Checkbox indeterminateIcon={<ChBoxIcon color="primary" />} color="primary" {...props} />
  </div>
)
