import * as Mui from '@mui/material'
import { action } from 'mobx'
import * as Mobx from 'mobx-react-lite'

import { IDataItem as I, ICol as Cell } from '../types'
import { useBody, useHead, useAlign } from './hooks'

export const TableBody = Mobx.observer(() => {
  const items = useBody()
  return (
    <Mui.TableBody>
      {items.map((item, idx) => (
        <BodyRow key={String(item.key ?? item.id ?? idx)} item={item} />
      ))}
    </Mui.TableBody>
  )
})

export const BodyRow = Mobx.observer<{ item: I }>(({ item }) => {
  const head = useHead()
  return (
    <Mui.TableRow
      onClick={action(() => (item.selected = !item.selected))}
      data-selected={item.selected || null}
    >
      {head.map((cell) => (
        <BodyCell key={cell.key} item={item} cell={cell} />
      ))}
    </Mui.TableRow>
  )
})

export const BodyCell = Mobx.observer<{ cell: Cell; item: I }>((props) => {
  const { cell, item } = props
  const align = useAlign(cell)

  if (cell.hidden) return null

  return <Mui.TableCell align={align}>{item[cell.key]}</Mui.TableCell>
})
