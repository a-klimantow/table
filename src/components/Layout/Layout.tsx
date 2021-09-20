import { FC } from 'react'
import { Box } from '@material-ui/core'

export const Layout: FC = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        gridTemplate: `
        ". ." auto
        ". ." 1fr / auto 1fr
        `,
        bgcolor: 'grey.100',
      }}
    >
      {children}
    </Box>
  )
}
