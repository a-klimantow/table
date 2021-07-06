import { observer } from 'mobx-react-lite'
import { TableHead, TableRow, styled } from '@material-ui/core'

import { useGridStore, useColWidths } from '../../hooks'
import { GridCellCheckbox } from './GridCellCheckbox'
import { GridCellHead } from './GridCellHead'

export const GridHead = observer(() => {
  const store = useGridStore()
  const widths = useColWidths()
  return (
    <TableHeadStyled>
      <TableRow>
        <GridCellCheckbox head />
        {store.renderColumns.map(({ name, field }, i) => (
          <GridCellHead
            key={name}
            field={field}
            isFreeze={i === 0 || null}
            width={widths ? widths[field] : ''}
          >
            {name}
          </GridCellHead>
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
