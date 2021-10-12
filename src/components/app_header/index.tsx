import * as React from 'react'
import * as Mui from '@material-ui/core'
import { useRouteMatch } from 'react-router'

import { MenuModules } from '../menu_modules'
import { MenuUser } from '../menu_user'

export const AppHeader = React.memo(() => {
  if (useRouteMatch('/user/login/')) return null

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
      <MenuModules />
      <MenuUser />
    </Mui.Stack>
  )
})
