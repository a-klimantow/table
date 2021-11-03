import * as React from 'react'
import * as Mui from '@mui/material'

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

export const TableContainer: React.FC = (props) => (
  <Mui.TableContainer {...props} onScroll={useTableScroll()} />
)
