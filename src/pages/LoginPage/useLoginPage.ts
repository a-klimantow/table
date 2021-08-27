import React, { useEffect } from 'react';
import { LoginStore } from './store';
import { useAlertMessage, useUrl } from '../../hooks';
import superagent from 'superagent';

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl('login');
  const {error} = useAlertMessage();
  console.log(url);

  useEffect(() => {
    if (!store.isLoading) {
      return;
    }

    const POST = superagent
      .post(url)
      .send(store.userData);

    POST
      .then((res) => {console.log(res)})
      .catch((err) => {
        // TODO: обработка ошибок
        error('err');
      })
      .finally(store.stopLoading);

    return () => POST.abort();
  }, [store.isLoading]);

  return store;
}