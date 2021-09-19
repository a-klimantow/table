import { memo } from 'react'
import { Stack, StackProps } from '@material-ui/core'

export const Wrapper = memo<StackProps>((props) => (
  <Stack
    {...props}
    direction="row"
    alignItems="center"
    bgcolor="grey.300"
    p={1}
  />
))
