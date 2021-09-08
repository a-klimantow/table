import superagent from 'superagent'
import { useHistory } from 'react-router-dom'
import { useAlertMessage } from './useAlertMessage';
import { IServerResponse } from '../types/common';
import { getAuthToken } from '../utils/common';
import { AppRoute } from '../consts/route';
import { useGlobalStore } from './useGlobalStore';

type MethodType = 'GET' | 'POST'

export const useSuperagent = (url: string, method?: MethodType) => {
  const { location, replace } = useHistory();
  const { error } = useAlertMessage();
  const globalStore = useGlobalStore();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorInterceptor = (req: any) => {
    req.on('response', (res: IServerResponse) => {
      switch (res.status) {
        case 401:
          globalStore.setReturnUrl(location.pathname);
          replace(AppRoute.REFRESH);
          break;
        case 500:
          error(res.statusText)
          break;
      }
    })
  }

  const res = superagent(method ?? 'GET', url)
    .use(errorInterceptor);

  const accessToken = getAuthToken('accessToken');
  if (accessToken) {
    res.set('Authorization', `Bearer ${accessToken}`);
  }

  return res;
}
