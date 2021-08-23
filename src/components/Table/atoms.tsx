import React from 'react'
import { Stack, StackProps, Paper, PaperProps } from '@material-ui/core'

export const TableWrapper = React.memo<PaperProps>(({ children }) => (
  <Paper
    sx={{
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Paper>
))

interface TableSectionProps extends StackProps {
  toolbar?: boolean
}

export const TableSection = React.memo<TableSectionProps>(({ toolbar, children }) => (
  <Stack
    bgcolor={toolbar ? 'grey.300' : 'inherit'}
    direction="row"
    alignItems="center"
    gap={1}
    p={1}
    height={52}
    borderTop={toolbar ? 0 : 1}
    borderColor="divider"
  >
    {children}
  </Stack>
))
