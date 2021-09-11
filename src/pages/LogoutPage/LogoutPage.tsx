import { useAppStore } from 'hooks'
import { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const LogoutPage: FC = () => {
  const { user } = useAppStore()
  const history = useHistory()
  useEffect(() => {
    user.logout()
    history.replace('/login/')
  })
  return <div>logout</div>
}
