import React from 'react';
import { LoginStore } from './store';
import { useSuperagent, useUrl } from '../../hooks';
import { useUserStore } from '../../hooks/useUserStore';
import { setAuthToken } from '../../utils/common';
import { ServerUrl } from '../../consts/route';

enum Error {
  INVALID_EMAIL = 'Некорректный email',
  INVALID_PASSWORD = 'Введен неверный пароль. Повторите попытку',
  UNKNOWN_ERROR = 'Кажется, что-то пошло не так... Мы будем благодарны, если вы напишете нам об этом на адрес support@expertnoemnenie.ru',
}

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl(ServerUrl.LOGIN);


  const user = useUserStore();
  const superagent = useSuperagent(url, 'POST');

  React.useEffect(() => {
    if (!store.isLoading) {
      return;
    }

    superagent
      .send(store.userData)
      .then(({body}) => {
        user.setUser(body.data);
        setAuthToken('accessToken', user.token);
        setAuthToken('refreshToken', 'set refresh token');
      })
      .catch((err) => {
        const res = err.response;
        switch (res.status) {
          case 400:
            store.setPasswordError(res.body.Errors?.ErrorDescription ?? Error.INVALID_PASSWORD);
            break;
          case 404:
            store.setLoginError(res.body.Errors?.ErrorDescription ?? Error.INVALID_EMAIL);
            break;
          default:
            alert(Error.UNKNOWN_ERROR);
        }
      })
      .finally(store.stopLoading);
  }, [store.isLoading]);

  return store;
}