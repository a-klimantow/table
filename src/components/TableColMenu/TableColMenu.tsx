import React from 'react'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { IconButton, Popover, Box, Stack, Button } from '@material-ui/core'
import { ViewWeekSharp as Icon } from '@material-ui/icons'

import { TableProps } from 'components'
import { MenuItem } from './MenuItem'
import { useTableColMenu } from './useTableColMenu'

type TableColMenuProps = Pick<TableProps, 'columns'>

export const TableColMenu = observer<TableColMenuProps>(({ columns }) => {
  const { button, popover } = useTableColMenu()

  const handleHiddenAll = React.useCallback(
    (hidden: boolean) => () =>
      runInAction(() => {
        columns.forEach((c) => (c.hidden = hidden))
      }),
    [columns]
  )
  return (
    <>
      <IconButton {...button}>
        <Icon />
      </IconButton>
      <Popover {...popover}>
        <Box sx={{ p: 1 }}>
          {columns.map((c) => (
            <MenuItem
              key={c.key}
              name={c.name}
              checked={!c.hidden}
              onChange={(e) => runInAction(() => (c.hidden = !e.target.checked))}
            />
          ))}
          <Stack direction="row" justifyContent="space-between" pt={1} gap={1}>
            <Button size="small" onClick={handleHiddenAll(true)}>
              Скрыть все
            </Button>
            <Button size="small" onClick={handleHiddenAll(false)}>
              Показать все
            </Button>
          </Stack>
        </Box>
      </Popover>
    </>
  )
})
