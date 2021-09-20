import { observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import { useAppStore } from 'hooks'
import { MenuApp } from 'components'

export const Header = observer(() => {
  const { user } = useAppStore()
  if (!user.isAuthorized) return null

  return (
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
  )
})
