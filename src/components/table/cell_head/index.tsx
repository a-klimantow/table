import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T, ICol as C } from '../types'

interface CellHeadProps {
  col: C
  resize: React.ReactNode
  onSortClick?(): void
}

export const CellHead = Mobx.observer<CellHeadProps>(
  ({ col, resize, onSortClick }) => {
    if (col.hidden) return null
    return (
      <Mui.TableCell align={col.align} data-key={col.key}>
        <Mui.TableSortLabel
          direction={col.sort}
          active={!!col.sort}
          onClick={onSortClick}
        >
          <Mui.Typography
            variant="body2"
            fontWeight={col.quickFilter ? 500 : 300}
          >
            {col.name}
          </Mui.Typography>
        </Mui.TableSortLabel>
        {resize}
      </Mui.TableCell>
    )
  }
)
