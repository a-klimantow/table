import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { TableType as T } from '../types'

const usePopover = () => React.useState<null | Element>(null)

export const MenuColumns = React.memo<{ table: T }>(({ table }) => {
  const [anchor, setAnchor] = usePopover()
  return (
    <React.Fragment>
      <Mui.IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Icon.ViewColumn />
      </Mui.IconButton>
      <Mui.Popover
        open={!!anchor}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
      >
        <Mui.List>
          {table.columns.map((col, i) => (
            <Mui.ListItem key={col.key}>
              <Mui.ListItemIcon>
                <Mobx.Observer>
                  {() => (
                    <Mui.Switch
                      checked={!col.hidden}
                      onChange={() => table.toggleHidden(col)}
                    />
                  )}
                </Mobx.Observer>
              </Mui.ListItemIcon>
              <Mui.Typography variant="body1">{col.name}</Mui.Typography>
            </Mui.ListItem>
          ))}
        </Mui.List>
        <Mui.Stack
          direction="row"
          justifyContent="space-between"
          justifySelf="stretch"
          mb={1}
          px={1}
        >
          <Mui.Button size="small" onClick={() => table.hiddenAll(true)}>
            Скрыть все
          </Mui.Button>
          <Mui.Button size="small" onClick={() => table.hiddenAll(false)}>
            Показать все
          </Mui.Button>
        </Mui.Stack>
      </Mui.Popover>
    </React.Fragment>
  )
})
