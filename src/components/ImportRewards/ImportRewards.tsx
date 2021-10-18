import { Observer, observer } from 'mobx-react-lite'
import { Button, Popover, Input, ListItem } from '@mui/material'

import { useImportStore } from './store'

export const ImportRewards = observer(() => {
  const store = useImportStore()

  return (
    <>
      <Observer>{() => <Button {...store.button} />}</Observer>
      <Observer>
        {() => (
          <Popover {...store.popover}>
            {store.items.map((item) => (
              <Item key={item.name} item={item} />
            ))}
          </Popover>
        )}
      </Observer>
    </>
  )
})

type ItemProps = ReturnType<typeof useImportStore>['items'][number]

const Item = observer<{ item: ItemProps }>(({ item }) => (
  <ListItem button component="form">
    <label>
      {item.name}
      <Input {...item} />
    </label>
  </ListItem>
))
