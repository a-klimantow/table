import * as React from 'react'
import { createPortal } from 'react-dom'
import * as Mui from '@mui/material'
import * as mobx from 'mobx'

import { ICol as C } from '../types'

type M = React.MouseEvent<HTMLDivElement>

export function useResize(cell: C) {
  const [col, setCol] = React.useState<null | HTMLTableCellElement>(null)

  const onMouseDown = (e: M) => {
    const th = e.currentTarget.closest('th')
    th && setCol(th)
  }

  const onMouseMove = (e: M) => {
    if (col) {
      const width = col.clientWidth
      col.setAttribute(
        'style',
        `
        width:${width + e.movementX}px; 
        max-width:${width + e.movementX}px
        `
      )
    }
  }

  const onMouseUp = mobx.action(() => {
    if (col) {
      cell.width = col.clientWidth
      setCol(null)
    }
  })

  return {
    start: !!col,
    onMouseDown,
    onMouseUp,
    onMouseMove,
  }
}

type R = ReturnType<typeof useResize>

export const TableResize = React.memo<{ resize: R }>(({ resize }) => (
  <Resize onMouseDown={resize.onMouseDown}>
    {resize.start &&
      createPortal(
        <Mui.Backdrop
          invisible
          open
          sx={{ zIndex: 'modal', cursor: 'w-resize' }}
          onMouseUp={resize.onMouseUp}
          onMouseMove={resize.onMouseMove}
        />,
        document.body
      )}
  </Resize>
))

const Resize = React.memo<Mui.BoxProps>(({ children, ...props }) => (
  <>
    <Mui.Box
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
      }}
      {...props}
    >
      <Mui.Box sx={{ border: 1, borderColor: 'inherit', height: 16 }} />
    </Mui.Box>
    {children}
  </>
))
