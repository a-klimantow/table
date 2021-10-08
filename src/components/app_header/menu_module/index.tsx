import { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import * as Mui from '@material-ui/core'

import { Icon } from 'components'
import { useMenuModule } from './hooks'

type StateType = ReturnType<typeof useMenuModule>
type ItemProps = StateType['items'][number]

const Button = memo<{ state: StateType }>(({ state }) => (
  <Mui.Button {...state.button} startIcon={<Icon type="home" />}></Mui.Button>
))

const Menu = observer<{ state: StateType }>(({ state }) => (
  <Mui.Menu {...state.menu}>
    {state.items.map((item) => (
      <Item key={item.path} item={item} />
    ))}
  </Mui.Menu>
))

const Item = observer<{ item: ItemProps }>(({ item }) => {
  const { pathname } = useLocation()
  return (
    <Mui.MenuItem
      selected={pathname.startsWith(item.path)}
      disabled={item.disabled}
    >
      {item.name}
    </Mui.MenuItem>
  )
})

export const MenuModule = observer(() => {
  const state = useMenuModule()
  return (
    <>
      <Button state={state} />
      <Menu state={state} />
    </>
  )
})
