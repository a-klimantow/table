import { useEffect } from 'react'
import s from 'superagent'

import { useUser, useUrl } from 'hooks'
import { FromType } from './useFormLogin'

export function useFetch(form: FromType) {
  const user = useUser()
  const url = useUrl('login')
  const login = s
    .post(url)
    .type('application/json')
    .send(form.data ?? {})

  useEffect(() => {
    if (!form.loading) return
    login
      .then(({ body }) => {
        const data = body.data
        user.setUser(data)
      })
      .catch((err) => {
        form.fail(err.response.body)
      })

    return () => login.abort()
  }, [form, login, user])
}
