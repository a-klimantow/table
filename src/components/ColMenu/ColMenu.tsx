import { Observer, observer } from 'mobx-react-lite'
import {
  Popover,
  IconButton,
  Stack,
  Switch,
  Typography,
  Button,
} from '@material-ui/core'

import { ICol } from 'types'
import { Icon } from 'components'
import { useMenu } from 'hooks'
import { memo } from 'react'
import { action } from 'mobx'

export const ColMenu = observer<{ columns: ICol[] }>(({ columns }) => {
  const { menu, ref } = useMenu()
  return (
    <>
      <IconButton ref={ref} onClick={() => menu.toggle('open')}>
        <Icon type="col_menu" />
      </IconButton>
      <Popover
        open={menu.open}
        onClose={() => menu.toggle('close')}
        anchorEl={ref.current}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Menu columns={columns} />
      </Popover>
    </>
  )
})

const Menu = memo<{ columns: ICol[] }>(({ columns }) => (
  <Stack p={1} gap={1}>
    {columns.map((c) => (
      <Stack key={c.key} direction="row" alignItems="center" gap={1}>
        <Observer>
          {() => (
            <Switch
              size="small"
              checked={!c.hidden}
              onChange={action(() => {
                c.hidden = !c.hidden
              })}
            />
          )}
        </Observer>
        <Typography>{c.name}</Typography>
      </Stack>
    ))}
    <Stack direction="row" justifyContent="space-between" gap={1}>
      {['Скрыть', 'Показать'].map((act) => (
        <Button
          key={act}
          onClick={action(() => {
            columns.forEach((c) => {
              c.hidden = act.startsWith('Скрыть')
            })
          })}
        >
          {act} все
        </Button>
      ))}
    </Stack>
  </Stack>
))
