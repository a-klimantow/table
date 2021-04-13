import { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import {
  Menu as MenuIcon,
  AddBoxOutlined as PlusIcon,
  IndeterminateCheckBoxOutlined as MinusIcon,
} from '@material-ui/icons'

import { LayoutMenu } from './LayoutMenu'
import { useStyles } from './styles'
import { ILayoutMenuItem } from './types'

const layoutMenu = (path: string): ILayoutMenuItem[] => [
  { name: 'Вознаграждения', icon: <MenuIcon /> },
  { name: 'test2', icon: <PlusIcon />, path },
  { name: 'test3', icon: <MinusIcon />, path: `${path}/minus` },
]

const layoutMenu2: ILayoutMenuItem[] = [
  { name: 'test2', icon: <MenuIcon /> },
  { name: 'test3', icon: <PlusIcon />, path: '/plus' },
  { name: 'test4', icon: <MinusIcon />, path: '/minus' },
]

export const Layout: FC = ({ children }) => {
  const s = useStyles()
  const payments = useRouteMatch('/payments')

  return (
    <div className={s.root}>
      <LayoutMenu data={payments ? layoutMenu(payments.path) : layoutMenu2} />
      {children}
    </div>
  )
}
