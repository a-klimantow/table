import { useAppStore } from 'hooks'
import { FC, useEffect } from 'react'

export const LogoutPage: FC = () => {
  const { user } = useAppStore()
  useEffect(() => user.clearUser(), [user])

  return <div>logout</div>
}
