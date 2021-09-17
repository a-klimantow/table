import { observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import { useAppStore, useIsModule } from 'hooks'
import { MenuApp } from 'components'

export const Header = observer(() => {
  const { user } = useAppStore()
  return !user.isUnknown ? (
    <Stack
      gridArea="H"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      p={1}
      border={1}
      borderColor="divider"
    >
      <MenuApp />
      <MenuApp type="user" />
    </Stack>
  ) : null
})
