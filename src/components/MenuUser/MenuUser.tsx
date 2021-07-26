import { observer } from 'mobx-react-lite'
import { Menu } from '@material-ui/core'
import { ArrowDropDownOutlined as ArrowIcon } from '@material-ui/icons'

import { MenuButton, MenuItem } from 'components'
import { useMenuUser } from './useMenuUser'

export const MenuUser = observer(() => {
  const { ref, state, links } = useMenuUser()
  return (
    <>
      <MenuButton ref={ref} onClick={state.toggleOpen} endIcon={<ArrowIcon />}>
        Пользователь
      </MenuButton>
      <Menu open={state.isOpen} onClose={state.toggleOpen} anchorEl={ref.current}>
        {links.map(([path, name]) => (
          <MenuItem key={path} path={path} closeMenu={state.toggleOpen}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
})
