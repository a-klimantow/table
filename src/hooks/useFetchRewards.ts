import { useMemo } from 'react'
import sup from 'superagent'
//
import { useUrl, useToken } from 'hooks'

export function useFetchRewards(query: string) {
  const token = useToken().access
  const [req] = [useUrl('withdrawal')]

  return {
    requests: useMemo(
      () => sup.get(req).auth(token, { type: 'bearer' }).query(query),
      [req, token, query]
    ),
  }
}
