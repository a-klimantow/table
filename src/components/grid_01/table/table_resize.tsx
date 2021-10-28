import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'
import { createPortal } from 'react-dom'

import { ICol as Cell } from '../types'

type ME = React.MouseEvent<HTMLDivElement>
type TH = null | HTMLTableCellElement
type R = ReturnType<typeof useResize>

export const useResize = (cell: Cell) =>
  Mobx.useLocalObservable(() => ({
    th: null as TH,

    start(e: ME) {
      e.preventDefault()
      this.th = e.currentTarget.closest('th')
    },

    move(e: ME) {
      if (this.th) {
        const width = this.th.clientWidth + e.movementX
        this.th.setAttribute('style', `width:${width}px;max-width: ${width}px`)
      }
    },

    finish() {
      if (this.th) cell.width = this.th.clientWidth
      this.th = null
    },

    get showPortal() {
      return Boolean(this.th)
    },
  }))

export const Resize = Mobx.observer<{ resize: R }>(({ resize }) => (
  <React.Fragment>
    <Mui.Box
      onMouseDown={resize.start}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        px: 0.5,
        py: 2,
        cursor: 'w-resize',
        display: 'grid',
        placeContent: 'center',
        borderColor: 'grey.500',

        ':hover': {
          borderColor: 'initial',
        },

        ':before': {
          content: "''",
          border: 1,
          borderColor: 'inherit',
          height: '1em',
        },
      }}
    />
    {resize.showPortal &&
      createPortal(
        <Mui.Backdrop
          onMouseUp={resize.finish}
          onMouseMove={resize.move}
          open
          invisible
          sx={{
            zIndex: 'modal',
            cursor: 'w-resize',
          }}
        />,

        document.body
      )}
  </React.Fragment>
))
