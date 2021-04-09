import { FC } from 'react'
import { Button, AppBar, Typography, Paper } from '@material-ui/core'

export const App: FC = () => (
  <>
    <AppBar position="static">
      <Typography>hello</Typography>
    </AppBar>
    <Button>button</Button>
    <Button variant="contained">button 1</Button>
    <Button variant="outlined" color="secondary">
      button 2
    </Button>
    <Paper>
      <Typography>paper</Typography>
    </Paper>
  </>
)
