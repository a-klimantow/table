import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useSuperagent } from 'hooks'
import { PageStore } from './store'
import { IRequestItem } from 'types'

export function useFetch(store: PageStore) {
  const { requests } = useSuperagent()
  const { hash } = useLocation()

  requests.query(store.pagination.query)

  useEffect(() => {
    !hash &&
      (async () => {
        try {
          const response = await requests.then()
          const { metadata, items } = response.body
          const { total_count } = metadata.pagination
          store.pagination.setCount(total_count)
          store.grid.setRows(items.map(createRow))
        } catch (error) {
          console.log(error)
        }
      })()
    return () => requests.abort()
  }, [requests, store, hash])
}

function createRow(item: IRequestItem): IRequestItem {
  return { ...item, panel_name: `${item.panel_name} ${item.country}` }
}
