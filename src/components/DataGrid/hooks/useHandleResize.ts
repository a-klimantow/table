import { useState, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'

export function useHandleResize<E extends HTMLElement>() {
  const [resized, setResized] = useState(false)
  const { pathname } = useLocation()

  return (type: 'down' | 'up' | 'move') => (e: MouseEvent<E>) => {
    const span = e.currentTarget
    const th = span.closest('th')
    switch (type) {
      case 'down':
        span.setAttribute('data-resized', '')
        setResized(true)
        break
      case 'up':
        setResized(false)
        span.removeAttribute('data-resized')
        const row = span.closest('tr')
        if (row) {
          const key = `${pathname}_width`
          const json = getJSONFields(row.children)
          localStorage.setItem(key, json)
        }
        break

      case 'move':
        if (resized && th) {
          const width = th.clientWidth + e.movementX
          th.setAttribute('style', setWidth(width))
        }
        break
      default:
        break
    }
  }
}

function setWidth(w: number) {
  return `max-width: ${Math.max(100, w)}px;min-width: ${Math.min(w, 500)}px
  `
}

function getJSONFields<T extends HTMLElement>(children: HTMLCollection) {
  const arr = Array.from(children)
    .filter((e) => !(e as T).dataset.checkbox)
    .map((e) => {
      const {
        dataset: { field },
        clientWidth,
      } = e as T
      return [field, clientWidth]
    })

  return JSON.stringify(Object.fromEntries(arr))
}
