import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'
//
import { Icon } from 'components'
import { useMenuContext } from './context'

export const Menu = observer(({ children }) => {
  const menu = useMenuContext()
  return (
    <Mui.Collapse data-app-menu in={menu.isOpen}>
      {children}
    </Mui.Collapse>
  )
})

export const Toggle = React.memo(() => {
  const menu = useMenuContext()
  return (
    <Mui.ListItem button onClick={() => menu.toggle()}>
      <Mui.ListItemIcon>
        <Icon type="menu" />
      </Mui.ListItemIcon>
      <Mui.ListItemText primary="Вознаграждения" />
    </Mui.ListItem>
  )
})

export const Item = () => null
