import { observer } from 'mobx-react-lite'
import { Checkbox, CheckboxProps } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { GridCell } from './GridCell'
import { Resize } from './Resize'

interface Props {
  head?: boolean
  index?: number
}

export const GridCellCheckbox = observer<Props>(({ head = false, index = 0 }) => {
  const store = useGridStore()

  if (!store.showCheckbox) return null

  const props: CheckboxProps = head
    ? {
        checked: store.checkAll.checked,
        indeterminate: store.checkAll.indeterminate,
        onChange: (e) => store.changeSelectedAll(e.currentTarget.checked),
      }
    : {
        checked: Boolean(store.data[index].checked),
        onChange: (e) => store.changeSelectedRow(index, e.currentTarget.checked),
      }

  return (
    <GridCell data-checkbox align="center">
      <Checkbox color="primary" {...props} />
      {head ? <Resize isResize={false} /> : null}
    </GridCell>
  )
})
