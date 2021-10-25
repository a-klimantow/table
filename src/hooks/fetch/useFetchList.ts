import * as React from 'react'

import { IListItem as L } from 'types'
import { useFetch, useFetchAuth, useFetchAbort } from 'hooks'

type U =
  | 'panels'
  | 'payment-systems'
  | 'export-withdrawal-panels'
  | 'export-withdrawal-statuses'

export function useFetchList(url: U, setter: (l: L[]) => void, start = true) {
  const fetch = useFetch(`list/${url}`)
  useFetchAuth(fetch)
  useFetchAbort(fetch)

  React.useEffect(() => {
    start &&
      (async () => {
        try {
          const res = await fetch
          setter(res.body as L[])
        } catch (error) {}
      })()
  }, [start, fetch, setter])
}
