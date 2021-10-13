import * as React from 'react'
//
import { ICol } from 'types'
import { Button, Menu, Item, Buttons } from './atoms'

interface MenuColumnsProps {
  columns: unknown[]
}

export const useMenu = () => React.useState<null | Element>(null)

export const MenuColumns = React.memo<MenuColumnsProps>(({ columns }) => {
  const items = columns as ICol[]

  const [anchor, setAnchor] = useMenu()

  return (
    <React.Fragment>
      <Button onClick={(e) => setAnchor(e.currentTarget)} />
      <Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
      >
        {items.map((item) => (
          <Item key={item.key} item={item} />
        ))}
        <Buttons items={items} />
      </Menu>
    </React.Fragment>
  )
})
