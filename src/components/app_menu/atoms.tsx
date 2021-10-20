import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
//
import { Icon } from 'components'
import { MenuItemType } from './menus'
import { useMenuTheme } from './theme'
import { MenuContextProvider, useMenuContext } from './context'
import { useMenu } from './hooks'

export const Provider = observer(({ children }) => (
  <Mui.ThemeProvider theme={useMenuTheme()}>
    <MenuContextProvider value={useMenu()}>{children}</MenuContextProvider>
  </Mui.ThemeProvider>
))

export const Menu = observer(({ children }) => {
  const menu = useMenuContext()

  return (
    <Mui.Collapse
      data-app-menu
      collapsedSize={48}
      in={menu.isOpen}
      orientation="horizontal"
      sx={{ borderRight: 1, borderColor: 'divider', pt: 2, zIndex: 'drawer' }}
    >
      <Mui.Backdrop open={menu.isOpen} onClick={menu.toggleMenu} invisible />
      {children}
    </Mui.Collapse>
  )
})

export const MenuItem = observer<{ item: MenuItemType }>(({ item }) => {
  const menu = useMenuContext()
  const { pathname } = useLocation()
  const name = String(item.name)

  const isActive = (links: string[]) => links.some((l) => pathname.includes(l))

  switch (item.type) {
    case 'toggle':
      return (
        <Mui.ButtonBase onClick={menu.toggleMenu}>
          <Icon type={menu.isOpen ? 'close' : 'menu'} />
          <Mui.Typography>{name}</Mui.Typography>
        </Mui.ButtonBase>
      )

    case 'item':
      return (
        <Mui.ButtonBase
          onClick={() => menu.closeMemu(item.link)}
          data-active={isActive([item.link])}
        >
          <Mui.Tooltip title={menu.isOpen ? '' : name}>
            <span>
              <Icon type={item.icon} />
            </span>
          </Mui.Tooltip>
          <Mui.Typography>{name}</Mui.Typography>
        </Mui.ButtonBase>
      )

    case 'submenu':
      const links = item.items.map((i) => i.link)
      const isSubActive = isActive(links) && !menu.submenu.has(name)
      return (
        <>
          <Mui.ButtonBase
            onClick={() => menu.toggleSubmenu(name)}
            data-active={isSubActive}
          >
            <Mui.Tooltip title={menu.isOpen ? '' : name}>
              <span>
                <Icon type={item.icon} />
              </span>
            </Mui.Tooltip>
            <Mui.Typography>{item.name}</Mui.Typography>
            <ArrowIcon name={name} />
          </Mui.ButtonBase>
          <Mui.Collapse in={menu.submenu.has(name)} sx={{ width: '100%' }}>
            <Mui.Box>
              {item.items.map((item) => (
                <MenuItem key={item.link} item={item} />
              ))}
            </Mui.Box>
          </Mui.Collapse>
        </>
      )

    case 'sub_item':
      return (
        <Mui.ButtonBase
          onClick={() => menu.closeMemu(item.link)}
          data-active={isActive([item.link])}
        >
          <Mui.Typography variant="body2">{item.name}</Mui.Typography>
        </Mui.ButtonBase>
      )
    default:
      return null
  }
})

const ArrowIcon = observer<{ name: string }>(({ name }) => {
  const menu = useMenuContext()

  return (
    <>
      <Mui.Fade in={menu.isOpen}>
        <Mui.Box
          sx={{
            position: 'absolute',
            right: 8,
            transform: `scaleY(${menu.submenu.has(name) ? -1 : 1})`,
          }}
        >
          <Icon type="dropdown" />
        </Mui.Box>
      </Mui.Fade>
      <Mui.Fade in={!menu.isOpen}>
        <Mui.Box
          sx={{ position: 'absolute', left: 28, transform: 'scale(.7)' }}
        >
          <Icon type="dropdown" />
        </Mui.Box>
      </Mui.Fade>
    </>
  )
})
