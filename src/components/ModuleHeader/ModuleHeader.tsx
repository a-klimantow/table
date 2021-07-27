import { observer } from 'mobx-react-lite'
import { Box } from '@material-ui/core'

import { MenuApp, MenuUser } from 'components'

export const ModuleHeader = observer(({ children }) => (
  <Box
    sx={{
      gridArea: 'h',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 1,
      borderBottom: 1,
      borderColor: 'divider',
      p: 1,
    }}
  >
    <MenuApp />
    {children}
    <MenuUser />
  </Box>
))
