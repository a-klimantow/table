import { memo, useState, useEffect } from 'react'
import { runInAction } from 'mobx'
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  IconButtonProps,
  Box,
} from '@material-ui/core'

import { Icon } from 'components'

interface SearchProps {
  search: { value: string }
  delay?: number
}

function useSearch({ search, delay = 700 }: SearchProps) {
  const [value, setValue] = useState<string>(search.value)
  useEffect(() => {
    const timer = setTimeout(() => {
      runInAction(() => {
        search.value = value.trim()
      })
    }, delay)
    return () => clearTimeout(timer)
  }, [value, search, delay])
  return {
    value,
    change: (v: string) => setValue(v),
    clear: () => setValue(''),
    showClear: Boolean(value.trim()),
  }
}

export const Search = memo<SearchProps>((props) => {
  const search = useSearch(props)
  return (
    <OutlinedInput
      size="small"
      startAdornment={<SearchIcon />}
      endAdornment={search.showClear && <ClearButton onClick={search.clear} />}
      value={search.value}
      onChange={(e) => search.change(e.target.value)}
    />
  )
})

const ClearButton = memo<IconButtonProps>((props) => (
  <InputAdornment position="end">
    <IconButton {...props} sx={{ mr: -1 }}>
      <Icon type="search_clear" fontSize="small" />
    </IconButton>
  </InputAdornment>
))

const SearchIcon = memo(() => (
  <InputAdornment position="start">
    <Icon fontSize="small" type="search" />
  </InputAdornment>
))
