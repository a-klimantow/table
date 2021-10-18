import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
//
import { Icon } from 'components'
import { ItemType, useItem } from './hooks'

export const UserButton = observer<Mui.ButtonProps>((props) => (
  <Mui.Button {...props} endIcon={<Icon type="dropdown" />} />
))

export const ModuleButton = observer<Mui.ButtonProps>((props) => (
  <Mui.Button {...props} startIcon={<Icon type="home" />} />
))

export const Menu = observer<Mui.MenuProps>((props) => (
  <Mui.Menu {...props}></Mui.Menu>
))

export const Item = observer<ItemType>((props) => {
  const item = useItem(props)
  return <Mui.MenuItem {...item} />
})
