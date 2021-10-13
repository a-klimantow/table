import * as React from 'react'

import { observer } from 'mobx-react-lite'

import { SearchProvider, SearchInput } from './atoms'
import { SearchContextProvider, useSearch } from './hooks'

export { useSearch }

interface SearchProps {
  search: ReturnType<typeof useSearch>
}

export const Search = observer<SearchProps>(({ search }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      search.touched && search.update()
    }, 1000)
    return () => clearTimeout(timer)
  }, [search, search.value, search.touched])

  return (
    <SearchContextProvider value={search}>
      <SearchProvider>
        <SearchInput />
      </SearchProvider>
    </SearchContextProvider>
  )
})
