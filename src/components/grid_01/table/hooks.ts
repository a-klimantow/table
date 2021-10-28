import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as Cell } from '../types'
import { useGridContext } from '../context'

export const useHead = () => useGridContext().columns
export const useBody = () => useGridContext().items

export const useAlign = (cell: Cell): Cell['align'] =>
  cell.align ?? cell.type === 'string' ? 'left' : 'right'

export const useScroll = () =>
  Mobx.useLocalObservable(() => ({
    rootX: 0,
    childX: 0,

    move(e: React.SyntheticEvent<HTMLDivElement>) {
      const root = e.currentTarget
      const child = root.children[0]
      const { x: rootX } = root.getBoundingClientRect()
      const { x: childX } = child.getBoundingClientRect()
      this.rootX = rootX
      this.childX = childX
    },

    get show() {
      return this.rootX > this.childX
    },

    get sx(): Mui.BoxProps['sx'] {
      return {
        '& [data-freeze=true]': {
          ':after': {
            display: this.show ? 'block' : 'none',
            content: "''",
            position: 'absolute',
            borderRight: 1,
            borderColor: 'divider',
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      }
    },
  }))
