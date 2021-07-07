import { ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import { TableRow } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { GridCellCheckbox } from './GridCellCheckbox'
import { GridCellBody } from './GridCellBody'

interface Props {
  index: number
  row: { [key: string]: ReactNode }
}

export const GridRowBody = observer<Props>(({ index, row }) => {
  const store = useGridStore()
  return (
    <TableRow>
      <GridCellCheckbox index={index} />
      {store.renderColumns.map(({ field }, i) => (
        <GridCellBody key={i} isFreeze={i === 0 || null}>
          {row[field]}
        </GridCellBody>
      ))}
    </TableRow>
  )
})
