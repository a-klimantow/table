import sup, { ResponseError } from 'superagent'
//
import { useToken, useUser } from 'hooks'
import { currentUrl } from 'utils'

type D = { email: string; password: string }

export function useLoginPost(type?: 'refresh') {
  const token = useToken()
  const user = useUser()

  const url = currentUrl(`login/${type ?? ''}`)
  const post = sup.post(url)

  if (type) {
    post
      .auth(token.access, { type: 'bearer' })
      .send({ refresh_token: token.refresh })
  }

  return async (data?: D) => {
    try {
      const { body } = await post.send(data)

      token.update(body.data)
      user.update(body.data)
    } catch (error) {
      const { response } = error as ResponseError

      if (response?.body) return Promise.reject(response.body)
    }
  }
}
