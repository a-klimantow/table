import React from 'react';
import { makeAutoObservable } from 'mobx';
import { IServerResponse, IUser } from '../../types/common';
import { MockServerResponse } from '../../mocks/userResponses';

interface IUserServerResponse extends IServerResponse {
  Data: IUser | null,
}

enum Error {
  NO_VALUE = 'Заполните поле',
  INVALID_EMAIL = 'Некорректный email',
  INVALID_PASSWORD = 'Введен неверный пароль. Повторите попытку',
  UNKNOWN_ERROR = 'Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru',
}

const validateEmail = (email: string): boolean => {
  return email.length > 0;
}

const validatePassword = (password: string): boolean => {
  return password.length > 0;
}

enum ServerResponseCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const initialData = {
  login: '',
  password: '',
}

const initialError = {
  login: '',
  password: '',
}

export class LoginStore {
  private _data = initialData;
  private _error = initialError;
  private _isShowPassword = false;

  constructor() {
    makeAutoObservable(this);
  }

  get login() {
    return this._data.login;
  }

  get password() {
    return this._data.password;
  }

  get loginError() {
    return this._error.login;
  }

  get passwordError() {
    return this._error.password;
  }

  get isShowPassword() {
    return this._isShowPassword;
  }

  clearError() {
    this._error = initialError;
  }

  changeLogin = (value: string): void => {
    this._data.login = value.trim();
    this.clearError();
  }

  changePassword = (value: string): void => {
    this._data.password = value.trim();
    this.clearError();
  }

  setLoginError = (value: string): void => {
    this._error.login = value;
  }

  setPasswordError = (value: string): void => {
    this._error.password = value;
  }

  switchShowingPassword = (): void => {
    this._isShowPassword = !this._isShowPassword;
  }

  submitForm = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    let error = false;
    if (!validateEmail(this.login)) {
      this.setLoginError(Error.NO_VALUE);
      error = true;
    }
    if (!validatePassword(this.password)) {
      this.setPasswordError(Error.NO_VALUE);
      error = true
    }

    if (error) {
      return;
    }
    // TODO: Убрать моковые данные
    // TODO: Спиннер?
    // TODO: Перенести обработку ошибок в catch, когда будет развёнут тестовый контур
    const request = new Promise((resolve) => {
      setTimeout(() => resolve(MockServerResponse.SERVER_ERROR), 2000);
    });
    // TODO: Типизация ответа сервера
    request
      // @ts-ignore  // временное решение. Как будет обёртка на запросы, в ней уже сделать типизацию
      .then((res: IUserServerResponse) => {
        switch (res.StatusCode) {
          case ServerResponseCode.OK:
            const user = res.Data;
            console.log('Данные пользователя', user);
            break;
          case ServerResponseCode.BAD_REQUEST:
            this.setPasswordError(res.Errors?.ErrorDescription ?? Error.INVALID_PASSWORD);
            break;
          case ServerResponseCode.NOT_FOUND:
            this.setLoginError(res.Errors?.ErrorDescription ?? Error.INVALID_EMAIL);
            break;
          case ServerResponseCode.SERVER_ERROR:
            // TODO: Общая ошибка на уровне приложения
           alert(res.Errors?.ErrorDescription ?? Error.UNKNOWN_ERROR);
            break;
          default:
            alert(Error.UNKNOWN_ERROR);
        }
      });
  }
}

