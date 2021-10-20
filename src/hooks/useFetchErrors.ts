import { useCallback } from 'react'
import { ResponseError } from 'superagent'
import { useHistory } from 'react-router-dom'

export const useFetchErrors = () => {
  const history = useHistory()

  return useCallback(
    ({ response }: ResponseError) => {
      response?.unauthorized && history.push('/user/refresh/')
    },
    [history]
  )
}
