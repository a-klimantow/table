import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'

export const Toolbar = observer((props) => (
  <Mui.Stack
    {...props}
    direction="row"
    alignItems="center"
    gap={1}
    p={1}
    bgcolor="grey.300"
  />
))
