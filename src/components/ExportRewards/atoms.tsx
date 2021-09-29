import { memo } from 'react'
import { action } from 'mobx'
import { Button, Drawer, Typography, Stack } from '@material-ui/core'

import { Icon } from 'components'
import { useExportContext } from './context'
import { observer } from 'mobx-react-lite'

export const ExportButton = memo(() => {
  const exp = useExportContext()
  return <Button {...exp.btnDrawer}>Экспорт</Button>
})

export const ExportDrawer = observer(({ children }) => {
  const exp = useExportContext()
  return (
    <Drawer {...exp.drawer}>
      <Stack gap={3} px={3} py={4} minHeight="100%">
        {children}
      </Stack>
    </Drawer>
  )
})

export const Title = memo(() => (
  <Typography variant="subtitle1" fontSize={22}>
    Экспорт заявок
  </Typography>
))
