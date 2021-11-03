import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { useMenuColumns } from './hooks'

export const MenuColumns = Mobx.observer(() => {
  const { button, popover, items, hiddenAll, badge } = useMenuColumns()
  return (
    <React.Fragment>
      <Mui.IconButton {...button}>
        <Mui.Badge {...badge}>
          <Icon.ViewColumn />
        </Mui.Badge>
      </Mui.IconButton>
      <Mui.Popover {...popover}>
        <Mui.List>
          {items.map((item) => (
            <Mui.ListItem key={item.key}>
              <Mui.ListItemIcon>
                <Mobx.Observer>
                  {() => (
                    <Mui.Switch
                      checked={item.hidden()}
                      onChange={item.changeHidden}
                    />
                  )}
                </Mobx.Observer>
              </Mui.ListItemIcon>
              <Mui.Typography variant="body1">{item.name}</Mui.Typography>
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
          <Mui.Button size="small" onClick={hiddenAll(true)}>
            Скрыть все
          </Mui.Button>
          <Mui.Button size="small" onClick={hiddenAll(false)}>
            Показать все
          </Mui.Button>
        </Mui.Stack>
      </Mui.Popover>
    </React.Fragment>
  )
})
