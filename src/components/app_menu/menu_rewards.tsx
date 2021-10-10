import * as React from 'react'
import * as Mui from '@material-ui/core'
//
import { menus } from 'assets'
import { Toggle } from './atoms'
import { useAppStore } from 'hooks'

const { rewards } = menus

export const MenuRewards = React.memo(() => {
  return (
    <Mui.List>
      <Toggle />
    </Mui.List>
  )
})
