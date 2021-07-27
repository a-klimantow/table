import { observer } from 'mobx-react-lite'
import { Box } from '@material-ui/core'

export const PageLayout = observer((props) => (
  <Box
    {...props}
    sx={{
      m: 2,
    }}
  />
))
