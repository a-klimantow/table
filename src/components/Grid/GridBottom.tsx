import { FC } from 'react'
import { Stack, StackProps } from '@material-ui/core'

export const GridBottom: FC<StackProps> = (props) => (
  <Stack
    display="grid"
    gridTemplateColumns="1fr auto"
    alignItems="center"
    gap={1}
    pl={1}
    borderTop={1}
    borderColor="divider"
    {...props}
  />
)
