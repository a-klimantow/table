import superagent from 'superagent'
import { useHistory } from 'react-router-dom'

type MethodType = 'GET' | 'POST'

export const useSuperagent = (url: string, method?: MethodType) => {
  const { replace } = useHistory()

  return superagent(method ?? 'GET', url)
    .set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
}
