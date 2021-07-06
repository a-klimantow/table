import { useState, DetailedHTMLProps, HtmlHTMLAttributes, MouseEvent } from 'react'
import { TableHeadProps } from '@material-ui/core'

type HandleType = () => TableHeadProps

const getStyle = (w: number) => `max-width: ${Math.max(100, w)}px; min-width: ${Math.min(500, w)}px`

export const useResize: HandleType = () => {
  const [index, setIndex] = useState<null | number>(null)

  const onMouseLeave = () => setIndex(null)
  const onMouseUp = () => setIndex(null)

  const onMouseMove = (e: MouseEvent) => {
    if (index !== null) {
      const cell = e.currentTarget.children[0].children[index]
      const width = cell.clientWidth + e.movementX

      cell.setAttribute('style', getStyle(width))
    }
  }

  const onMouseDown = (e: MouseEvent) => {
    const target = e.target as HTMLElement

    if (target.hasAttribute('data-resize')) {
      e.preventDefault()
      const th = target.closest('th')
      th && setIndex(th.cellIndex)
    }
  }

  return {
    onMouseUp,
    onMouseLeave,
    onMouseMove,
    onMouseDown,
    ['data-resize']: index,
  }
}
