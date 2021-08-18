import React from 'react'
import { Box, BoxProps } from '@material-ui/core'

export const TableToolbar = React.memo<BoxProps>(({ children }) => (
  <Box
    sx={{
      display: 'flex',
      gap: 1,
      p: 1,
      backgroundColor: 'grey.300',
    }}
  >
    {children}
  </Box>
))
