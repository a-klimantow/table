import { ReactNode } from 'react'
import { ListItemProps } from '@material-ui/core'

export interface ILayoutMenuItem extends ListItemProps {
  name: string
  icon: ReactNode
  path?: string
  onClick?: () => void
  isOpen?: boolean
}

export interface ILayoutMenu {
  data: ILayoutMenuItem[]
}
