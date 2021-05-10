import { ListItemTextProps, SvgIconProps } from '@material-ui/core'
import { FC } from 'react'
// import { NavLinkProps } from 'react-router-dom'

type NameType = string

export interface IMenuItemToggle {
  open: boolean
  name: NameType
  onClick: () => void
}

export interface IModuleMenuItem extends ListItemTextProps {
  name: NameType
  Icon: FC<SvgIconProps>
  submenu?: string[][]
  path: string
}

export interface IModuleMenu {
  name: NameType
  menu: IModuleMenuItem[]
}
