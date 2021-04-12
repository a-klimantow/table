import { FC, useState, useRef, MouseEvent } from 'react'
import { Button, Menu, MenuItem, ButtonProps, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'

export interface IHeaderMenu {
  endIcon?: ButtonProps['endIcon']
  startIcon?: ButtonProps['startIcon']
  name: string
  data: string[][]
}

export const HeaderMenu: FC<IHeaderMenu> = ({ name, data, ...props }) => {
  const [anchorEl, setAncorEl] = useState<null | HTMLButtonElement>(null)
  const ref = useRef<HTMLButtonElement>(null)
  const { push } = useHistory()
  const { pathname } = useLocation()

  const handleOpen = () => setAncorEl(ref.current)

  const handleClose = (e: MouseEvent<HTMLLIElement>) => {
    const { href = '' } = e.currentTarget.dataset
    setAncorEl(null)
    push(href)
  }

  return (
    <>
      <Button onClick={handleOpen} ref={ref} style={{ textTransform: 'unset' }} {...props}>
        {name}
      </Button>
      <Menu id="menu" open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
        {data.map(([name, href]) => (
          <MenuItem key={name} onClick={handleClose} data-href={href}>
            <Typography color={pathname === href ? 'primary' : 'textPrimary'}>{name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
