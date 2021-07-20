import { makeAutoObservable } from 'mobx';

enum Error {
  INVALID_EMAIL = 'Некорректный email',
  INVALID_PASSWORD = 'Введен неверный пароль. Повторите попытку',
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
    // TODO: Отправка данных и обработка ошибок
    // TODO: Спиннер?
    const request = new Promise((resolve, reject) => {
      setTimeout(() => resolve(MockServerResponse.OK), 2000);
    });
    // TODO: Типизация ответа сервера
    request
      .then((res: any) => {
        switch (res.StatusCode) {
          case ServerResponseCode.OK:
            const user = res.Data;
            console.log('Данные пользователя', user);
            break;
          case ServerResponseCode.BAD_REQUEST:
            this.setPasswordError(res.Errors.ErrorDescription);
            break;
          case ServerResponseCode.NOT_FOUND:
            this.setLoginError(res.Errors.ErrorDescription);
            break;
          case ServerResponseCode.SERVER_ERROR:
            // TODO: Общая ошибка на уровне приложения
           alert(res.Errors.ErrorDescription);
            break;
          default:
            alert('Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru');
        }
      });
  }
}

const MockServerResponse = {
  OK: {
    "IsSuccessStatusCode": true,
    StatusCode: 200,
    Data: {
      "email": "content_bigpol@onlineinterviewer.ru",
      "id": 765489242,
      "name": "BigPoll Support",
      "roles": [
        "ProjectManagement",
        "WebsiteManagement",
        "TemplateManagement"
      ],
      "token": "some.token.XXX"
    }
  },
  BAD_REQUEST: {
    "Data": null,
    "Errors": {
      "ErrorCode": "incorrectRequest",
      "ErrorDescription": "Неправильный пароль"
    },
    "IsSuccessStatusCode": false,
    "StatusCode": 400,
    "XCorrelationId": null
  },
  NOT_FOUND: {
    "Data": null,
    "Errors": {
      "ErrorCode": "notFound",
      "ErrorDescription": "Пользователь с логином 'content_bigpo1l@onlineinterviewer.ru' не найден"
    },
    "IsSuccessStatusCode": false,
    "StatusCode": 404,
    "XCorrelationId": null
  },
  SERVER_ERROR: {
    "IsSuccessStatusCode": false,
    "StatusCode": 500,
    "XCorrelationId": null,
    "Errors": {
      "ErrorCode": "internalError",
      "ErrorDescription": "Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru"
    }
  },
}
