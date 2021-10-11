import { observer } from 'mobx-react-lite'
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom'
import { ListItem, Typography, Collapse } from '@material-ui/core'

import { Icon } from 'components'
import { IconType } from 'types'

import { useMenu } from '../store'

type LinkType = string

export type MenuItemProps =
  | { type: 'menu_btn'; name: string; link?: string }
  | {
      type: 'submenu_btn'
      name: string
      icon: IconType
      items: MenuItemProps[]
      link?: string
    }
  | { type: 'menu_item'; name: string; icon: IconType; link: LinkType }
  | { type: 'submenu_item'; name: string; link: LinkType }

export const MenuItem = observer<{ item: MenuItemProps }>(({ item }) => {
  const menu = useMenu()
  const isActive = useIsActive(item)
  const color = isActive ? 'primary' : 'inherit'
  const pushTo = usePushTo(() => menu.close())

  switch (item.type) {
    case 'menu_btn':
      return (
        <ListItem button onClick={() => menu.toggle()} title={item.name}>
          <Icon type={menu.open ? 'close' : 'menu'} />
          <Typography>{item.name}</Typography>
        </ListItem>
      )

    case 'submenu_btn':
      const isOpen = item.name === menu.activeSubmenu
      return (
        <>
          <ListItem
            button
            onClick={() => menu.toggleSubmenu(item.name)}
            selected={!isOpen && isActive}
            title={item.name}
          >
            <Icon type={item.icon} color={color} />
            <Typography color={color}>{item.name}</Typography>
            <IconArrow open={isOpen} big={menu.open} />
          </ListItem>
          <Collapse in={isOpen}>
            {item.items.map((i) => (
              <MenuItem key={i.name} item={i} />
            ))}
          </Collapse>
        </>
      )

    case 'menu_item':
      return (
        <ListItem button selected={isActive} onClick={pushTo(item.link)} title={item.name}>
          <Icon type={item.icon} color={color} />
          <Typography color={color}>{item.name}</Typography>
        </ListItem>
      )
    default:
      return (
        <ListItem button selected={isActive} onClick={pushTo(item.link)} title={item.name}>
          <Typography color={color} fontSize={14}>
            {item.name}
          </Typography>
        </ListItem>
      )
  }
})

interface IconArrowProps {
  open: boolean
  big: boolean
}

const IconArrow = observer<IconArrowProps>(({ open, big }) => (
  <Icon
    type="dropdown"
    color="inherit"
    sx={{
      position: 'absolute',
      right: 0,
      transform:
        !open && !big
          ? 'scale(0.6) translateX(8px)'
          : open
          ? 'scaleY(-1) translateX(-8px)'
          : 'translateX(-8px)',
      transition: 'transform 0.2s ease',
    }}
  />
))

function useIsActive(item: MenuItemProps): boolean {
  const { pathname } = useLocation()

  switch (item.type) {
    case 'menu_btn':
      return false

    case 'menu_item':
    case 'submenu_item':
      return pathname.includes(item.link)

    case 'submenu_btn':
      return item.items.some((i) => pathname.includes(i.link as string))
    default:
      return false
  }
}

function usePushTo(cb: () => void): (l: LinkType) => () => void {
  const history = useHistory()
  const match = useRouteMatch<{ mod: string }>('/:mod')
  const mod = match?.params.mod

  return (link) => () => {
    history.push(`/${mod}/${link}`)
    cb()
  }
}
