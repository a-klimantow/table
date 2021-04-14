import { FC, useState, useRef } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import { useActiveNavLinkStyle } from '../../hooks'
import { IHeaderMenu } from './types'
import {useStyles} from './styles'

export const HeaderMenu: FC<IHeaderMenu> = ({ name, data, ...props }) => {
  const [anchorEl, setAncorEl] = useState<null | HTMLButtonElement>(null)
  const ref = useRef<HTMLButtonElement>(null)
  const { active } = useActiveNavLinkStyle()
  const {item} = useStyles()

  const handleOpen = () => setAncorEl(ref.current)
  const handleClose = () => setAncorEl(null)

  return (
    <>
      <Button onClick={handleOpen} ref={ref} style={{ textTransform: 'unset' }} {...props}>
        {name}
      </Button>
      <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
        {data.map(([name, href]) => (
          <li key={name}>
            <MenuItem key={name} onClick={handleClose} className={item}>
              <NavLink to={href} activeClassName={active} exact >
                {name}
              </NavLink>
            </MenuItem>
          </li>
        ))}
      </Menu>
    </>
  )
}
