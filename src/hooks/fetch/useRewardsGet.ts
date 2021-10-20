import * as React from 'react'
import { useRouteMatch } from 'react-router-dom'
import sup, { SuperAgentRequest } from 'superagent'
//
import { currentUrl } from 'utils'
import { useToken, useFetchErrors } from 'hooks'

type Q = Parameters<SuperAgentRequest['query']>[0]

export function useRewardsGet() {
  const url = useRewardsUrl()
  const token = useToken()
  const handler = useFetchErrors()

  const request = sup
    .get(url)
    .auth(token.access, { type: 'bearer' })
    .on('error', handler)

  React.useEffect(() => () => request.abort())

  return async (...query: Q[]) => {
    query.forEach((q) => request.query(q))

    try {
      const { body } = await request
      const { items, metadata } = body
      const { total_count: count } = metadata.pagination
      return { items, count }
    } catch (error) {
      return { items: [], count: 0 }
    }
  }
}

// ============================

import { PageType as P } from 'types'

const useRewardsUrl = () => {
  const match = useRouteMatch<{ page: P }>('/:m/:page/')

  switch (match?.params.page) {
    case 'requests':
      return currentUrl('withdrawal')
    case 'reports':
      return currentUrl('withdrawal-report')
    case 'accruals':
      return currentUrl('withdrawal-arbitrary')
    default:
      console.error('not found')
      return ''
  }
}
