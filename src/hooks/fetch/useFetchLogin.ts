import * as React from 'react'
import { ResponseError } from 'superagent'

import { IErrors } from 'types'
import { useToken, useUser, useFetch, useNotifications } from 'hooks'
import { useLoginForm } from 'pages/login/hooks'
type F = ReturnType<typeof useLoginForm>

type LoginResponseBody = {
  email: string
  id: number
  name: string
  partner_id: number
  refresh_token: string
  roles: []
  token: string
}

export function useFetchLogin(form: F) {
  const token = useToken()
  const user = useUser()
  const fetch = useFetch('login', 'post')
  const ntf = useNotifications()

  fetch.send(form.data)

  const RoleHaveAccess = [
    'AccrualsManager',
    'PaymentsManager'
  ]

  const intersect = (arr1: string[], arr2: string[]) => {
    let result = false
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j< arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result = true
        }
      }
    }
    return result
  }

  const checkUserRole = (body: LoginResponseBody) => {
    if (intersect(RoleHaveAccess, body.roles)) {
      token.update(body)
      user.update(body)
    } else {
      form.loading = false
      return ntf.warning('Контент не доступен')
    }
  }

  React.useEffect(() => {
    form.loading &&
      (async () => {
        try {
          const { body } = await fetch
          checkUserRole(body)
        } catch (error) {
          const { response } = error as ResponseError
          if (response?.body) {
            const { code, description } = response.body.errors as IErrors
            if (code === '404') form.setError('email', description)
            if (code === '400') form.setError('password', description)
          }
        }
      })()
  }, [fetch, form, form.loading, token, user])
}
