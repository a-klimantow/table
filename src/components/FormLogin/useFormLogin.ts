import { useRef } from 'react'
import { makeAutoObservable } from 'mobx'
import { TextFieldProps } from '@material-ui/core'
import { Errors } from 'types'

class Store {
  private emailValue = 'liliya.faizullina@socinform.ru'
  private emailError = ''

  private passValue = '111111'
  private passError = ''

  private passType = 'password' as 'text' | 'password'

  data = null as { email: string; password: string } | null

  fail(data: Errors) {
    const { errors } = data ?? {}
    switch (errors.code) {
      case '404':
        this.setEmailError(errors.description)
        break
      case '400':
        this.setPassError(errors.description)
        break
      default:
        break
    }
    this.data = null
  }

  private setEmailError(text = '') {
    this.emailError = text
  }

  private setPassError(text = '') {
    this.passError = text
    this.passType = 'text'
  }

  private changeValue(type: 'email' | 'pass', value: string) {
    switch (type) {
      case 'email':
        this.emailValue = value
        this.emailError = ''
        break
      case 'pass':
        this.passValue = value
        this.passError = ''
        break
      default:
        break
    }
  }

  private get isEmailValid() {
    return /.*@.{1,20}\.\w{2,5}/.test(this.emailValue.trim())
  }

  private get isPassValid() {
    return /.{6}/.test(this.passValue.trim())
  }

  private blurEmail = () => {
    if (!this.isEmailValid) {
      this.emailError = 'Введите корректный e-mail'
    }
  }

  private blurPass = () => {
    if (!this.isPassValid) {
      this.passError = 'Пароль должен быть не менее 6 символов'
    }
  }

  submit() {
    this.data = {
      email: this.emailValue.trim(),
      password: this.passValue.trim(),
    }
  }

  togglePassType() {
    this.passType === 'password'
      ? (this.passType = 'text')
      : (this.passType = 'password')
  }

  get hiddenPass() {
    return (this.passType = 'password')
  }

  get loading() {
    return Boolean(this.data)
  }

  get disabled() {
    return [
      this.emailValue,
      this.passValue,
      this.isEmailValid,
      this.isPassValid,
      !this.emailError,
      !this.passError,
      !this.data,
    ].some((valid) => !valid)
  }

  get email(): TextFieldProps {
    return {
      value: this.emailValue,
      error: Boolean(this.emailError),
      helperText: this.emailError,
      onChange: (e) => this.changeValue('email', e.target.value),
      onBlur: () => this.blurEmail(),
    }
  }

  get pass(): TextFieldProps {
    return {
      value: this.passValue,
      error: Boolean(this.passError),
      helperText: this.passError,
      type: this.passType,
      onChange: (e) => this.changeValue('pass', e.target.value),
      onBlur: () => this.blurPass(),
    }
  }

  constructor() {
    makeAutoObservable(this, { fail: false }, { proxy: false })
  }
}

export type FromType = Store

export const useFromLogin = () => useRef(new Store()).current
