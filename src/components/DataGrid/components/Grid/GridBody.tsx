import { observer } from 'mobx-react-lite'
import { TableBody } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { GridRowBody } from './GridRowBody'

export const GridBody = observer(() => {
  const store = useGridStore()
  return (
    <TableBody>
      {store.data.map((row, index) => (
        <GridRowBody key={index} index={index} row={row} />
      ))}
    </TableBody>
  )
})
