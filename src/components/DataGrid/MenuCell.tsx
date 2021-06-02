import { FC } from 'react'
import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

export const MenuCell: FC<{ className: string }> = (props) => (
  <div {...props} data-menu data-freeze>
    <IconButton>
      <Menu />
    </IconButton>
  </div>
)
