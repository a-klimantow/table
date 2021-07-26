import { observer } from 'mobx-react-lite'
import { Box, BoxProps } from '@material-ui/core'

export const ModuleLayout = observer<BoxProps>((props) => (
  <Box
    {...props}
    sx={{
      border: 1,
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: `
        "h h" 56px
        ". ." 1fr / 48px 1fr
      `,
    }}
  />
))
