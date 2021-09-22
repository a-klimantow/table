import { Observer, observer } from 'mobx-react-lite'
import { Button, Popover, Input, ListItem } from '@material-ui/core'

import { useState } from './useState'
import { useImport } from './useImport'

export const ImportRewards = observer(() => {
  const state = useState()
  useImport(state)

  const { button, popover, items } = state

  return (
    <>
      <Observer>{() => <Button {...button}>Импорт</Button>}</Observer>
      <Observer>
        {() => (
          <Popover {...popover}>
            {items.map((item) => (
              <Item key={item.name} item={item} />
            ))}
          </Popover>
        )}
      </Observer>
    </>
  )
})

type ItemProps = ReturnType<typeof useState>['items'][number]

const Item = observer<{ item: ItemProps }>(({ item }) => (
  <ListItem button component="form">
    <label>
      {item.name}
      <Input {...item} />
    </label>
  </ListItem>
))
