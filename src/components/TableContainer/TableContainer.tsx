import { FC } from 'react'
import { Paper } from '@material-ui/core'

export const TableContainer: FC = ({ children }) => (
  <Paper
    variant="outlined"
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </Paper>
)
