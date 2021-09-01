import React from 'react';
import { LoginStore } from './store';
import { useAlertMessage, useSuperagent, useUrl } from '../../hooks';
import { useUserStore } from '../../hooks/useUserStore';

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl('login');
  const {error} = useAlertMessage();

  const user = useUserStore();
  const superagent = useSuperagent(url, 'POST');

  React.useEffect(() => {
    if (!store.isLoading) {
      return;
    }

    superagent
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