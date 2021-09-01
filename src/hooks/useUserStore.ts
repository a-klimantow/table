import { useEffect, useRef } from 'react';
import { UserStore } from '../store/user';
import { useStorage } from './useStorage';


export const useUserStore = () => {
  const {current: user} = useRef(new UserStore());
  const {set, clearStorage} = useStorage('local');

  useEffect(() => {
    // TODO: Установить токен в заголовки
    // TODO: редирект в зависимости от роли
    if (user) {
      set('token', user.token);
    } else {
      clearStorage('page');
    }
  }, [user, user.token]);

  return user;
}