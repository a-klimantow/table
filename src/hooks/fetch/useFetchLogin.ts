import * as React from 'react'
import { ResponseError } from 'superagent'

import { IErrors, IUser } from 'types'
import { useToken, useUser, useFetch, useNotifications } from 'hooks'
import { useLoginForm } from 'pages/login/hooks'
type F = ReturnType<typeof useLoginForm>

const roles: IUser['roles'] = ['AccrualsManager', 'PaymentsManager']

const includesRole = (userRoles: IUser['roles']) =>
  roles.some((roles) => userRoles.includes(roles))

export function useFetchLogin(form: F) {
  const token = useToken()
  const user = useUser()
  const fetch = useFetch('login', 'post')
  const ntf = useNotifications()

  fetch.send(form.data)

  React.useEffect(() => {
    form.loading &&
      (async () => {
        try {
          const { body } = await fetch
          if (includesRole(body.roles)) {
            token.update(body)
            user.update(body)
          } else {
            form.loading = false
            ntf.warning('Контент не доступен')
          }
        } catch (error) {
          const { response } = error as ResponseError
          if (response?.body) {
            const { code, description } = response.body.errors as IErrors
            if (code === '404') form.setError('email', description)
            if (code === '400') form.setError('password', description)
          }
        }
      })()
  }, [fetch, form, form.loading, token, user, ntf])
}
