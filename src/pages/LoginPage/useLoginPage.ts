import React from 'react';
import { LoginStore } from './store';
import { useAlertMessage, useUrl } from '../../hooks';
import superagent from 'superagent';

export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());
  const url = useUrl('login');
  const {error} = useAlertMessage();

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