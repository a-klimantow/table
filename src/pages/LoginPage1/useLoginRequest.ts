import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import superagent from 'superagent'

import { useUrl, useAppContext } from 'hooks'
import { Store } from './useLoginForm'

export function useLoginRequest(store: Store) {
  const url = useUrl('login')
  const app = useAppContext()
  const history = useHistory()

  useEffect(() => {
    if (store.data) {
      superagent
        .post(url)
        .type('application/json')
        .send(store.data)
        .then((res) => {
          store.success()
          app.setUser(res.body.data)
        })
        .catch((e) => {
          store.fail(e.response.body.errors)
        })
    }
  }, [store, store.data, url, app, history])
}
