import { SvgIconProps, Theme } from '@material-ui/core'
import { ElementType, FC } from 'react'
import { NavLinkProps } from 'react-router-dom'

export interface IMenuItemToggle {
  open: boolean
  name: string
  onClick: () => void
}

export interface IMenuProps {
  theme: Theme
  open: IMenuItemToggle['open']
  component?: ElementType
}

export interface IModuleMenuItem extends NavLinkProps {
  name: string
  icon: FC<SvgIconProps>
}

export interface IModuleMenu {
  name: IMenuItemToggle['name']
  data: IModuleMenuItem[]
}
