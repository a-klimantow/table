import { observer } from 'mobx-react-lite'
import { Box, BoxProps } from '@material-ui/core'

export const ModuleLayout = observer<BoxProps>((props) => (
  <Box
    {...props}
    sx={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: `
        "h h" 56px
        ". ." calc(100vh - 56px) / 48px 1fr
      `,
    }}
  />
))
