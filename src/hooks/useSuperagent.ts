import superagent from 'superagent'
import { useHistory } from 'react-router-dom'
import { useAlertMessage } from './useAlertMessage';
import { IServerResponse } from '../types/common';

type MethodType = 'GET' | 'POST'

export const useSuperagent = (url: string, method?: MethodType) => {
  const { replace } = useHistory()
  const {error} = useAlertMessage();

  const errorInterceptor = (req: any) => {
    req.on('response', (res: IServerResponse) => {
      switch (res.status) {
        case 401:
          replace('/bids');
          break;
        case 500:
          error(res.statusText)
          break;
      }
    })
  }

  return superagent(method ?? 'GET', url)
    .set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
    .use(errorInterceptor)
}
