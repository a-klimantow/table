import { useState, SyntheticEvent, MouseEvent } from 'react'

export const useResize = (arr: number[]) => {
  const [widths, setWidths] = useState(arr)
  const [resizeIdx, setResizeIdx] = useState(-1)

  const handleResize = (event: SyntheticEvent) => {
    const current = event.currentTarget as HTMLElement

    switch (event.type) {
      case 'mousedown':
        const target = event.target as HTMLElement
        if (target.hasAttribute('data-cell-resize')) {
          current.style.cursor = 'col-resize'
          event.preventDefault()
          const { cellResize } = target.dataset
          setResizeIdx(Number(cellResize))
        }
        break
      case 'mouseleave':
      case 'mouseup':
        setResizeIdx(Number(-1))
        current.style.cursor = ''
        break
      case 'mousemove':
        if (resizeIdx > -1) {
          const x = (event as MouseEvent).movementX
          const newWidth = widths.map((w, i) =>
            i === resizeIdx ? Math.min(Math.max(w + x, 100), 500) : w
          )
          setWidths(newWidth)
        }
        break
      default:
        console.log(event.type)
        break
    }
  }

  return {
    widths,
    handleResize,
  }
}
