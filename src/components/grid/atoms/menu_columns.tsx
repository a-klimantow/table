import * as React from 'react'
import * as Mui from '@mui/material'
import { action } from 'mobx'
import { Observer } from 'mobx-react-lite'

import { Icon } from 'components'
import { useGridContext } from '../context'

export const MenuColumns = React.memo(() => {
  const [anchor, setAnchor] = React.useState<null | Element>(null)
  return (
    <React.Fragment>
      <Mui.IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Icon type="col_menu" />
      </Mui.IconButton>
      <Mui.Menu
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
      >
        <MenuColumnsList />
        <MenuColmnsButtons />
      </Mui.Menu>
    </React.Fragment>
  )
})

const MenuColumnsList = React.memo(() => {
  const grid = useGridContext()
  return (
    <React.Fragment>
      {grid.cols.map((col) => (
        <Mui.Stack
          key={col.key}
          direction="row"
          alignItems="center"
          gap={1}
          py={0.5}
          px={1}
        >
          <Observer>
            {() => (
              <Mui.Switch
                size="small"
                checked={!col.hidden}
                onChange={action(() => (col.hidden = !col.hidden))}
              />
            )}
          </Observer>
          <Mui.Typography>{col.name}</Mui.Typography>
        </Mui.Stack>
      ))}
    </React.Fragment>
  )
})

const MenuColmnsButtons = React.memo(() => {
  const grid = useGridContext()

  const hiddenAll = action((h: boolean) => {
    grid.cols.forEach((v) => {
      v.hidden = h
    })
  })

  return (
    <Mui.Stack
      direction="row"
      justifyContent="space-between"
      gap={1}
      px={1}
      pt={1}
    >
      {(['Скрыть', 'Показать'] as const).map((action) => (
        <Mui.Button
          key={action}
          onClick={() => hiddenAll(action === 'Скрыть')}
        >{`${action} все`}</Mui.Button>
      ))}
    </Mui.Stack>
  )
})
