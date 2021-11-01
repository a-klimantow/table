import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'

export const TableBody = Mobx.observer(() => {
  const { table } = useTableContext()
  return (
    <Mui.TableBody>
      {table.items.map((item, i) => (
        <Mui.TableRow key={i}>
          {table.columns.map((col) => (
            <Mobx.Observer key={col.key}>
              {() =>
                col.hidden ? null : (
                  <Mui.TableCell>
                    {item[col.key] as React.ReactNode}
                  </Mui.TableCell>
                )
              }
            </Mobx.Observer>
          ))}
        </Mui.TableRow>
      ))}
    </Mui.TableBody>
  )
})
