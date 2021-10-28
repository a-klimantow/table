import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

const useShowLine = () =>
  Mobx.useLocalObservable(() => ({
    move(e: React.SyntheticEvent<HTMLDivElement>) {
      const root = e.currentTarget
      const child = root.children[0]
      const { x: rootX } = root.getBoundingClientRect()
      const { x: childX } = child.getBoundingClientRect()

      rootX > childX
        ? root.setAttribute('data-scroll-line', '')
        : root.removeAttribute('data-scroll-line')
    },
  }))

export const TableContainer = Mobx.observer(({ children }) => {
  const scroll = useShowLine()
  return (
    <Mui.TableContainer onScroll={scroll.move}>{children}</Mui.TableContainer>
  )
})
