import { SvgIcon } from '@material-ui/core'

type IconType = typeof SvgIcon

export interface ModuleMenuItemProps {
  icon?: IconType
  name: string
  submenu?: Omit<ModuleMenuItemProps, 'icon'>[]
  onClick?(): void
}

export interface ModuleSubmenuProps extends ModuleMenuItemProps {
  menu: { isOpen: boolean; toggleOpen(): void }
}

export type ModuleMenuProps = {
  menuName?: string
  items: ModuleMenuItemProps[]
}
