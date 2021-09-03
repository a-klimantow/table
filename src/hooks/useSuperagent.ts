import superagent from 'superagent'
import { useHistory } from 'react-router-dom'
import { useAlertMessage } from './useAlertMessage';
import { IServerResponse } from '../types/common';
import { getAuthToken } from '../utils/common';

type MethodType = 'GET' | 'POST'

export const useSuperagent = (url: string, method?: MethodType) => {
  const { replace } = useHistory()
  const {error} = useAlertMessage();

  const errorInterceptor = (req: any) => {
    req.on('response', (res: IServerResponse) => {
      switch (res.status) {
        case 401:
          replace('/refresh');
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
    res.set('Authorization', `Bearer ${getAuthToken('accessToken')}`);
  }

  return res;
}
