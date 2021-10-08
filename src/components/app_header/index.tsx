import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useRouteMatch } from 'react-router'

import { MenuModule } from './menu_module'
import { MenuUser } from './menu_user'
import {} from './atoms'

export const AppHeader = React.memo(() => {
  const hidden = Boolean(useRouteMatch('/login/'))

  if (hidden) return null

  return (
    <Mui.Stack
      data-app-header
      borderBottom={1}
      borderColor="divider"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={1}
      p={1}
      sx={{
        '& button': {
          color: 'inherit',
          textTransform: 'unset',
        },
      }}
    >
      <MenuModule />
      <MenuUser />
    </Mui.Stack>
  )
})
