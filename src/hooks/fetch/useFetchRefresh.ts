import { useHistory } from 'react-router-dom'

import { useToken, useUser, useFetch, useFetchAuth } from 'hooks'

export function useFetchRefresh() {
  const fetch = useFetch('login/refresh', 'post')
  const token = useToken()
  const user = useUser()
  const history = useHistory()

  fetch.send({ refresh_token: token.refresh })
  useFetchAuth(fetch)

  return async () => {
    try {
      const { body } = await fetch
      token.update(body)
      history.goBack()
    } catch (error) {
      user.update(null)
      token.update(null)
    }
  }
}
