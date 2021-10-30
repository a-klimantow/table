import * as React from 'react'
import * as Mobx from 'mobx-react-lite'

type E = React.SyntheticEvent<HTMLDivElement>

export const useTableScroll = () => (e: E) => {
  const root = e.currentTarget
  const child = root.children[0]
  const { x: rootX } = root.getBoundingClientRect()
  const { x: childX } = child.getBoundingClientRect()

  rootX > childX
    ? root.setAttribute('data-scrolled', '')
    : root.removeAttribute('data-scrolled')
}
