import * as React from 'react'
import { ResponseError } from 'superagent'

import { IErrors } from 'types'
import { useToken, useUser, useFetch } from 'hooks'
import { useLoginForm } from 'pages/login/hooks'

type F = ReturnType<typeof useLoginForm>

export function useFetchLogin(form: F) {
  const token = useToken()
  const user = useUser()
  const fetch = useFetch('login', 'post')

  fetch.send(form.data)

  React.useEffect(() => {
    form.loading &&
      (async () => {
        try {
          const { body } = await fetch
          token.update(body)
          user.update(body)
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
