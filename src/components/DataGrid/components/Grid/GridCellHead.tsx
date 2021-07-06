import { memo, ReactNode } from 'react'

import { GridCell } from './GridCell'
import { Resize } from './Resize'

interface Props {
  isFreeze: true | null
  field: string
  width: number | ''
  children: ReactNode
}

export const GridCellHead = memo<Props>(({ isFreeze, field, width, children }) => (
  <GridCell
    data-freeze={isFreeze}
    data-field={field}
    style={{
      minWidth: width,
      maxWidth: width,
    }}
  >
    {children}
    <Resize />
  </GridCell>
))
