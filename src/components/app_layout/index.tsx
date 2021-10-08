import * as React from 'react'
import * as Mui from '@material-ui/core'

export const AppLayout = React.memo<Mui.BoxProps>((props) => (
  <Mui.Box
    sx={{
      height: '100vh',
      bgcolor: 'grey.100',
      display: 'grid',
      gridTemplate: 'auto 1fr / auto 1fr',
      borderColor: 'divider',

      '& > [data-app-header]': {
        gridArea: '1 / 1 / 2 / -1',
      },

      '& > [data-app-menu]': {
        gridArea: '2 / 1 / -1 / 2',
        bgcolor: 'background.paper',
      },

      '& > [data-app-page]': {
        gridArea: '2 / 2 / -1 / -1',
        px: 1,
        py: 2,
      },
    }}
  >
    {props.children}
  </Mui.Box>
))
