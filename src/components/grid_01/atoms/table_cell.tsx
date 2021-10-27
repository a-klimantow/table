import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { TableResize } from './table_resize'

import { ICol as C, IDataItem as I } from '../types'

export interface CellProps {
  cell: C
  item?: I
  index: number
}

function useCellNode(props: CellProps): Mui.TableCellProps['children'] {
  const { item, cell } = props
  if (item) return cell.renderCell ? cell.renderCell(item) : item[cell.key]
  return cell.name
}

function useHidden(props: CellProps) {
  const { cell } = props
  return cell.hidden || null
}

function useFreeze(props: CellProps) {
  const { index } = props
  return index === 0 || null
}

export const TableCell = Mobx.observer<CellProps>((props) => {
  const node = useCellNode(props)
  const hidden = useHidden(props)
  const freeze = useFreeze(props)

  return (
    <Mui.TableCell data-hidden={hidden} data-freeze={freeze}>
      {node}
      <TableResize {...props} />
    </Mui.TableCell>
  )
})
