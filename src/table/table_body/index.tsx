import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'
import { CellBody } from '../cell_body'

export const TableBody = Mobx.observer(() => {
  const { table } = useTableContext()
  return (
    <Mui.TableBody>
      {table.items.map((item, i) => (
        <Mui.TableRow key={i}>
          {table.columns.map((col) => (
            <CellBody key={col.key} col={col} item={item} />
          ))}
        </Mui.TableRow>
      ))}
    </Mui.TableBody>
  )
})
