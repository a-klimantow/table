import { ListItemTextProps } from '@material-ui/core'
import { ReactElement } from 'react'
// import { NavLinkProps } from 'react-router-dom'

type NameType = string

export interface IMenuItemToggle {
  open: boolean
  name: NameType
  onClick: () => void
}

export interface IModuleMenuItem extends ListItemTextProps {
  name: NameType
  icon: ReactElement
  submenu?: string[][]
  path: string
}

export interface IModuleMenu {
  name: NameType
  menu: IModuleMenuItem[]
}
