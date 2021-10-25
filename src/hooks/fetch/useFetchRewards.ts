import * as React from 'react'

import { IGrid } from 'types'
import { useFetch, useFetchAuth, useFetchRedirect, useFetchAbort } from 'hooks'

export function useFetchRewards(url = '', grid: IGrid, query: string) {
  const fetch = useFetch(url)
  useFetchAuth(fetch)
  useFetchRedirect(fetch)
  useFetchAbort(fetch)
  fetch.query(query)

  React.useEffect(() => {
    ;(async () => {
      grid.setLodaing(true)
      try {
        const response = await fetch
        const { items, metadata } = response.body
        const { total_count } = metadata.pagination
        grid.setItems(items)
        grid.setCount(total_count)
        grid.setLodaing(false)
      } catch (error) {}
    })()
  }, [grid, fetch])
}
