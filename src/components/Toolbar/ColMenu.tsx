import { memo } from 'react'
import { action } from 'mobx'
import { Observer, observer } from 'mobx-react-lite'
import {
  IconButton,
  Popover,
  Stack,
  Switch,
  Typography,
  Button,
} from '@material-ui/core'

import { ICol } from 'types'
import { Icon } from 'components'
import { usePopover } from './usePopover'

export const ColMenu = observer<{ columns: ICol[] }>(({ columns }) => {
  const { button, popover } = usePopover()
  return (
    <>
      <IconButton {...button}>
        <Icon type="col_menu" />
      </IconButton>
      <Observer>
        {() => (
          <Popover {...popover}>
            {columns.map((item) => (
              <Item key={item.key} item={item} />
            ))}
            <Buttons columns={columns} />
          </Popover>
        )}
      </Observer>
    </>
  )
})

const Item = memo<{ item: ICol }>(({ item }) => (
  <Stack direction="row" p={1} gap={1}>
    <Observer>
      {() => (
        <Switch
          checked={!item.hidden}
          onChange={action(() => (item.hidden = !item.hidden))}
          size="small"
        />
      )}
    </Observer>
    <Typography>{item.name}</Typography>
  </Stack>
))

const Buttons = memo<{ columns: ICol[] }>(({ columns }) => {
  const hiddenAll = (h: boolean) => {
    return action(() => columns.forEach((c) => (c.hidden = h)))
  }

  return (
    <Stack direction="row" justifyContent="space-between" gap={1} p={1}>
      <Button size="small" onClick={hiddenAll(true)}>
        Скрыть все
      </Button>
      <Button size="small" onClick={hiddenAll(false)}>
        Показать все
      </Button>
    </Stack>
  )
})
