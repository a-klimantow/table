import { useState, useEffect, FC, ReactElement } from 'react'
import { Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useRouteMatch } from 'react-router-dom'

import { MenuItemLink } from './MenuItemLink'
import { ArrowIcon } from './ArrowIcon'

interface ISubmenuProps {
  submenu: string[][]
  submenuName: string
  icon: ReactElement
  path: string
  handleMenuOpen: () => void
  openMenu: boolean
}

const useStyles = makeStyles((theme) => ({
  active: {
    '& *': {
      color: ({ isActive }: { isActive: boolean }) => (isActive ? theme.palette.primary.main : ''),
    },
  },
}))

export const Submenu: FC<ISubmenuProps> = ({
  submenu,
  submenuName,
  icon,
  openMenu,
  handleMenuOpen,
}) => {
  const [openCollapse, setOpenCollapse] = useState(false)
  const pathes = submenu.map(([, path]) => path)
  const isActive = Boolean(useRouteMatch(pathes))
  const classes = useStyles({ isActive })

  useEffect(() => {
    !openMenu && setOpenCollapse(false)
  }, [openMenu])

  const handleClick = () => {
    !openMenu && handleMenuOpen()
    setOpenCollapse((o) => !o)
  }

  return (
    <>
      <ListItem button onClick={handleClick} className={classes.active}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={submenuName} />
        <ArrowIcon openMenu={openMenu} openCollapse={openCollapse} />
      </ListItem>

      <Collapse in={openCollapse}>
        <ul>
          {submenu.map(([subName, subPath]) => (
            <MenuItemLink key={subName} secondary={subName} to={subPath} submenuItem />
          ))}
        </ul>
      </Collapse>
    </>
  )
}
