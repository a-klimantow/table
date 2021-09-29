import { useEffect, useState } from 'react'

import store from 'store'
import sup from 'superagent'

import { useAppStore, useUrl } from 'hooks'

interface IListItem {
  common_name: string
  id: number
  name: string
}

type UrlType = Parameters<typeof useUrl>[number]

export const useGetLists = (type: UrlType) => {
  const [list, setList] = useState<IListItem[] | null>(store.get(type))
  const url = useUrl(type)
  const { user } = useAppStore()

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
