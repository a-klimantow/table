import * as React from 'react'
import * as Mui from '@mui/material'

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
        mx: 4,
        my: 2,
        overflow: 'auto',
      },
    }}
  >
    {props.children}
  </Mui.Box>
))
