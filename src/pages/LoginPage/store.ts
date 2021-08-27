import React from 'react';
import { makeAutoObservable } from 'mobx';
import { IServerResponse, IUser } from '../../types/common';

interface IData {
  login: string,
  password: string,
}

interface IUserServerResponse extends IServerResponse {
  Data: IUser | null,
}

enum Error {
  NO_VALUE = 'Заполните поле',
  INVALID_EMAIL = 'Некорректный email',
  INVALID_PASSWORD = 'Введен неверный пароль. Повторите попытку',
  UNKNOWN_ERROR = 'Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru',
}

enum ServerResponseCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const initialData: IData = {
  login: '',
  password: '',
}

const initialError: IData = {
  login: '',
  password: '',
}

export class LoginStore {
  private _data: IData = initialData;
  private _error: IData = initialError;
  private _isShowPassword = false;
  private _isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get userData() {
    return {
      email: this.login,
      password: this.password,
    };
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

  get isLoading() {
    return this._isLoading;
  }

  clearError() {
    this._error = initialError;
  }

  validate() {
    let isValid = true;
    if (this.login.length === 0) {
      this.setLoginError(Error.NO_VALUE);
      isValid = false;
    }
    if (this.password.length === 0) {
      this.setPasswordError(Error.NO_VALUE);
      isValid = false;
    }

    return isValid;
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

  startLoading = () => {
    this._isLoading = true;
  }

  stopLoading = () => {
    this._isLoading = false;
  }

  submitForm = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.startLoading();

    // TODO: Спиннер?
    // TODO: Перенести обработку ошибок в catch, когда будет развёнут тестовый контур
    // const request = new Promise((resolve) => {
    //   setTimeout(() => resolve(MockServerResponse.SERVER_ERROR), 2000);
    // });
    // // TODO: Типизация ответа сервера
    // request
    //   // @ts-ignore  // временное решение. Как будет обёртка на запросы, в ней уже сделать типизацию
    //   .then((res: IUserServerResponse) => {
    //     switch (res.StatusCode) {
    //       case ServerResponseCode.OK:
    //         const user = res.Data;
    //         console.log('Данные пользователя', user);
    //         break;
    //       case ServerResponseCode.BAD_REQUEST:
    //         this.setPasswordError(res.Errors?.ErrorDescription ?? Error.INVALID_PASSWORD);
    //         break;
    //       case ServerResponseCode.NOT_FOUND:
    //         this.setLoginError(res.Errors?.ErrorDescription ?? Error.INVALID_EMAIL);
    //         break;
    //       case ServerResponseCode.SERVER_ERROR:
    //         // TODO: Общая ошибка на уровне приложения
    //        alert(res.Errors?.ErrorDescription ?? Error.UNKNOWN_ERROR);
    //         break;
    //       default:
    //         alert(Error.UNKNOWN_ERROR);
    //     }
    //   });
  }
}

