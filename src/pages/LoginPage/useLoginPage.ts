import React from 'react';
import { LoginStore } from './store';
import { useSuperagent, useUrl } from '../../hooks';
import { useUserStore } from '../../hooks/useUserStore';
import { setAuthToken } from '../../utils/common';
import { ServerUrl } from '../../consts/route';

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
        // @ts-ignore
        user.setUser(body.data);
        setAuthToken('accessToken', user.token);
        setAuthToken('refreshToken', 'set refresh token');
      })
      .catch((err) => {
        // TODO: обработка ошибок
        alert('catch')
      })
      .finally(store.stopLoading);
  }, [store.isLoading]);

  return store;
}