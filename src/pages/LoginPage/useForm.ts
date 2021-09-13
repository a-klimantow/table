import { useEffect, useRef } from 'react'
import { makeAutoObservable, autorun } from 'mobx'

import { useRequest, Request } from 'hooks/useRequest'
import { FieldProps } from 'components'
import { SubmitButtonProps } from './atoms'

class LoginFrom {
  req = new Request('/login/')

  email = {
    value: 'liliya.faizullina@socinform.ru',
    label: 'E-mail',
  } as FieldProps

  password = {
    value: '111111',
    type: 'password',
    label: 'Пароль',
  } as FieldProps

  button = {} as SubmitButtonProps

  data = null as { email: string; password: string } | null

  constructor() {
    makeAutoObservable(this)

    this.email.onChange = this.changeValue('email')
    this.email.onBlur = this.blurEmail

    this.password.onChange = this.changeValue('password')
    this.password.onPassToggle = this.togglePass
    this.password.onBlur = this.blurPass

    this.button.onClick = this.submit

    autorun(() => {
      this.button.disabled = this.disabled
    })

    autorun(() => {
      this.button.loading = Boolean(this.data)
    })
  }

  submit: SubmitButtonProps['onSubmit'] = (e) => {
    e.preventDefault()
    this.req.data = {
      email: String(this.email.value).trim(),
      password: String(this.password.value).trim(),
    }

    // this.req.setData(this.data)
    this.req.login.then()
  }

  success() {
    console.log('form success')
    this.data = null
  }

  private get disabled() {
    const validArr = [
      this.isEmailValid,
      this.isPasswordValid,
      !this.data,
      !this.email.error,
      !this.password.error,
    ]
    return validArr.some((v) => !v)
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

  // useRequest('login', 'post', {
  //   data: form.data,
  //   success: () => form.success(),
  //   fail: ({ errors }) => console.log(errors.code, 'errro'),
  // })

  useEffect(() => () => form.req.abort(), [form])

  return form
}
