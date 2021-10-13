import { useEffect } from 'react'
import superagent, { ResponseError } from 'superagent'

import { useUser, useUrl } from 'hooks'
import { IAccrualItem } from 'types'
import { dateFormate } from 'utils'
import { PageStore } from './store'
import { useHistory } from 'react-router'

export function useFetch(store: PageStore) {
  const url = useUrl('withdrawal-arbitrary')
  const user = useUser()
  const history = useHistory()

  const req = superagent
    .get(url)
    // .auth(user.token, { type: 'bearer' })
    .query(store.pagination.query)
    .on('error', (err: ResponseError) => {
      err.response?.unauthorized && history.push('#refresh')
    })

  useEffect(() => {
    if (!history.location.hash)
      (async () => {
        try {
          const response = await req.then()
          const { metadata, items } = response.body
          const { total_count } = metadata.pagination
          store.pagination.setCount(total_count)

        } catch (error) {
          console.log(error)
        }
      })()
    return () => req.abort()
  }, [req, store, history])
}

function createRow(item: IAccrualItem) {
  return {
    ...item,
    file: item.file.file_name,
    created: dateFormate(item.created),
    amount: Number(item.amount).toLocaleString(),
  }
}
