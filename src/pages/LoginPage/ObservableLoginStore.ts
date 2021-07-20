import { makeAutoObservable } from 'mobx';

const Error = {
  USER_NOT_FOUND: 'Пользователь с таким E-mail не зарегистрирован',
  INVALID_PASSWORD: 'Введен неверный пароль. Повторите попытку',
}

export class Store {
  login = '';
  password = '';
  loginError = '';
  passwordError = '';
  isShowPassword = false;
  constructor() {
    makeAutoObservable(this);
  }

  changeLogin = (value: string): void => {
    this.login = value;
    this.loginError = '';
  }

  changePassword = (value: string): void => {
    this.password = value;
    this.passwordError = '';
  }

  setLoginError = (value: string): void => {
    this.loginError = value;
  }

  setPasswordError = (value: string): void => {
    this.passwordError = value;
  }

  switchShowingPassword = (): void => {
    this.isShowPassword = !this.isShowPassword;
  }

  submitForm = (): void => {
    // TODO: Отправка данных и обработка ошибок
    // TODO: Спиннер?
    setTimeout(() => {
      this.setLoginError(Error.USER_NOT_FOUND);
      this.setPasswordError(Error.INVALID_PASSWORD);
    }, 2000)
  }
}