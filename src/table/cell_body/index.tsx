import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { ICol as C, IData as I } from '../types'

export const CellBody = Mobx.observer<{ col: C; item: I }>(({ col, item }) => {
  if (col.hidden) return null
  return (
    <Mui.TableCell align={col.type === 'string' ? 'left' : 'right'}>
      {renderNode(col, item)}
    </Mui.TableCell>
  )
})

type N = React.ReactNode

function renderNode(col: C, item: I): N {
  const keys = col.key.split('/')
  const node = getNode(keys, item)

  return col.formated ? col.formated(node as string) : (node as N)
}

function getNode([key, ...keys]: string[], item: I): N {
  if (typeof item[key] !== 'object') return item[key] as N

  return getNode(keys, item[key] as I)
}
