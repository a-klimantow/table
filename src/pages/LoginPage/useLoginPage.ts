import React from 'react';
import { LoginStore } from './store';


export const useLoginPage = () => {
  const [store] = React.useState(() => new LoginStore());

  return store;
}