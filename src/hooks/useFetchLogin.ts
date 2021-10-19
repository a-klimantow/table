import sup, { ResponseError } from 'superagent'

import { useToken, useUser } from 'hooks'
import { currentUrl } from 'utils'

type U = 'refresh' | ''

type D = { email: string; password: string } | { refresh_roken: string }

export function useFetchLogin(url: U = '', data?: D) {
  const token = useToken()
  const user = useUser()

  const request = sup.post(currentUrl(`login/${url}`))

  if (url === 'refresh') {
    request.auth(token.access, { type: 'bearer' })
  }

  return async () => {
    try {
      const { body } = await request.send(data)
      token.update(body.data)
      user.update(body.data)
    } catch (error) {
      const { response } = error as ResponseError
      if (response?.body) return Promise.reject(response.body)
    }
  }
}
