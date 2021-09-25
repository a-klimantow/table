import { memo, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  IconButtonProps,
} from '@material-ui/core'

import { Icon } from 'components'
import { SearchStore } from './useSearch'

export interface SearchProps {
  search: SearchStore
}

export const Search = observer<SearchProps>(({ search }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      search.updateCurrent()
    }, 1000)
    return () => clearTimeout(timer)
  }, [search, search.input])

  return (
    <OutlinedInput
      {...search.input}
      size="small"
      sx={{
        minWidth: 300,
        bgcolor: 'background.paper',
        fontSize: 14,
      }}
      startAdornment={<SearchIcon />}
      endAdornment={search.showButton && <ClearBtn {...search.button} />}
    />
  )
})

const SearchIcon = memo(() => (
  <InputAdornment position="start">
    <Icon type="search" fontSize="small" />
  </InputAdornment>
))

const ClearBtn = memo<IconButtonProps>((props) => (
  <InputAdornment position="end" sx={{ mr: -1 }}>
    <IconButton {...props}>
      <Icon type="search_clear" fontSize="small" />
    </IconButton>
  </InputAdornment>
))
