import * as React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import f from 'odata-filter-builder'

import { useFetchRewards } from 'hooks'
import { useGrid } from 'components/grid'
import { columns } from './columns'

export const useRequestsStore = () => {
  const grid = useGrid(columns)

  const store = useLocalObservable(() => ({
    grid,

    get filter() {
      if (!grid.search) return {}
      return f
        .or()
        .contains((x) => x.toLower('panel_name'), grid.search.toLowerCase())
        .contains((x) => x.toLower('country'), grid.search.toLowerCase())
        .toString()
    },

    get query() {
      return {
        $top: grid.top,
        $skip: grid.skip,
        $filter: this.filter,
      }
    },
  }))

  useFetch(store)
  return store
}

type S = ReturnType<typeof useRequestsStore>

function useFetch(store: S) {
  const fetch = useFetchRewards('withdrawal', store.query)

  React.useEffect(() => {
    const { grid } = store
    grid.setLodaing(true)
    ;(async () => {
      try {
        const { items, count } = await fetch()
        grid.setItems(items)
        grid.setCount(count)
        grid.setLodaing(false)
      } catch (err) {}
    })()
  }, [store, fetch])
}
