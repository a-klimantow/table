import { memo } from 'react'
import { Stack, StackProps } from '@material-ui/core'

export const Header = memo<StackProps>(({ children }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    gap={1}
    p={1}
    border={1}
    borderColor="divider"
  >
    {children}
  </Stack>
))
