import * as React from 'react'

import { IListItem as L } from 'types'
import { useFetch, useFetchAuth, useFetchAbort, useFetchRedirect } from 'hooks'

type U =
  | 'panels'
  | 'payment-systems'
  | 'export-withdrawal-panels'
  | 'export-withdrawal-statuses'

export function useFetchList(url: U) {
  const fetch = useFetch(`list/${url}`)
  useFetchRedirect(fetch)
  useFetchAuth(fetch)
  useFetchAbort(fetch)

  return () => fetch.then((res) => res.body as L[])
}

export function useFetchImportList(setter: (l: L[]) => void, start = true) {
  const fetch = useFetchList('payment-systems')

  React.useEffect(() => {
    start &&
      (async () => {
        try {
          setter(await fetch())
        } catch (error) {}
      })()
  })
}

type S = (...lists: Array<L[]>) => void

const activeItem = (i: L): L => ({
  ...i,
  active: /(kassa|новые|бп|эм)/i.test(i.common_name),
})

export function useFetchExportLists(start = false, setter: S) {
  const fetchPays = useFetchList('payment-systems')
  const fetchStatuses = useFetchList('export-withdrawal-statuses')
  const fetchPanels = useFetchList('export-withdrawal-panels')

  React.useEffect(() => {
    start &&
      (async () => {
        try {
          const pays = (await fetchPays()).map(activeItem)
          const statuses = (await fetchStatuses()).map(activeItem)
          const panels = (await fetchPanels()).map(activeItem)
          setter(pays, statuses, panels)
        } catch (err) {}
      })()
  })
}
