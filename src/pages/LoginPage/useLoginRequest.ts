import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import superagent from 'superagent'

import { useUrl, useAppStore } from 'hooks'
import { Store } from './useLoginForm'

export function useLoginRequest(form: Store) {
  const history = useHistory()
  const { user } = useAppStore()
  const url = useUrl('login')

  useEffect(() => {
    if (form.data) {
      superagent
        .post(url)
        .type('application/json')
        .send(form.data)
        .then((res) => {
          form.success()
          user.update(res.body.data)
        })
        .catch((e) => {
          form.fail(e.response.body.errors)
        })
    }
  }, [form, form.data, url, user, history])
}
