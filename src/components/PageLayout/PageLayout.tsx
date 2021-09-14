/* eslint-disable @typescript-eslint/no-unused-vars */
import { observer } from 'mobx-react-lite'
import { Box, BoxProps } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'

interface PageLayoutProps {
  layout?: 'page' | 'module'
}

export const PageLayout = observer<PageLayoutProps>(
  ({ children, layout = 'page' }) => {
    const template = useLayout(layout)
    return (
      <Box
        sx={{
          border: 1,
          display: 'grid',
        }}
      >
        {children}
      </Box>
    )
  }
)

export function useLayout(layout: PageLayoutProps['layout']): BoxProps['sx'] {
  const { path } = useRouteMatch<{ path: 'state' }>()
  console.log(path)
  return {}
}
