import * as React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { moduleNames, pageNames } from '../../assets'
import { PageType as P, ModuleType as M } from '../../types'

const useModuleName = () => {
  const match = useRouteMatch<{ module:M}>('/:module')
  if (match) {
    const { module } = match.params
    return moduleNames.get(module)
  }
  return ''
}

const usePageName = () => {
  const match = useRouteMatch<{ page:P}>('/*/:page')
  if (match) {
    const { page } = match.params
    return pageNames.get(page)
  }
  return ''
}

export const useBreadCrumbs = () => {
  const history = useHistory()
  const moduleName = useModuleName()
  const pageName = usePageName()
  const location = [moduleName, pageName]

  return location.map((item, i) => {
    if (location.length === i + 1) {
      return {
        name: item,
        event: () => { history.push(history.location.pathname) },
        color: 'text.primary'
      }
    } else {
      return {
        name: item,
        event: {},
        color: 'inherit'
      }
    }
  })
}
