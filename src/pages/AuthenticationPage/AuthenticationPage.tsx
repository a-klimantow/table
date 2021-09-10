import { FC } from 'react'

import { useAuthentication } from './useAuthentication'

export const AuthenticationPage: FC = () => {
  useAuthentication()
  return <div>authentication</div>
}
