import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'
import * as mbx from 'mobx'

import { Icon } from 'components/icon'
import { useGridContext } from '../context'

type I = ReturnType<typeof useGridContext>['columns'][number]

const Switch = Mobx.observer<{ item: I }>(({ item }) => (
  <Mui.Switch
    checked={!item.hidden}
    onChange={mbx.action(() => (item.hidden = !item.hidden))}
  />
))

const MenuItem = React.memo<{ item: I }>(({ item }) => (
  <Mui.Stack direction="row" alignItems="center" px={1} py={0.5} gap={1}>
    <Switch item={item} />
    <Mui.Typography>{item.name}</Mui.Typography>
  </Mui.Stack>
))

function useButtons(): Mui.ButtonProps[] {
  const grid = useGridContext()
  return (['Скрыть', 'Показать'] as const).map((name) => ({
    children: `${name} все`,
    onClick: mbx.action(() => {
      grid.columns.forEach((c) => {
        c.hidden = /скрыть/i.test(name)
        
      })
    }),
  }))
}

const Buttons = React.memo(() => {
  const buttons = useButtons()
  return (
    <Mui.Stack direction="row" justifyContent="space-between" px={1}>
      {buttons.map((btn, i) => (
        <Mui.Button key={i} {...btn} />
      ))}
    </Mui.Stack>
  )
})

function useMenuCols() {
  const [anchor, setAnchor] = React.useState<null | Element>(null)
  const grid = useGridContext()
  return {
    button: {
      onClick: (e) => setAnchor(e.currentTarget),
    } as Mui.ButtonProps,
    menu: {
      open: !!anchor,
      anchorEl: anchor,
      onClose: () => setAnchor(null),
    } as Mui.MenuProps,
    items: grid.columns,
  }
}

export const MenuCols = React.memo(() => {
  const { button, menu, items } = useMenuCols()
  return (
    <React.Fragment>
      <Mui.IconButton {...button}>
        <Icon type="col_menu" />
      </Mui.IconButton>
      <Mui.Menu {...menu}>
        {items.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
        <Buttons />
      </Mui.Menu>
    </React.Fragment>
  )
})
