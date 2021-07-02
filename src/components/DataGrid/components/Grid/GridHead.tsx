import { observer } from 'mobx-react-lite'
import { TableHead, TableRow, styled } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { GridCell } from './GridCell'
import { Resize } from './Resize'
import { GridCellCheckbox } from './GridCellCheckbox'

export const GridHead = observer(() => {
  const store = useGridStore()
  return (
    <TableHeadStyled>
      <TableRow>
        <GridCellCheckbox head />
        {store.renderColumns.map(({ name }, i) => (
          <GridCell key={i} data-freeze={i === 0 || null}>
            {name}
            <Resize />
          </GridCell>
        ))}
      </TableRow>
    </TableHeadStyled>
  )
})

const TableHeadStyled = styled(TableHead)({
  position: 'sticky',
  top: 0,
  zIndex: 2,
})
