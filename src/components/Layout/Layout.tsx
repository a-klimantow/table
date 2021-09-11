import { memo } from 'react'
import { Box, BoxProps } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

import { PageLink } from 'types'

export const Layout = memo<BoxProps>(({ children }) => {
  const layout = useLayout()
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        ...layout,
      }}
    >
      {children}
    </Box>
  )
})

export function useLayout(): BoxProps['sx'] {
  const { path } = useRouteMatch() as { path: PageLink }
  switch (path) {
    case '/login/':
      return {
        gridTemplate: `
          ". . ." 1fr
          ". T ." 0.3fr
          ". E ." auto
          ". P ." auto 
          ". B ." 1fr / 
          ". . ." 1fr minmax(auto, 400px) 1fr
          `,
        rowGap: 4,
        '& form': {
          display: 'contents',
        },
      }
    default:
      return {}
  }
}
