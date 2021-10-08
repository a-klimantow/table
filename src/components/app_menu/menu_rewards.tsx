import * as React from 'react'
import * as Mui from '@material-ui/core'
//
import { Toggle } from './atoms'
import { useAppStore } from 'hooks'

export const MenuRewards = React.memo(() => {
  return (
    <Mui.List>
      <Toggle />
    </Mui.List>
  )
})
