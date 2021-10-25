import * as React from 'react'
import sup, { ResponseError as ResErr } from 'superagent'
import { useHistory } from 'react-router-dom'

import { currentUrl } from 'utils'
import { useToken } from 'hooks'

type M = 'get' | 'post' | 'del'
type F = ReturnType<typeof useFetch>

export const useFetch = (url = '', method: M = 'get') =>
  sup[method](currentUrl(url))

export function useFetchAuth(fetch: F) {
  const token = useToken()
  return fetch.auth(token.access, { type: 'bearer' })
}

export function useFetchRedirect(fetch: F) {
  const history = useHistory()
  return fetch.on('error', ({ response }: ResErr) => {
    response?.unauthorized && history.push('/user/refresh/')
  })
}

export function useFetchAbort(fetch: F) {
  React.useEffect(() => () => fetch.abort(), [fetch])
  return fetch
}
