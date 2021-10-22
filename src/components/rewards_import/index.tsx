import { observer } from 'mobx-react-lite'

import { Button, Menu, Items } from './atoms'
import { useImportStore } from './store'

export const RewardsImport = observer(() => {
  const store = useImportStore()
  return (
    <>
      <Button onClick={(e) => store.setAnchor(e.currentTarget)} />
      <Menu store={store}>
        <Items store={store} />
      </Menu>
    </>
  )
})
