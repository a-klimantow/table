import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'

export const TableLoader = Mobx.observer(() =>
  useTableContext().loader ? (
    <Mui.LinearProgress
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    />
  ) : null
)
