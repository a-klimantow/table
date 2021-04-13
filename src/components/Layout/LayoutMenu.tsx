import { FC, useState } from 'react'
import { List } from '@material-ui/core'
import clsx from 'clsx'

import { ILayoutMenu } from './types'
import { LayoutMenuItem } from './LayoutMenuItem'

import { useStyles } from './styles'
export const LayoutMenu: FC<ILayoutMenu> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const s = useStyles()

  const handleToggle = () => setOpen((o) => !o)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className={clsx(s.base, { [s.baseOpen]: open })} onClick={handleClose} />
      <List component="div" className={clsx(s.list, { [s.listOpen]: open })}>
        {data.map((item) => (
          <LayoutMenuItem key={item.name} onClick={handleToggle} isOpen={open} {...item} />
        ))}
      </List>
    </div>
  )
}
