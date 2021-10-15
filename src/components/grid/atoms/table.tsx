import * as React from 'react'
import * as Mui from '@material-ui/core'
import { values } from 'mobx'
import { observer, Observer } from 'mobx-react-lite'

import { useGridContext } from '../context'

// _______________ table

export const Table = observer((props) => (
  <Mui.TableContainer sx={{ flex: 1 }}>
    <Mui.Table>{props.children}</Mui.Table>
  </Mui.TableContainer>
))

// _______________ table head

export const TableHead = React.memo(() => {
  const grid = useGridContext()
  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {values(grid.columns).map((c) => (
          <Observer key={c.name}>
            {() => (
              <Mui.TableCell
                data-hidden={c.hidden || null}
                data-quick-filter={c.quickFilter || null}
              >
                {c.name}
              </Mui.TableCell>
            )}
          </Observer>
        ))}
      </Mui.TableRow>
    </Mui.TableHead>
  )
})

// _______________ table body

export const TableBody = observer(({ children }) => {
  return (
    <Mui.TableBody>
      {/* <Mui.TableRow> */}
      {children}
      {/* </Mui.TableRow> */}
    </Mui.TableBody>
  )
})
