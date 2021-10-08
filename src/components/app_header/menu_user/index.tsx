import { memo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { observer, Observer } from 'mobx-react-lite'
import * as Mui from '@material-ui/core'

import { Icon } from 'components'
import { useMenuUser } from './hooks'

type StateType = ReturnType<typeof useMenuUser>
type ItemProps = StateType['items'][number]

const Button = memo<{ state: StateType }>(({ state }) => (
  <Mui.Button {...state.button} endIcon={<Icon type="dropdown" />}>
    <Observer>{() => <>{state.button.name}</>}</Observer>
  </Mui.Button>
))

const Menu = observer<{ state: StateType }>(({ state }) => (
  <Mui.Menu {...state.menu}>
    {state.items.map((item) => (
      <Item key={item.name} item={item} />
    ))}
  </Mui.Menu>
))

const Item = observer<{ item: ItemProps }>(({ item }) => {
  const { hash } = useLocation()
  const { replace } = useHistory()
  return (
    <Mui.MenuItem
      selected={hash.endsWith(item.hash)}
      onClick={() => replace({ hash: item.hash })}
    >
      {item.name}
    </Mui.MenuItem>
  )
})

export const MenuUser = observer(() => {
  const state = useMenuUser()
  return (
    <>
      <Button state={state} />
      <Menu state={state} />
    </>
  )
})
