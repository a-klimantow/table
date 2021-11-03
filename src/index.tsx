import React from 'react'
import ReactDOM from 'react-dom'
import * as Mui from '@mui/material'
import { observer } from 'mobx-react-lite'

import { Table, useTable, ICol } from './table'

const cols: ICol[] = Array(6)
  .fill({ name: 'name', key: 'name' })
  .map((item, i) => ({
    name: item.name + i,
    key: item.key + i,
    type: i > 3 ? 'number' : 'string',
  }))

const items = Array(10).fill({
  name0: 'name 0',
  name1: 'name 1',
  name2: 'name 2',
  name3: 'name 3',
  name4: 1000,
  name5: 1000,
  name6: 1000,
})

const App = observer(() => {
  const table = useTable(cols)
  React.useEffect(() => {
    table.setLoader(true)
    const timer = setTimeout(() => {
      table.setLoader(false)
      table.update(items, items.length)
    }, 2000)
    return () => clearTimeout(timer)
  }, [table])
  return (
    <Mui.Box
      sx={{
        height: '100vh',
        bgcolor: 'grey.100',
        display: 'grid',
        gridTemplate: 'auto 1fr / auto 1fr',
        borderColor: 'divider',
        '& > [data-app-page]': {
          gridArea: '2 / 2 / -1 / -1',
          mx: 4,
          my: 2,
          overflow: 'auto',
        },
      }}
    >
      <Mui.CssBaseline />
      <Table isPage table={table} />
    </Mui.Box>
  )
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
