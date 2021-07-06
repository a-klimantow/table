import { observer } from 'mobx-react-lite'

import { GridCell } from './GridCell'

interface Props {
  isFreeze: true | null
}

export const GridCellBody = observer<Props>(({ isFreeze, children }) => {
  return <GridCell data-freeze={isFreeze}>{children}</GridCell>
})
