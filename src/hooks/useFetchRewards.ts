import { useEffect } from 'react'
import sup from 'superagent'
//
import { useUrl, useToken, useFetchErrors } from 'hooks'
import { IRequestItem, IAccrualItem } from 'types'

type Type = 'requests' | 'response' | 'accruals'

type ItemType<T extends Type> = T extends 'requests'
  ? Array<IRequestItem>
  : never

export function useFetchRewards(type: Type, query = '') {
  const url = useUrl(
    type === 'requests' ? 'withdrawal' : 'withdrawal-arbitrary'
  )
  const handler = useFetchErrors()
  const token = useToken().access

  const fetch = sup
    .get(url)
    .auth(token, { type: 'bearer' })
    .query(query)
    .on('error', handler)

  useEffect(() => () => fetch.abort())

  return () =>
    fetch.then((res) => ({
      items: res.body.items,
      count: res.body.metadata.pagination.total_count as number,
    }))
}
