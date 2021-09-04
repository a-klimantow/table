import { observer } from 'mobx-react-lite'
import { Paper, Box } from '@material-ui/core'

export const TablePaper = observer((props) => (
  <Paper
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    {props.children}
  </Paper>
))

export const TableToolbar = observer((props) => (
  <Box
    sx={{
      height: 54,
      bgcolor: 'grey.300',
      px: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 1,
    }}
  >
    {props.children}
  </Box>
))
