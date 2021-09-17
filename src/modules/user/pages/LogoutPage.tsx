import { FC, useEffect } from 'react'

import { useAppStore } from 'hooks'
import { useHistory } from 'react-router'

export const LogoutPage: FC = () => {
  const history = useHistory()
  const { user } = useAppStore()
  useEffect(() => {
    user.clearUser()
    history.replace('/login/')
  }, [user, history])
  return <div>logout</div>
}
