/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactElement, useMemo, forwardRef } from 'react'
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'

import { NavLink, NavLinkProps } from 'react-router-dom'
import { PipeIcon } from './PipeIcon'

interface ItemLinkProps extends NavLinkProps {
  icon?: ReactElement
  name?: string
  primary?: string
  secondary?: string
  submenuItem?: true
}

const useStyles = makeStyles((theme) => ({
  link: {
    '&.active *': {
      color: theme.palette.primary.main,
    },
  },
}))

export const MenuItemLink: FC<ItemLinkProps> = ({
  icon,
  to,
  primary,
  secondary,
  submenuItem,
  ...props
}) => {
  const classes = useStyles()

  const renderLink = useMemo(
    () =>
      forwardRef<any, Omit<NavLinkProps, 'to'>>((itemProps, ref) => (
        <NavLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        className={classes.link}
        dense={submenuItem}
        {...props}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : <PipeIcon />}
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    </li>
  )
}
