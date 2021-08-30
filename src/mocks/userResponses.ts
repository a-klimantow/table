import { IServerResponse } from '../types/common';

interface IMockResponse {
  OK: IServerResponse,
  BAD_REQUEST: IServerResponse,
  NOT_FOUND: IServerResponse,
  SERVER_ERROR: IServerResponse,
}

export const MockServerResponse: IMockResponse = {
  OK: {
    StatusCode: 200,
    Data: {
      'email': 'content_bigpol@onlineinterviewer.ru',
      'id': 765489242,
      'name': 'BigPoll Support',
      'roles': [
        'ProjectManagement',
        'WebsiteManagement',
        'TemplateManagement',
      ],
      'token': 'some.token.XXX',
    },
    'IsSuccessStatusCode': false,
  },
  BAD_REQUEST: {
    'Data': null,
    'Errors': {
      'ErrorDescription': 'Неправильный пароль',
    },
    'IsSuccessStatusCode': false,
    'StatusCode': 400,
  },
  NOT_FOUND: {
    'Data': null,
    'Errors': {
      'ErrorDescription': 'Пользователь с логином \'content_bigpo1l@onlineinterviewer.ru\' не найден',
    },
    'IsSuccessStatusCode': false,
    'StatusCode': 404,
  },
  SERVER_ERROR: {
    'Data': null,
    'IsSuccessStatusCode': false,
    'StatusCode': 500,
    'Errors': {
      'ErrorDescription': 'Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru',
    },
  },
};