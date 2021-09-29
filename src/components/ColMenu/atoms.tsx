import { memo } from 'react'
import { Observer, observer } from 'mobx-react-lite'
import {
  Popover,
  IconButton,
  Stack,
  Typography,
  Switch,
  Button,
} from '@material-ui/core'

import { Icon } from 'components'

import { ColMenuStore } from './store'
import { useColMenu } from './context'

export const MenuButton = memo(() => {
  const { menu } = useColMenu()
  return (
    <IconButton onClick={(e) => menu.open(e.currentTarget)}>
      <Icon type="col_menu" />
    </IconButton>
  )
})

export const MenuPopover = observer(({ children }) => {
  const { menu } = useColMenu()
  return (
    <Popover
      open={Boolean(menu.anchor)}
      onClose={menu.close}
      anchorEl={menu.anchor}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      {children}
    </Popover>
  )
})

export const MenuList = memo(() => {
  const { columns } = useColMenu()
  return (
    <Stack p={1} gap={1}>
      {columns.map((col) => (
        <MenuItem key={col.key} item={col} />
      ))}
    </Stack>
  )
})

interface MenuItemProps {
  item: ColMenuStore['columns'][number]
}

const MenuItem = memo<MenuItemProps>(({ item }) => {
  const store = useColMenu()
  return (
    <Stack direction="row" gap={1}>
      <Observer>
        {() => (
          <Switch
            size="small"
            checked={!item.hidden}
            onChange={() => store.changeHidden(item)}
          />
        )}
      </Observer>
      <Typography>{item.name}</Typography>
    </Stack>
  )
})

export const Buttons = memo(() => {
  const store = useColMenu()
  const names = ['Скырть все', 'Показать все']
  const actions = [store.hiddenAll, store.showAll]
  return (
    <Stack direction="row" gap={1} px={1} pb={1} justifyContent="space-between">
      {names.map((name, i) => (
        <Button key={name} onClick={actions[i]}>
          {name}
        </Button>
      ))}
    </Stack>
  )
})
