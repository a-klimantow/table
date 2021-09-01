import { useEffect, useRef } from 'react';
import { UserStore } from '../store/user';
import { useStorage } from './useStorage';


export const useUserStore = () => {
  const {current: user} = useRef(new UserStore());

  useEffect(() => {
    // TODO: Установить токен в заголовки
    // TODO: редирект в зависимости от роли
    if (user.token) {
      localStorage.setItem('accessToken', user.token);
    } else {
      // clearStorage('page');
    }
  }, [user.token]);

  return user;
}