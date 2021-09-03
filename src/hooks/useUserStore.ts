import { useEffect, useRef } from 'react';
import { UserStore } from '../store/user';
import { useStorage } from './useStorage';


export const useUserStore = () => {
  const {current: user} = useRef(new UserStore());

  return user;
}