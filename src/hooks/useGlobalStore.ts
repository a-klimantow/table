import { useRef } from 'react';
import { GlobalStore } from '../store/global';

export const useGlobalStore = () => {
  const {current: globalStore} = useRef(new GlobalStore());

  return globalStore;
}