import { memo } from 'react'
import { Paper, PaperProps, Stack, StackProps } from '@material-ui/core'

type PageProps = Pick<PaperProps, 'children'> & { template?: string }

export const Page = memo<PageProps>(({ children, template = 'unset' }) => (
  <Paper
    sx={{
      mx: 4,
      my: 2,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateRows: template,
    }}
  >
    {children}
  </Paper>
))


