import * as React from 'react'
import { computed } from 'mobx'
//
import { IUser, LoginResposeError } from 'types'
import { useAppContext, useField, useSuperagent } from 'hooks'

type D = { email: string; password: string }
type F = ReturnType<typeof useField>

const validEmail = new RegExp(/^.+@.+\..+$/)
const validPass = new RegExp(/.{6}/)

export const useLogin = () => {
  const [data, setData] = React.useState<null | D>(null)
  const email = useField('liliya.faizullina@socinform.ru', 'text', validEmail)
  const password = useField('111111', 'password', validPass)

  const submit = () => {
    setData({
      email: email.currentValue,
      password: password.currentValue,
    })
  }

  const fetchStop = () => setData(null)

  useFetch(data, fetchStop, email, password)

  return {
    email,
    password,
    submit,
    disabled: computed(() =>
      [
        email.currentValue,
        email.isValid,
        !email.error,
        password.currentValue,
        password.isValid,
        !password.error,
        !data,
      ].some((v) => !v)
    ),

    data,
    fetchStop,
  }
}

const useFetch = (data: D | null, fetchStop: () => void, email: F, pass: F) => {
  const app = useAppContext()

  const { login } = useSuperagent()

  React.useEffect(() => {
    data &&
      (async () => {
        login.send(data)
        try {
          const { body } = await login.then()
          fetchStop()
          const { token, refresh_token, ...user } = body.data as IUser
          app.token.update({ token, refresh_token })
          app.user.update(user)
        } catch (error) {
          fetchStop()
          const { response } = error as LoginResposeError
          if (response?.body) {
            const { errors } = response.body as LoginResposeError['body']
            if (errors.code === '404') email.setError(errors.description)
            if (errors.code === '400') pass.setError(errors.description)
          }
        }
      })()

    return () => login.abort()
  })
}
