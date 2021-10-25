import { observer } from 'mobx-react-lite'

import { Menu } from './atoms'
import { useImportState } from './store'

export const FileImport = observer(() => {
  const state = useImportState()
  return <Menu state={state} />
})
