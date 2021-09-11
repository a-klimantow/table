import { Route, RouteProps } from 'react-router-dom'

import { LoginPage } from './LoginPage'
import { LogoutPage } from './LogoutPage'
import { RefreshPage } from './RefreshPage'
import { NotFoundPage } from './NotFoundPage'

export type PageLink = '/login/' | '/logout/' | '/refresh/' | '/404/'

interface IPage extends RouteProps {
  path: PageLink
}

const pages: IPage[] = [
  { path: '/login/', component: LoginPage },
  { path: '/logout/', component: LogoutPage },
  { path: '/refresh/', component: RefreshPage },
  { path: '/404/', component: NotFoundPage },
]

export const Pages = () => (
  <>
    {pages.map((page) => (
      <Route key={page.path} {...page} />
    ))}
  </>
)
