import React from 'react';
import { LoginStore } from './store';
import { useAlertMessage, useUrl } from '../../hooks';
import superagent from 'superagent';
import { useUserStore } from '../../hooks/useUserStore';

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl('login');
  const {error} = useAlertMessage();

  const user = useUserStore();

  React.useEffect(() => {
    if (!store.isLoading) {
      return;
    }

    superagent
      .post(url)
      .withCredentials()
      .send(store.userData)
      .then(({body}) => {
        // @ts-ignore
        user.setUser(body.data);
      })
      .catch((err) => {
        // TODO: обработка ошибок
        error('err');
      })
      .finally(store.stopLoading);
  }, [store.isLoading]);

  return store;
}