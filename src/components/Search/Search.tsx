import React from 'react'
import { Paper, InputBase, IconButton, ThemeProvider } from '@material-ui/core'
import { Search as SearchIcon, CancelSharp as CancelIcon } from '@material-ui/icons'
import { observer } from 'mobx-react-lite'

import { useSearchTheme } from './useSearchTheme'
import { SearchStore } from './store'

interface SearchProps {
  quickFilter: string
  changeQuickFilter(s: string): void
}

export const Search = observer<SearchProps>(({ quickFilter, changeQuickFilter }) => {
  const theme = useSearchTheme()
  const [store] = React.useState(() => new SearchStore(quickFilter))

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (store.touched) {
        changeQuickFilter(store.value.trim())
        store.changeTouched()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [store.value, store.touched, store, changeQuickFilter])

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <SearchIcon />
        <InputBase value={store.value} onChange={(e) => store.change(e.target.value)} />
        {store.showClearButton && (
          <IconButton onClick={() => store.clear()}>
            <CancelIcon />
          </IconButton>
        )}
      </Paper>
    </ThemeProvider>
  )
})
