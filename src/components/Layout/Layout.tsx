import { observer } from 'mobx-react-lite'
import { Box, BoxProps, useTheme } from '@material-ui/core'

import { useAppStore } from 'hooks'

type LayoutProps = Pick<BoxProps, 'children'>

export const Layout = observer<LayoutProps>(({ children }) => {
  const template = useLayout()
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        gridTemplate: template,
      }}
    >
      {children}
    </Box>
  )
})

function useLayout() {
  const { user } = useAppStore()

  const { spacing } = useTheme()

  const H = spacing(7)
  const M = spacing(6)

  const moduleTemplate = `
    "H H" ${H}
    "M ." 1fr / ${M} 1fr
    `

  return user.isUnknown ? `"P" 1fr / 1fr` : moduleTemplate
}
