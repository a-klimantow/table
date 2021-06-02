import { FC, MouseEvent, TouchEvent } from 'react'
import { Remove as ResizeIcon } from '@material-ui/icons'

interface IGridCell {
  head?: boolean
  freeze?: boolean
  width: number
  className: string
}

export const GridCell: FC<IGridCell> = ({ head = false, freeze = false, width, ...props }) => {
  return (
    <div
      style={{ width }}
      data-freeze={freeze || null}
      data-head={head || null}
      data-cell={!head || null}
      {...props}
    />
  )
}
