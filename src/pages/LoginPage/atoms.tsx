import { memo } from 'react'
import { Typography, Box, BoxProps } from '@material-ui/core'

export const Title = memo(() => (
  <Typography variant="h1" fontSize={30} align="center" gridArea="T">
    Panel Rider
  </Typography>
))

export const Page = memo<BoxProps>((props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridColumn: '1 / -1',
      gridRow: '1 / -1',
      gridTemplate: `
      ". . ." 1fr
      ". T ." auto
      ". F ." auto
      ". . ." 1fr / auto minmax(auto, 400px) auto
      `,
      p: 2,
      rowGap: 5,
      '& form': {
        gridArea: 'F',
      },
    }}
  />
))
