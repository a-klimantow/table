import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as C, IDataItem as I } from '../types'
import { useGridContext } from '../context'
import { TableResize, useResize } from './table_resize'

type CP = { cell: C; item?: I; index: number }
type B = { cell: C; item: I; index: number }
type H = Omit<B, 'item'>

const useFilterQuick = (cell: C) => cell.filterQuick || null

const useAlign = (cell: C): typeof cell.align =>
  cell.align ?? cell.type === 'string' ? 'left' : 'right'

const useHeadNode = (cell: C) => <HeadName name={cell.name} />

const useSortedProps = (props: H): Mui.TableSortLabelProps => {
  const grid = useGridContext()
  const { cell } = props

  return {
    direction: cell.sorted,
    active: !!cell.sorted,
    onClick: () => grid.setSorted(cell),
  }
}

const HeadName = React.memo<{ name: C['name'] }>(({ name }) => (
  <Mui.Box
    width="100%"
    flexShrink={1}
    whiteSpace="nowrap"
    textOverflow="ellipsis"
    overflow="hidden"
  >
    {name}
  </Mui.Box>
))

const Head = Mobx.observer<H>((props) => (
  <Mui.TableCell
    data-filter-quick={useFilterQuick(props.cell)}
    align={useAlign(props.cell)}
    width={props.cell.width}
  >
    <Mui.TableSortLabel {...useSortedProps(props)}>
      {useHeadNode(props.cell)}
    </Mui.TableSortLabel>
    <TableResize resize={useResize(props.cell)} />
  </Mui.TableCell>
))

const useBodyNode = (cell: C, item: I) => {
  if (cell.renderCell) return cell.renderCell(item)

  if (!cell.key.includes('/')) return item[cell.key]

  return JSON.stringify(item)
}

const Body = Mobx.observer<B>(({ cell, item }) => (
  <Mui.TableCell
    align={useAlign(cell)}
    children={useBodyNode(cell, item)}
    width={cell.width}
  />
))

export const TableCell = Mobx.observer<CP>((props) => {
  const { item, cell, index } = props
  if (cell.hidden) return null
  if (item) return <Body item={item} cell={cell} index={index} />
  return <Head cell={cell} index={index} />
})
