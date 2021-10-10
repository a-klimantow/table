import { useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
//
import { ModuleType as M } from 'types'
import { useAppStore } from 'hooks'
import { name } from 'assets'

export { useMenu } from 'hooks'
export { useHistory } from 'react-router-dom'

const items = ['panels', 'projects', 'rewards', 'administration'] as M[]

export const useItems = () => {
  const app = useAppStore()
  return useMemo(
    () =>
      items.map((i) => ({
        name: name(i),
        disabled: !app.modules.includes(i),
        link: `/${i}/`,
      })),
    [app.modules]
  )
}

export const useModuleName = () => {
  const match = useRouteMatch<{ module: M }>('/:module/')
  if (match) return name(match.params.module)
  return ''
}
