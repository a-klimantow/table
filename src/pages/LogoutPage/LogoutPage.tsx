import { useUser } from 'hooks'
import { FC, useEffect } from 'react'

export const LogoutPage: FC = () => {
  const user = useUser()
  useEffect(() => user.setUser(null), [user])

  return <div>logout</div>
}
