import { useEffect } from 'react'
import superagent from 'superagent'

import { useAppStore, useUrl } from 'hooks'
import { PageStore } from './store'
import { IAccrualItem } from 'types'

export function useFetch(store: PageStore) {
  const url = useUrl('withdrawal-arbitrary')
  const { user } = useAppStore()

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

function createRow(item: IAccrualItem) {
  return {
    ...item,
    file_name: item.file.file_name,
    created: new Intl.DateTimeFormat('ru-Ru', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(item.created)),
    amount: Number(item.amount).toLocaleString(),
  }
}
