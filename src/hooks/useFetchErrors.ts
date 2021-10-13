import { useCallback } from 'react'
import { ResponseError } from 'superagent'
import { useHistory } from 'react-router-dom'

export const useFetchErrors = () => {
  const history = useHistory()

  return useCallback(
    (err: ResponseError) => {
      if (err.response?.unauthorized) {
        history.push('/user/refresh/', { from: history.location })
      }
    },
    [history]
  )
}
