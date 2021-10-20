import { ResponseError } from 'superagent'
import { useHistory } from 'react-router-dom'
//
import { useNotifications } from 'hooks'

export const useFetchErrors = () => {
  const history = useHistory()
  const ntf = useNotifications()

  return ({ response: res }: ResponseError) => {
    // 401
    res?.unauthorized && history.push('/user/refresh/')
    // 500
    res?.serverError && res?.body && ntf.error(res.body.errors.message)
  }
}
