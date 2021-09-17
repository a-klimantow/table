import { useRouteMatch } from 'react-router-dom'

import { modules } from 'app/settings'

export function useIsModule() {
  return Boolean(useRouteMatch(modules.map((m) => `/${m}/`)))
}
