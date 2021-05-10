import React, { FC } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText, styled, Typography } from '@material-ui/core'

import { IModuleMenuItem } from '../types'
import { PipeIcon } from './PipeIcon'

// export const MenuItem: FC<IModuleMenuItem> = ({
//   Icon,
//   primary,
//   secondary,
//   onClick,
//   className,
//   path,
// }) => {
//   const { push } = useHistory()

//   const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     push(path)
//     onClick && onClick(e)
//   }

//   return (
//     <ListItem button onClick={handleClick} className={className}>
//       <NavLink to={path} onClick={(e) => e.preventDefault()}>
//         <ListItemIcon>{Icon ? <Icon /> : <PipeIcon />}</ListItemIcon>
//         <ListItemText primary={primary} secondary={secondary} />
//       </NavLink>
//     </ListItem>
//   )
// }

interface IMenuItemProps extends IModuleMenuItem {
  openMenu: boolean
}

export const MenuItem: FC<IMenuItemProps> = ({ Icon, name }) => (
  <li>
    <Icon />
    <Typography>{name}</Typography>
  </li>
)
