import { useEffect, useState } from 'react'

import store from 'store'
import sup from 'superagent'

import { useUser, useUrl } from 'hooks'
import { IListItem } from 'types'

type UrlType = Parameters<typeof useUrl>[number]

export const useGetList = (type: UrlType) => {
  const [list, setList] = useState<IListItem[] | null>(store.get(type))
  const url = useUrl(type)
  const user = useUser()

  const request = sup.get(url).auth(user.token, { type: 'bearer' })

  useEffect(() => {
    if (list) return
    ;(async () => {
      try {
        const { body } = await request.then()
        setList(body.data)
        store.set(type, body.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [list, request, type])

  return list
}
