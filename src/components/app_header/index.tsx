import * as React from 'react'
import * as Mui from '@mui/material'
import { useRouteMatch } from 'react-router'

import { UserMenu, ModuleMenu } from '../app_header_menu'

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
      <ModuleMenu />
      <UserMenu />
    </Mui.Stack>
  )
})
