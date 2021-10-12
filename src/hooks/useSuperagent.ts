import sup, { ResponseError } from 'superagent'
//
import { useUrl, useToken } from 'hooks'
import { useHistory } from 'react-router'

export const useSuperagent = () => {
  const token = useToken()
  const handler = useErrors()
  return {
    login: sup.post(useUrl('login')),

    refresh: sup
      .post(useUrl('login/refresh'))
      .auth(token.access, { type: 'bearer' })
      .send({ refresh_token: token.refresh }),

    requests: sup
      .get(useUrl('withdrawal'))
      .auth(token.access, { type: 'bearer' })
      .on('error', handler),
  }
}

const useErrors = () => {
  const history = useHistory()

  return (err: ResponseError) => {
    if (err.response?.unauthorized) {
      history.replace('#refresh', { from: history.location })
    }
  }
}
