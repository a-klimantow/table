import { useEffect } from 'react'
import s, { ResponseError } from 'superagent'

import { useUrl } from 'hooks'
import { FromType } from './useFormLogin'
import { useAppStore } from 'stores'
import { IUser } from 'types'

export function useFetch(form: FromType) {
  const url = useUrl('login')
  const app = useAppStore()

  const login = s
    .post(url)
    .type('application/json')
    .send(form.data ?? {})

  useEffect(() => {
    if (!form.loading) return
    ;(async () => {
      try {
        const { body } = await login.then()
        const { refresh_token, token, ...user } = body.data as IUser
        app.updateUser(user)
        app.updateToken({ access: token, refresh: refresh_token })
      } catch (error) {
        const { response } = error as ResponseError
        response?.body && form.fail(response.body)
      }
    })()

    return () => login.abort()
  }, [form, login, app])
}
