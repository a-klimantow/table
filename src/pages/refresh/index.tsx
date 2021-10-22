import * as React from 'react'
import * as Mui from '@mui/material'
//
import { useFetchRefresh } from 'hooks'

export const Refresh = () => {
  const refresh = useFetchRefresh()

  React.useEffect(() => {
    refresh()
  })

  return <Mui.Backdrop open sx={{ zIndex: 'modal' }} />
}
