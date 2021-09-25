import { memo } from 'react'
import { Stack, Switch, Typography, Button } from '@material-ui/core'
import { Observer } from 'mobx-react-lite'

import { ICol } from 'types'
import { action } from 'mobx'

export const Menu = memo<{ columns: ICol[] }>(({ columns }) => (
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
