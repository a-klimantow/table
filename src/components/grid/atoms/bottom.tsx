import * as React from 'react'
import * as Mui from '@material-ui/core'

export const Bottom = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack
    {...props}
    direction="row"
    alignItems="center"
    gap={1}
    px={1}
    borderTop={1}
    borderColor="divider"
  />
))
