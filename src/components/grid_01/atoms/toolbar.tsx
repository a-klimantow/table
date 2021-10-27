import * as React from 'react'
import * as Mui from '@mui/material'

export const Toolbar = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack
    {...props}
    direction="row"
    alignItems="center"
    gap={1}
    p={1}
    bgcolor="grey.300"
  />
))
