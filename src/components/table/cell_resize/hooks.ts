import * as React from 'react'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'

type Th = null | HTMLTableCellElement
type E = React.MouseEvent

export const useCellResize = () => {
  const table = useTableContext()
  return Mobx.useLocalObservable(() => ({
    th: null as Th,

    down(e: E) {
      e.preventDefault()
      this.th = e.currentTarget.closest('th')
    },

    move(e: E) {
      if (this.th) {
        const width = this.th.clientWidth + e.movementX
        this.th.setAttribute('style', `width:${width}px;max-width: ${width}px`)
      }
    },

    up() {
      if (this.th) {
        const { key } = this.th.dataset
        const width = this.th.clientWidth

        table.columns.forEach((c) => {
          if (key === c.key) c.width = width
        })
      }
      this.th = null
    },

    get start() {
      return Boolean(this.th)
    },
  }))
}
