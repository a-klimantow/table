import superagent from 'superagent'
import { useHistory } from 'react-router-dom'
import React from 'react'

type MethodType = 'GET' | 'POST'

const baseUrl = 'http://10.10.4.72:30101/v1/admin/'

export const useSuperagent = (url = '', method?: MethodType) => {
  const { replace } = useHistory()

  return React.useMemo(() => superagent(method ?? 'GET', baseUrl + url), [url, method]).on(
    'error',
    (err) => {
      err.status === 404 && replace('/refresh')
    }
  )
}
