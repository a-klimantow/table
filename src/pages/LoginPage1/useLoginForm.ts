import { FormEvent, useState } from 'react'
import { makeAutoObservable } from 'mobx'

import { Errors } from 'types'
import { FieldProps } from 'components'
import { FormProps } from './atoms'
import { useLoginRequest } from './useLoginRequest'

class LoginForm implements FormProps {
  email: FieldProps = {
    value: 'liliya.faizullina@socinform.ru',
    label: 'E-mail',
  }

  password: FieldProps = {
    value: '111111',
    type: 'password',
    label: 'Пароль',
  }

  data: { email: string; password: string } | null = null

  constructor() {
    makeAutoObservable(this)

    this.email.onChange = (e) => this.changeValue('email', e.target.value)
    this.email.onBlur = () => this.blurEmail()

    this.password.onChange = (e) => this.changeValue('password', e.target.value)
    this.password.onPassToggle = () => this.toggleHidden()
    this.password.onBlur = () => this.blurPass()
  }

  submit(e: FormEvent) {
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
      case '404':
        this.email.error = true
        this.email.helperText = notes
        break
      default:
        this.password.error = true
        this.password.helperText = notes
        this.password.type = 'text'
        break
    }
    this.data = null
  }

  get loading() {
    return Boolean(this.data)
  }

  get disabled() {
    const validArr = [
      this.emailValid,
      this.passwordValid,
      !this.loading,
      !this.email.error,
      !this.password.error,
    ]
    return validArr.some((v) => !v)
  }

  private blurEmail() {
    if (!this.emailValid) {
      this.email.error = true
      this.email.helperText = 'Введите корректный e-mail'
    } else {
    }
  }

  private blurPass() {
    if (!this.passwordValid) {
      this.password.error = true
      this.password.helperText = 'Пароль должен быть больше 5 символов'
    }
  }

  private get isHiddenPass() {
    return this.password.type === 'password'
  }

  private toggleHidden() {
    this.password.type = this.isHiddenPass ? 'text' : 'password'
  }

  private changeValue(type: 'email' | 'password', value = '') {
    this[type].value = value
    this[type].error = false
    this[type].helperText = null
  }

  private get emailValid() {
    const value = String(this.email.value)
    const isEmail = /.*@.{1,20}\.\w{2,5}/.test(value)
    return Boolean(value.trim()) && isEmail
  }

  private get passwordValid() {
    const value = String(this.password.value)
    return Boolean(value.trim()) && value.length > 5
  }
}

export function useLoginForm() {
  const [store] = useState(() => new LoginForm())
  useLoginRequest(store)

  return store
}

export type Store = ReturnType<typeof useLoginForm>
