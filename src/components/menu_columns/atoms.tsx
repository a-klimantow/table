import * as React from 'react'
import * as Mui from '@material-ui/core'
import { Observer } from 'mobx-react-lite'
import { action } from 'mobx'
//
import { Icon } from 'components'
import { ICol } from 'types'

// button

export const Button = React.memo<Mui.ButtonProps>((props) => (
  <Mui.IconButton {...props}>
    <Icon type="col_menu" />
  </Mui.IconButton>
))

// menu

export const Menu = Mui.Menu

// items

export const Item = React.memo<{ item: ICol }>(({ item }) => {
  const change = action('change hidden', () => (item.hidden = !item.hidden))

  return (
    <Mui.Stack direction="row" alignItems="center" px={1} py={0.5} gap={1}>
      <Observer>
        {() => (
          <Mui.Switch size="small" checked={!item.hidden} onChange={change} />
        )}
      </Observer>
      <Mui.Typography variant="body2">{item.name}</Mui.Typography>
    </Mui.Stack>
  )
})

// buttons

export const Buttons = React.memo<{ items: ICol[] }>(({ items }) => {
  const hiddenAll = action('change hidden all', (hidden: boolean) => {
    items.forEach((i) => (i.hidden = hidden))
  })

  return (
    <Mui.Stack
      direction="row"
      justifyContent="space-between"
      gap={1}
      px={1}
      pt={1}
    >
      <Mui.Button onClick={() => hiddenAll(true)}>Скрыть все</Mui.Button>
      <Mui.Button onClick={() => hiddenAll(false)}>Показать все</Mui.Button>
    </Mui.Stack>
  )
})
