import { useMemo } from 'react'
import { useRouteMatch } from 'react-router-dom'
//
import { ModuleType as M } from 'types'
import { useRouter } from 'hooks'
import { name } from 'assets'

export { useMenu } from 'hooks'
export { useHistory } from 'react-router-dom'

const items = ['panels', 'projects', 'rewards', 'administration'] as M[]

export const useItems = () => {
  const { prommited } = useRouter()
  return useMemo(
    () =>
      items.map((i) => ({
        name: name(i),
        disabled: !prommited.modules.includes(i),
        link: `/${i}/`,
      })),
    [prommited.modules]
  )
}

export const useModuleName = () => {
  const match = useRouteMatch<{ module: M }>('/:module/')
  if (match) return name(match.params.module)
  return ''
}
