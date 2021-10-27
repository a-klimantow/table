import * as React from 'react'
import * as Mui from '@mui/material'

export const Paper = React.memo<Mui.PaperProps>((props) => (
  <Mui.Paper {...props} sx={{ display: 'flex', flexDirection: 'column' }} />
))
