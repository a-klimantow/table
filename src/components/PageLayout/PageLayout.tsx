import { memo, ReactNode } from 'react'
import { Paper } from '@material-ui/core'

export const PageLayout = memo<{ children: ReactNode }>((props) => {
  return (
    <Paper
      data-app-page
      sx={{
        display: 'grid',
        gridTemplateRows: '56px 1fr 56px',
      }}
      {...props}
    />
  )
})
