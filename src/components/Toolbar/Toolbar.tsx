import { memo } from 'react'
import { Stack, StackProps } from '@material-ui/core'

export const Toolbar = memo<StackProps>((props) => (
  <Stack
    {...props}
    direction="row"
    alignItems="center"
    bgcolor="grey.300"
    gap={1}
    p={1}
  />
))
