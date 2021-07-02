import { observer } from 'mobx-react-lite'
import { TableBody, TableRow } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { GridCell } from './GridCell'
import { GridCellCheckbox } from './GridCellCheckbox'

export const GridBody = observer(() => {
  const store = useGridStore()
  return (
    <TableBody>
      {store.data.map((row, index) => (
        <TableRow key={index}>
          <GridCellCheckbox index={index} />
          {store.renderColumns.map(({ field }, i) => (
            <GridCell key={i} data-freeze={i === 0 || null}>
              {row[field]}
            </GridCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
})
