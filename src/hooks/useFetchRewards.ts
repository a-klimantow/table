import { useEffect } from 'react'
import sup from 'superagent'
//
import { useUrl, useToken, useFetchErrors } from 'hooks'

type U = Parameters<typeof useUrl>[0]

export function useFetchRewards(type: U) {
  const url = useUrl(type)
  const handler = useFetchErrors()
  const token = useToken().access

  const fetch = sup
    .get(url)
    .auth(token, { type: 'bearer' })
    .on('error', handler)

  useEffect(() => () => fetch.abort())

  return fetch
}
