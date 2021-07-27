import { observer } from 'mobx-react-lite'
import { Menu } from '@material-ui/core'
import { HomeOutlined as HomeIcon } from '@material-ui/icons'

import { MenuButton, MenuItem } from 'components'
import { useMenuApp } from './useMenuApp'

export const MenuApp = observer(() => {
  const { ref, state, currentName, modules } = useMenuApp()

  return (
    <>
      <MenuButton ref={ref} onClick={state.toggleOpen} startIcon={<HomeIcon />}>
        {currentName}
      </MenuButton>
      <Menu open={state.isOpen} onClose={state.toggleOpen} anchorEl={ref.current}>
        {modules.map(([path, name]) => (
          <MenuItem key={path} path={path} closeMenu={state.toggleOpen}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
})
