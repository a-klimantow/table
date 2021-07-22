import { makeAutoObservable } from 'mobx';
import { IServerResponse, IUser } from '../../types/common';
import { MockServerResponse } from '../../mocks/userResponses';

interface IUserServerResponse extends IServerResponse {
  Data: IUser | null,
}

enum Error {
  INVALID_EMAIL = 'Некорректный email',
  INVALID_PASSWORD = 'Введен неверный пароль. Повторите попытку',
  UNKNOWN_ERROR = 'Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru',
}

const validateEmail = (email: string): boolean => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
}

const validatePassword = (password: string): boolean => {
  return password.length > 5;
}

enum ServerResponseCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
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
    this.login = value.trim();
    this.loginError = '';
  }

  changePassword = (value: string): void => {
    this.password = value.trim();
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
    if (!validateEmail(this.login)) {
      this.setLoginError(Error.INVALID_EMAIL);
      return;
    }
    if (!validatePassword(this.password)) {
      this.setPasswordError(Error.INVALID_PASSWORD);
      return;
    }
    // TODO: Убрать моковые данные
    // TODO: Спиннер?
    // TODO: Перенести обработку ошибок в catch, когда будет развёнут тестовый контур
    const request = new Promise((resolve) => {
      setTimeout(() => resolve(MockServerResponse.OK), 2000);
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

