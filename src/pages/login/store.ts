import { useLocalObservable } from 'mobx-react-lite'

import { useField } from 'hooks'

export type StoreType = ReturnType<typeof useStore>

const validEmail = new RegExp(/^.+@.+\..{2,}$/)
const validPass = new RegExp(/.{6}/)

type D = { email: string; password: string } | undefined

export const useStore = () => {
  const email = useField('', 'text', validEmail)
  const password = useField('', 'password', validPass)

  const form = useLocalObservable(() => ({
    data: undefined as D,

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
      this.data = undefined
    },
  }))

  return { email, password, form }
}
