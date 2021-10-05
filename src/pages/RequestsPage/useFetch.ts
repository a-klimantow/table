import { useEffect } from 'react'
import superagent from 'superagent'

import { useUser, useUrl } from 'hooks'
import { PageStore } from './store'
import { IRequestItem } from 'types'

export function useFetch(store: PageStore) {
  const url = useUrl('withdrawal')
  const user = useUser()

  const req = superagent
    .get(url)
    .auth(user.token, { type: 'bearer' })
    .query(store.pagination.query)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await req.then()
        const { metadata, items } = response.body
        const { total_count } = metadata.pagination
        store.pagination.setCount(total_count)
        store.grid.setRows(items.map(createRow))
      } catch (error) {
        console.log(error)
      }
    })()
    return () => req.abort()
  }, [req, store])
}

function createRow(item: IRequestItem): IRequestItem {
  return { ...item, panel_name: `${item.panel_name} ${item.country}` }
}
