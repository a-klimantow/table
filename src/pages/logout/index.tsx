import * as React from 'react'
import { useAppStore } from 'hooks'

export const Logout: React.FC = () => {
  const app = useAppStore()
  React.useEffect(() => app.clear(), [app])
  return null
}
