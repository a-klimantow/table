import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'

export const TableLoader = Mobx.observer(() => {
  const { table } = useTableContext()

  if (table.loader)
    return (
      <Mui.LinearProgress
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      />
    )

  return null
})
