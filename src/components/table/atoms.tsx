import * as React from 'react'
import * as Mui from '@material-ui/core'

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
