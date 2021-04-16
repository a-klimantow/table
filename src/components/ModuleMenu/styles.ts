import { styled, List, ListItem } from '@material-ui/core'

import { IMenuProps } from './types'

const MIN_WIDTH = 54
const MAX_WIDTH = 240

export const ModuleMenuWrap = styled('div')(({ theme }) => ({
  width: MIN_WIDTH,
  zIndex: theme.zIndex.drawer,
}))

export const ModuleMenuBase = styled('div')(({ open }: IMenuProps) => ({
  display: open ? 'block' : 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}))

export const MenuList = styled(List)(({ theme, open }: IMenuProps) => ({
  background: theme.palette.background.paper,
  overflow: 'hidden',
  borderRight: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(4),
  height: '100%',
  width: open ? MAX_WIDTH : '100%',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
}))

export const MenuListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  whiteSpace: 'nowrap',

  '& > a': {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing(1, 2),
  },

  '& > a.active *': {
    color: theme.palette.primary.main,
  },
}))
