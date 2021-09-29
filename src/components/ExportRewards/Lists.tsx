import { memo } from 'react'
import { Stack, Radio, Checkbox } from '@material-ui/core'
import { Observer } from 'mobx-react-lite'

import { useExportContext } from './context'
import { Title, Buttons, List, ListItem } from './atoms'
import { useLists } from './useLists'

export const Lists = memo(() => {
  const { systems, statuses, panels } = useLists()
  const exp = useExportContext()

  return (
    <Stack gap={3} px={3} py={4} minHeight="100%" minWidth={440}>
      <Title />
      <List name="Платежная система">
        {systems?.map((item) => (
          <ListItem key={item.id} label={item.common_name}>
            <Observer>
              {() => (
                <Radio
                  size="small"
                  checked={item.name === exp.activeSystem}
                  onChange={() => exp.setActiveSytem(item.name)}
                />
              )}
            </Observer>
          </ListItem>
        ))}
      </List>

      <List name="Статус заявки">
        {statuses?.map((item) => (
          <ListItem key={item.id} label={item.common_name}>
            <Observer>
              {() => (
                <Radio
                  size="small"
                  checked={item.name === exp.activeStatus}
                  onChange={() => exp.setActiveStatus(item.name)}
                />
              )}
            </Observer>
          </ListItem>
        ))}
      </List>

      <List name="Панели" showInfo>
        {panels?.map((item) => (
          <ListItem key={item.id} label={item.common_name}>
            <Observer>
              {() => (
                <Checkbox
                  size="small"
                  checked={exp.panelIds.includes(item.id)}
                  onChange={() => exp.changePanelIds(item.id)}
                  disabled={exp.disablePanels}
                />
              )}
            </Observer>
          </ListItem>
        ))}
      </List>
      <Buttons />
    </Stack>
  )
})
