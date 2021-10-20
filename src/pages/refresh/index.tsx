import * as Mui from '@mui/material'
//
import { useFetch } from './hooks'

export const Refresh = () => {
  useFetch()
  return <Mui.Backdrop open sx={{ zIndex: 'modal' }} />
}
