import { useRouteMatch } from 'react-router-dom'

import { modules } from 'modules'

const allModules = Object.entries(modules).map(([mod]) => `/${mod}/`)

export const useIsModule = () => Boolean(useRouteMatch(allModules))
