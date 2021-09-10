import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppStore } from 'hooks'

export function useAuthentication() {
  const history = useHistory()
  const app = useAppStore()

  useEffect(() => {
    console.log(1)
  }, [app, history])
}
