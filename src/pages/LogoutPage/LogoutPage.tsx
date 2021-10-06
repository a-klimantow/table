import { useUser } from 'hooks'
import { FC, useEffect } from 'react'

export const LogoutPage: FC = () => {
  const user = useUser()

  return <div>logout</div>
}
