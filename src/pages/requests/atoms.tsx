import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer, Observer } from 'mobx-react-lite'
//

import { ICol, IRequestItem } from 'types'

// page

export const Paper = React.memo<Mui.PaperProps>((props) => (
  <Mui.Paper
    {...props}
    sx={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    }}
  />
))

// toolbar

export const Toolbar = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack
    {...props}
    direction="row"
    alignItems="center"
    gap={1}
    p={1}
    bgcolor="grey.300"
  />
))

// bottom

export const Bottom = React.memo<Mui.StackProps>((props) => (
  <Mui.Stack {...props} borderTop={1} borderColor="divider" />
))

// table

export const TableRow = React.memo<{
  columns: ICol[]
  item: IRequestItem
}>(({ columns, item }) => (
  <Mui.TableRow>
    {columns.map((c) => (
      <Observer key={c.key}>
        {() => (
          <Mui.TableCell data-hidden={c.hidden || null}>test</Mui.TableCell>
        )}
      </Observer>
    ))}
  </Mui.TableRow>
))
