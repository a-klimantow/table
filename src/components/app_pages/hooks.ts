import { useRouteMatch, useLocation } from 'react-router-dom'
//
import { ModuleType as M, PageType as P } from 'types'
import { useAppStore } from 'hooks'
import { permissions } from 'assets'

type Routes = Array<[M, P[]]>

const routes = [
  ['administration', []],
  ['panels', []],
  ['projects', []],
  ['rewards', ['requests', 'reports', 'accruals']],
] as Routes

export const useRoutes = () => {
  const app = useAppStore()
  return routes
    .reduce((arr, [module, pages]) => {
      const prommitedPages = app.pages.filter((p) => pages.includes(p))
      arr.push([module, prommitedPages])
      return arr
    }, [] as Routes)
    .filter(([, pages]) => Boolean(pages.length))
}

export const useDefaultPath = () => {
  const app = useAppStore()
  const [first] = app.user.roles
  if (!first) return '/login/'
  const module = permissions.modules[first]
  return `/${module}/`
}

export const useShowLogin = () => Boolean(useRouteMatch('/login/'))
export const useShowLogout = () => useLocation().hash.endsWith('logout')
export const useShowSettings = () => Boolean(useRouteMatch('/settigns/'))
