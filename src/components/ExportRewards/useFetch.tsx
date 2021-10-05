import { useEffect } from 'react'
import sup from 'superagent'

import { useUrl, useUser } from 'hooks'
import { ExportStore } from './store'

export function useFetch(store: ExportStore) {
  const moneyUrl = useUrl('withdrawal/exportwebmoney')
  const kassaUrl = useUrl('withdrawal/exportyookassa')
  const user = useUser()

  const url = store.isWebMoney ? moneyUrl : kassaUrl

  const request = sup
    .post(url)
    .auth(user.token, { type: 'bearer' })
    .query(store.query)

  store.isWebMoney && request.send(store.postData)

  useEffect(() => {
    if (store.fetchStatus === 'wait') return
    ;(async () => {
      try {
        const response = await request.then()
        console.log('success', response)
      } catch (error) {
        console.log('errro')
      } finally {
        store.fetchStop()
      }
    })()
  }, [request, store, store.fetchStatus])
}
