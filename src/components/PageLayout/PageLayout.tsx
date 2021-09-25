import { memo, ReactNode } from 'react'
import { Paper } from '@material-ui/core'
import { Route } from 'react-router-dom'

export const PageLayout = memo<{ children: ReactNode }>((props) => {
  return (
    <Route path="/rewards/">
      <Paper
        sx={{
          gridArea: 'PAGE',
          display: 'grid',
          gridTemplateRows: '56px 1fr 56px',
        }}
        {...props}
      />
    </Route>
  )
})
