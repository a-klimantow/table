import * as React from 'react'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'

export const Paper = observer((props) => (
  <Mui.Paper {...props} sx={{ display: 'flex', flexDirection: 'column' }} />
))
