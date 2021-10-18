import * as React from 'react'
import sup from 'superagent'
import storage from 'store'

import { useToken, useFetchErrors } from 'hooks'
import { currentUrl } from 'utils'

interface IListItem {
  common_name: string
  id: number
  name: string
}

type U =
  | 'panels'
  | 'export-withdrawal-panels'
  | 'export-withdrawal-statuses'
  | 'payment-systems'

type S = null | IListItem[]

export function useFetchLists(url: U): S {
  const token = useToken()
  const handler = useFetchErrors()

  const request = sup
    .get(currentUrl(`list/${url}`))
    .auth(token.access, { type: 'bearer' })
    .on('error', handler)

  const [list, setList] = React.useState<S>(() => storage.get(url) as S)

  React.useEffect(() => {
    if (!list)
      (async () => {
        try {
          const { body } = await request.then()
          storage.set(url, body.data)
          setList(body.data)
        } catch (error) {}
      })()
  })

  return list
}
