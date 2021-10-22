import * as React from 'react'
import { useLocalObservable } from 'mobx-react-lite'

import { useField, useFetchLogin } from 'hooks'

export type StoreType = ReturnType<typeof useLoginStore>

const validEmail = new RegExp(/^.+@.+\..{2,}$/)
const validPass = new RegExp(/.{6}/)

export const useLoginStore = () => {
  const email = useField('', 'text', validEmail)
  const password = useField('', 'password', validPass)
  const fetchLogin = useFetchLogin()

  const store = useLocalObservable(() => ({
    email,
    password,
    data: null as null | { email: string; password: string },

    submit(): void {
      this.data = {
        email: email.currentValue,
        password: password.currentValue,
      }
    },

    get disabled(): boolean {
      return [
        email.currentValue,
        email.isValid,
        !email.error,
        password.currentValue,
        password.isValid,
        !password.error,
        !this.data,
      ].some((v) => !v)
    },

    fail() {
      this.data = null
    },
  }))

  React.useEffect(() => {
    if (store.data) {
      const request = fetchLogin(store.data)
      ;(async () => {
        const errors = await request
        if (errors) {
          const { email, password } = store
          const { code, description } = errors

          code === '404' && email.setError(description)
          code === '400' && password.setError(description)
          store.fail()
        }
      })()
    }
  }, [store, store.data, fetchLogin])

  return store
}
