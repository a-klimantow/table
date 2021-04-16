import { FC, useState, useRef } from 'react'
import { Button, Menu } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import { MenuItemLink } from './styles'
import { IHeaderMenu } from './types'

export const HeaderMenu: FC<IHeaderMenu> = ({ button, data }) => {
  const [anchorEl, setAncorEl] = useState<null | HTMLButtonElement>(null)
  const ref = useRef<HTMLButtonElement>(null)

  const handleOpen = () => setAncorEl(ref.current)
  const handleClose = () => setAncorEl(null)

  return (
    <>
      <Button ref={ref} onClick={handleOpen} {...button} />
      <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
        {data.map(({ name, ...props }) => (
          <MenuItemLink key={name}>
            <NavLink onClick={handleClose} {...props}>
              {name}
            </NavLink>
          </MenuItemLink>
        ))}
      </Menu>
    </>
  )
}
