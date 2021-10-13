import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer } from 'mobx-react-lite'

export interface ICol<T = string> {
  key: T extends string ? string : keyof T
  name?: string
  quickFilter?: boolean
  hidden?: boolean
}

export const Table = React.memo<{
  head?: React.ReactNode
  body?: React.ReactNode
  bottom?: React.ReactNode
}>(({ head, body }) => (
  <Mui.TableContainer>
    <Mui.Table>
      <Mui.TableHead>
        <Mui.TableRow>{head}</Mui.TableRow>
      </Mui.TableHead>
      <Mui.TableBody>{body}</Mui.TableBody>
    </Mui.Table>
  </Mui.TableContainer>
))

export const HeadCell = observer<{ col: ICol }>(({ col }) => (
  <Mui.TableCell
    data-quick-filter={col.quickFilter || null}
    data-hidden={col.hidden || null}
  >
    {col.name}
  </Mui.TableCell>
))
