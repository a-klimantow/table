import { useMemo } from 'react'
import sup from 'superagent'
//
import { useUrl, useToken, useFetchErrors } from 'hooks'

export function useFetchRewards(query: string) {
  const handler = useFetchErrors()
  const token = useToken().access
  const [req] = [useUrl('withdrawal')]

  return {
    requests: useMemo(
      () =>
        sup
          .get(req)
          .auth(token, { type: 'bearer' })
          .query(query)
          .on('error', handler),
      [req, token, query, handler]
    ),
  }
}
