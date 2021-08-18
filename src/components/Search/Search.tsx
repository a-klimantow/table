import React from 'react'
import { Paper, PaperProps, InputBase, IconButton } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'

export const Search = () => (
  <SearchWrapper>
    <IconButton size="small">
      <SearchIcon fontSize="small" />
    </IconButton>
    <InputBase />
    <IconButton></IconButton>
  </SearchWrapper>
)

const SearchWrapper = React.memo<PaperProps>(({ children, variant = 'outlined' }) => (
  <Paper
    variant={variant}
    sx={{
      display: 'grid',
      gridTemplateColumns: '30px 1fr 30px',
      placeItems: 'center',
      px: 0.5,
      gap: 0.5,
    }}
  >
    {children}
  </Paper>
))
