import * as React from 'react'
import { useAppContext } from 'hooks'

export const Logout: React.FC = () => {
  const app = useAppContext()
  React.useEffect(() => {
    app.user.update(null)
    app.token.update(null)
  }, [app])
  return null
}
