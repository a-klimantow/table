import { useRouteMatch } from 'react-router-dom'

export function useIsModule() {
  return Boolean(useRouteMatch(['/rewards/', '/panels/']))
}
