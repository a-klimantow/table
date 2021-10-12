import { useRouteMatch, useLocation } from 'react-router-dom'
//
import { ModuleType as M, PageType as P } from 'types'
import {} from 'hooks'
import { permissions } from 'assets'

type Routes = Array<[M, P[]]>

const routes = [
  ['administration', ['plug']],
  ['panels', ['plug']],
  ['projects', ['plug']],
  ['rewards', ['requests', 'reports', 'accruals']],
] as Routes

export const useRoutes = () => {
  return [[]]
  // return routes
  //   .reduce((arr, [module, pages]) => {
  //     const prommitedPages = app.pages.filter((p) => pages.includes(p))
  //     arr.push([module, prommitedPages])
  //     return arr
  //   }, [] as Routes)
  //   .filter(([, pages]) => Boolean(pages.length))
}

export const useDefaultPath = () => {
  return `/`
}

export const useShowLogin = () => Boolean(useRouteMatch('/login/'))
export const useShowLogout = () => useLocation().hash.endsWith('logout')
export const useShowSettings = () => Boolean(useRouteMatch('/settigns/'))
