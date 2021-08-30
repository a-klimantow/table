import { useEffect, useRef } from 'react';
import { UserStore } from '../store/user';
import { useStorage } from './useStorage';


export const useUserStore = () => {
  const {current: user} = useRef(new UserStore());
  const {store} = useStorage('local');

  useEffect(() => {
    // TODO: Установить токен в заголовки?
    if (user) {
      store.set('token', user.token);
    } else {
      // TODO: нет метода очистки по ключу
      store.set('token', null);
    }
  }, [user, user.token]);

  return user;
}