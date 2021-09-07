import { useSuperagent, useUrl } from '../../hooks';
import { AppRoute, ServerUrl } from '../../consts/route';
import React from 'react';
import { getAuthToken, setAuthToken } from '../../utils/common';
import { IServerResponse } from '../../types/common';
import { useGlobalStore } from '../../hooks/useGlobalStore';
import { useHistory } from 'react-router-dom';

export const useRefreshPage = () => {
  const url = useUrl(ServerUrl.REFRESH);
  const superagent = useSuperagent(url, 'POST');
  const { replace } = useHistory()
  const globalStore = useGlobalStore();

  React.useEffect(() => {
    // TODO: Реализация черновая, т.к. нет даже контракта от бэка
    const accessToken = getAuthToken('accessToken');
    const refreshToken = getAuthToken('refreshToken');
    superagent
      .send({accessToken, refreshToken})
      //@ts-ignore
      .then((res: IServerResponse) => {
        setAuthToken('accessToken', res.data?.token)
        setAuthToken('refreshToken', 'set refresh token');
        replace(globalStore.returnUrl);
      })
      .catch(() => {
        setAuthToken('accessToken');
        setAuthToken('refreshToken');
        replace(AppRoute.LOGIN);
      })
      .finally(() => globalStore.setReturnUrl(''));
  }, []);
}