import { observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import { useUser } from 'hooks'
import { MenuApp } from 'components'

export const Header = observer(() => (
  <Stack
    gridArea="HEAD"
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    gap={1}
    p={1}
    borderBottom={1}
    borderColor="divider"
  >
    <MenuApp />
    <MenuApp type="user" />
  </Stack>
))
