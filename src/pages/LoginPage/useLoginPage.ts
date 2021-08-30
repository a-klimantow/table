import React from 'react';
import { LoginStore } from './store';
import { useAlertMessage, useUrl } from '../../hooks';
import superagent from 'superagent';
import { useUserStore } from '../../hooks/useUserStore';
import { IServerResponse, IUser } from '../../types/common';

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl('login');
  const {error} = useAlertMessage();

  const user = useUserStore();

  React.useEffect(() => {
    if (!store.isLoading) {
      return;
    }

    const POST = superagent
      .post(url)
      .withCredentials()
      // .set('Origin', 'http://localhost')
      // .set('Content-Type', 'application/json')
      // .set('Origin', 'http://localhost:3000')
      // .set('Access-Control-Allow-Origin', '*')
      .send(store.userData);
    POST
      .then((res) => {
        console.log(res);
        // @ts-ignore
        user.setUser(res.Data);
        // TODO: редирект в зависимости от роли
      })
      .catch((err) => {
        // TODO: обработка ошибок
        error('err');
      })
      .finally(store.stopLoading);

    return () => POST.abort();
  }, [store.isLoading]);

  return store;
}