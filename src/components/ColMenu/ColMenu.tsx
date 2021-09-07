import { observer } from 'mobx-react-lite'
import { Box, Popover } from '@material-ui/core'

import { Provider, MenuButton, MenuItem, Buttons } from './atoms'
import { useColMenu } from './useColMenu'
import { ICol } from 'types'

export interface ColMenuProps {
  menu: {
    items: ICol[]
  }
}

export const ColMenu = observer<ColMenuProps>((props) => {
  const {
    isOpenMenu,
    menuOpen,
    menuClose,
    ref,
    anchorEl,
    items,
    hiddenOne,
    onHiddenAll,
    onShowAll,
  } = useColMenu(props)
  return (
    <Provider>
      <MenuButton ref={ref} click={menuOpen} />
      <Popover open={isOpenMenu} onClose={menuClose} anchorEl={anchorEl}>
        <Box sx={{ p: 1 }}>
          {items.map((item, idx) => (
            <MenuItem key={item.name} item={item} change={hiddenOne(idx)} />
          ))}
          <Buttons onHidden={onHiddenAll} onShow={onShowAll} />
        </Box>
      </Popover>
    </Provider>
  )
})
