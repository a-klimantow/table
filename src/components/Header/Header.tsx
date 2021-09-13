import { memo } from 'react'
import { Stack } from '@material-ui/core'

import { useIsModule } from 'hooks'
import { MenuApp } from 'components'

export const Header = memo(() => {
  const isModule = useIsModule()
  return isModule ? (
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
