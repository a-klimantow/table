import { useLocalObservable } from 'mobx-react-lite'
import * as React from 'react'

const SearchContext = React.createContext({} as ReturnType<typeof useSearch>)

export const SearchContextProvider = SearchContext.Provider

export const useSearchContext = () => React.useContext(SearchContext)

export const useSearch = (value = '') =>
  useLocalObservable(() => ({
    value,

    current: value,

    touched: false,

    setValue(value = '') {
      this.value = value
      this.touched = true
    },

    update() {
      this.current = this.value.trim()
    },
  }))
