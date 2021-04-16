import { ButtonProps } from '@material-ui/core'
import { NavLinkProps } from 'react-router-dom'

export interface IHeaderMenuItem extends NavLinkProps {
  name: string
}

export interface IHeaderMenu {
  button: ButtonProps
  data: IHeaderMenuItem[]
}
