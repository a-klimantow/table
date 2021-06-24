import { memo } from 'react'
import { TableCell } from '@material-ui/core'

interface IHeadCellProps {
  isFreeze: true | null
  name?: string
  field: string
}

export const HeadCell = memo<IHeadCellProps>(({ name, field, isFreeze = null, ...props }) => {
  return (
    <th data-freeze={isFreeze} {...props}>
      <div>{name ?? field}</div>
      <div data-resize />
    </th>
  )
})
