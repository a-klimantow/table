import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { useLoginPost } from 'hooks'

export const useFetch = () => {
  const { refresh } = useLoginPost()
  const history = useHistory()
    
  React.useEffect(() => {
    refresh().then(() => history.goBack())
  }, [refresh, history])
}
