import { useEffect } from 'react'
import s from 'superagent'

import { useUrl } from 'hooks'
import { FromType } from './useFormLogin'
import { useAppStore } from 'stores'

export function useFetch(form: FromType) {
  const url = useUrl('login')
  const app = useAppStore()

  const login = s
    .post(url)
    .type('application/json')
    .send(form.data ?? {})

  useEffect(() => {
    if (!form.loading) return
    login
      .then(({ body }) => {
        app.updateUser(body.data)
        app.updateToken(body.data)
      })
      .catch((err) => {
        form.fail(err.response.body)
      })

    return () => login.abort()
  }, [form, login, app])
}
