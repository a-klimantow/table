import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@material-ui/core'
import { useMemo } from 'react'

interface ItemProps extends MuiMenuItemProps {
  path: string
  closeMenu: () => void
}

export const MenuItem = observer<ItemProps>(({ path, closeMenu, ...props }) => {
  const { location, push } = useHistory()
  const { pathname } = location

  const handleClick = () => {
    push(`/${path}/`)
    closeMenu()
  }

  const isSelected = useMemo(() => pathname.includes(path), [pathname, path])

  return <MuiMenuItem selected={isSelected} onClick={handleClick} {...props} />
})
