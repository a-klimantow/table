import sup, { ResponseError } from 'superagent'
//
import { useToken, useUser } from 'hooks'
import { currentUrl } from 'utils'

type D = { email: string; password: string }

export function useLoginPost() {
  const token = useToken()
  const user = useUser()

  return {
    async login(data?: D) {
      const request = sup.post(currentUrl('login')).send(data)

      try {
        const { body } = await request
        token.update(body)
        user.update(body)
      } catch (error) {
        const { response: res } = error as ResponseError
        if (res?.body) return Promise.reject(res.body)
      }
    },

    async refresh() {
      const request = sup
        .post(currentUrl('login/refresh'))
        .send({ refresh_token: token.refresh })

      try {
        const { body } = await request
        token.update(body)
      } catch (error) {
        token.update(null)
        user.update(null)
      }
    },
  }
}
