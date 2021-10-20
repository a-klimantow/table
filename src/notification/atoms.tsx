import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'
import { TransitionGroup } from 'react-transition-group'

import { INotification as N } from './types'
import { useNtfContext } from './context'
import { useItem } from './hooks'

export const List = observer(() => {
  const { array } = useNtfContext()
  return (
    <Mui.Stack
      position="fixed"
      right={0}
      top={0}
      m={1}
      gap={1}
      direction="column-reverse"
      alignItems="flex-end"
      zIndex="modal"
    >
      <TransitionGroup style={{ display: 'contents' }}>
        {array.map((item) => (
          <Mui.Slide key={item.key} direction="left">
            <div>
              <Item item={item} />
            </div>
          </Mui.Slide>
        ))}
      </TransitionGroup>
    </Mui.Stack>
  )
})

const Item = observer<{ item: N }>(({ item }) => {
  const props = useItem(item)
  return <Mui.Alert {...props} />
})
