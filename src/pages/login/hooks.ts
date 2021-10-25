import * as React from 'react'
import { useLocalObservable } from 'mobx-react-lite'

import { validation } from 'utils'

const data = { email: '', password: '' }
type D = typeof data

const text = [
  'Введите корректный email',
  'Пароль должен быть не менее 6 символов',
]

export const useLoginForm = () =>
  useLocalObservable(() => ({
    data,

    errors: { email: '', password: '' } as D,

    type: 'password',

    toggleType() {
      this.type = this.type === 'password' ? 'text' : 'password'
    },

    loading: false,

    setValue(key: keyof D, value: string) {
      this.data[key] = value
      this.errors[key] = ''
    },

    setError(key: keyof D, err: string) {
      this.errors[key] = err
      this.loading = false
    },

    onBlur(key: keyof D) {
      if (key === 'email') !this.emailValid && (this.errors[key] = text[0])
      if (key === 'password') !this.passValid && (this.errors[key] = text[1])
    },

    get emailValid() {
      return validation('email', this.data.email)
    },

    get passValid() {
      return validation('password', this.data.password)
    },

    get disabled(): boolean {
      return ([] as unknown[])
        .concat(Object.values(this.errors).map((e) => !e))
        .concat([this.emailValid, this.passValid])
        .concat(!this.loading)
        .some((v) => !v)
    },

    submit(e: React.FormEvent) {
      e.preventDefault()
      this.loading = true
    },
  }))
