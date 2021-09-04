import { useEffect } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import {
  Paper,
  IconButton,
  IconButtonProps,
  InputBase,
} from '@material-ui/core'
import {
  SearchSharp as SearchIcon,
  CancelSharp as ClearIcon,
} from '@material-ui/icons'

const SearchPaper = observer((props) => (
  <Paper
    variant="outlined"
    sx={{
      height: 32,
      display: 'grid',
      gridTemplateColumns: '30px 1fr 30px',
      placeContent: 'center',
      placeItems: 'center',
      px: 0.5,
      gap: 0.5,
    }}
  >
    <SearchIcon fontSize="small" color="action" />
    {props.children}
  </Paper>
))

const ClearButton = observer<IconButtonProps>((props) => (
  <IconButton onClick={props.onClick} size="small">
    <ClearIcon fontSize="small" />
  </IconButton>
))

interface SearchProps {
  search: string
  onSearchChange(s: string): void
  delay?: number
}

export const Search = observer<SearchProps>((props) => {
  const state = useSearch(props)
  return (
    <SearchPaper>
      <InputBase
        placeholder="Поиск..."
        sx={{ fontSize: 12 }}
        value={state.value}
        onChange={(e) => state.setValue(e.target.value)}
      />
      {state.showClear && <ClearButton onClick={state.clearValue} />}
    </SearchPaper>
  )
})

function useSearch({ search, onSearchChange, delay = 1000 }: SearchProps) {
  const state = useLocalObservable(() => ({
    value: search,
    isTouched: false,

    setValue(value: string) {
      this.value = value
      this.isTouched = true
    },

    clearValue() {
      this.value = ''
      this.isTouched = true
    },

    get showClear() {
      return Boolean(this.value.trim())
    },
  }))

  useEffect(() => {
    const timer = setTimeout(() => {
      state.isTouched && onSearchChange(state.value)
    }, delay)
    return () => clearTimeout(timer)
  }, [onSearchChange, state, state.isTouched, state.value, delay])

  return state
}
