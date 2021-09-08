import { FormEvent, useEffect, useState } from 'react'
import { makeAutoObservable, autorun } from 'mobx'
import { ButtonProps } from '@material-ui/core'
import superagent from 'superagent'

import { FieldProps } from 'components'
import { useUrl, useAppContext } from 'hooks'
import { PageLoaderProps } from './atoms'

class LoginStore {
  email: FieldProps = {
    value: 'admin@expertnoemnenie.ru',
    label: 'E-mail',
  }

  password: FieldProps = {
    value: '111111',
    type: 'password',
    label: 'Пароль',
  }

  button: ButtonProps = {
    variant: 'contained',
    disabled: true,
    size: 'large',
    type: 'submit',
  }
  loader: PageLoaderProps = {
    show: false,
  }

  constructor() {
    makeAutoObservable(this)

    this.email.onChange = (e) => this.changeValue('email', e.target.value)
    this.email.onBlur = () => this.blurEmail()

    this.password.onChange = (e) => this.changeValue('password', e.target.value)
    this.password.onPassToggle = () => this.toggleHidden()
    this.password.onBlur = () => this.blurPass()

    autorun(() => {
      const validateArr = [
        this.emailValid,
        this.passwordValid,
        !this.loader.show,
      ]

      this.button.disabled = validateArr.some((v) => !v)
    })
  }

  submit(e: FormEvent) {
    e.preventDefault()
    this.loader.show = true
  }

  get data() {
    if (this.loader.show) {
      return {
        email: String(this.email.value).trim(),
        password: String(this.password.value),
      }
    }
    return null
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

export function useLoginPage() {
  const url = useUrl('login')
  const app = useAppContext()

  const [store] = useState(() => new LoginStore())

  useEffect(() => {
    if (store.data) {
      superagent
        .post(url)
        .type('application/json')
        .send(store.data)
        .then((res) => {
          app.setUser(res.body.data)
        })
        .catch(console.log)
    }
  }, [store, store.data, url, app])

  return store
}
