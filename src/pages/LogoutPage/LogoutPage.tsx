import { useAppStore } from 'hooks'
import { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const LogoutPage: FC = () => {
  const app = useAppStore()
  const history = useHistory()
  useEffect(() => {
    app.clearUser()
    history.replace('/login/')
  })
  return <div>logout</div>
}
