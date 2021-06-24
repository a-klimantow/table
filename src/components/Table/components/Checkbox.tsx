import { memo } from 'react'
import { Checkbox as MuiCheckbox, CheckboxProps } from '@material-ui/core'

interface Props extends CheckboxProps {
  show: boolean
  header?: boolean
  rowIndex?: number
}

export const Checkbox = memo<Props>(({ header = false, show = false, rowIndex, ...props }) => {
  if (!show) return null

  if (header)
    return (
      <th data-checkbox>
        <MuiCheckbox color="primary" size="small" inputProps={{ name: 'all' }} {...props} />
      </th>
    )

  return (
    <td data-checkbox>
      <MuiCheckbox
        color="primary"
        size="small"
        inputProps={{ name: String(rowIndex) }}
        {...props}
      />
    </td>
  )
})
