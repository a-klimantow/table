import { FC } from 'react'
import { ListItemIcon } from '@material-ui/core'
import { Menu as MenuIcon, CloseOutlined as CloseIcon } from '@material-ui/icons'

export const ToggleIcon: FC<{ openMenu: boolean }> = ({ openMenu }) => (
  <ListItemIcon>{openMenu ? <CloseIcon /> : <MenuIcon />}</ListItemIcon>
)
