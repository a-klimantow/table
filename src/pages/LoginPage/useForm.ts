import { useRef } from 'react'
import { makeAutoObservable, reaction } from 'mobx'

import { useRequest, useAppStore } from 'hooks'
import { FieldProps } from 'components'
import { SubmitButtonProps } from './atoms'
import { Errors, UserType } from 'types'

class LoginFrom {
  email = {
    value: '',
    label: 'E-mail',
  } as FieldProps

  password = {
    value: '',
    type: 'password',
    label: 'Пароль',
  } as FieldProps

  button = { disabled: true } as SubmitButtonProps

  data = null as { email: string; password: string } | null

  constructor() {
    makeAutoObservable(this)

    this.email.onChange = this.changeValue('email')
    this.email.onBlur = this.blurEmail

    this.password.onChange = this.changeValue('password')
    this.password.onPassToggle = this.togglePass
    this.password.onBlur = this.blurPass

    this.button.onClick = this.submit

    reaction(
      () => [
        this.isEmailValid,
        this.isPasswordValid,
        !this.data,
        !this.email.error,
        !this.password.error,
      ],
      (arr) => (this.button.disabled = arr.some((valid) => !valid))
    )

    reaction(
      () => this.data,
      (data) => (this.button.loading = Boolean(data))
    )
  }

  submit: SubmitButtonProps['onSubmit'] = (e) => {
    e.preventDefault()
    this.data = {
      email: String(this.email.value).trim(),
      password: String(this.password.value).trim(),
    }
  }

  success() {
    this.data = null
  }

  fail({ code, notes }: Errors) {
    switch (code) {
      case '400':
        this.password.error = true
        this.password.helperText = notes
        this.password.type = 'text'
        break
      case '404':
        this.email.error = true
        this.email.helperText = notes
        break

      default:
        break
    }

    this.data = null
  }

  private get isPasswordValid() {
    const value = String(this.password.value)
    return Boolean(value.trim()) && value.length > 5
  }

  private get isEmailValid() {
    const value = String(this.email.value)
    const isEmail = /.*@.{1,20}\.\w{2,5}/.test(value)
    return Boolean(value.trim()) && isEmail
  }

  private blurEmail = () => {
    if (!this.isEmailValid) {
      this.email.error = true
      this.email.helperText = 'Введите корректный e-mail'
    }
  }

  private blurPass = () => {
    if (!this.isPasswordValid) {
      this.password.error = true
      this.password.helperText = 'Пароль должен быть больше 5 символов'
    }
  }

  private changeValue =
    (field: 'email' | 'password'): FieldProps['onChange'] =>
    (e) => {
      this[field].value = e.target.value
      this[field].error = false
      this[field].helperText = null
    }

  private togglePass = () => {
    this.password.type = this.passType
  }

  private get passType() {
    return this.password.type === 'password' ? 'text' : 'password'
  }
}

export function useLoginForm() {
  const form = useRef(new LoginFrom()).current
  const app = useAppStore()

  useRequest('login', 'post', {
    data: form.data,
    success: (user: UserType) => {
      form.success()
      app.setUser(user)
    },
    fail: ({ errors }) => form.fail(errors),
  })

  return form
}
