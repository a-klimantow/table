import { FC } from 'react'
import { Box, useTheme } from '@material-ui/core'

export const Layout: FC = ({ children }) => {
  const { spacing } = useTheme()
  const head = spacing(7)
  const menu = spacing(6)
  const gapY = spacing(3)
  const gapX = spacing(2)

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        gridTemplate: `
        "HEAD HEAD HEAD HEAD" ${head}
        "MENU .    .    .   " ${gapX}
        "MENU .    PAGE .   " calc(100vh - ${head} - (${gapX} * 2))
        "MENU .    .    .   " ${gapX} / ${menu} ${gapY} 1fr ${gapY}
        `,
        bgcolor: 'grey.100',
      }}
    >
      {children}
    </Box>
  )
}
