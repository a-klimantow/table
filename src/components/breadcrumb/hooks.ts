import * as Mui from '@mui/material'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { PageType as P, ModuleType as M } from '../../types'
import { moduleNames, pageNames } from '../../assets'

type L = Mui.LinkProps & { key: string }

export const useBreadCrumbs = () => {
  const history = useHistory()
  const module = useRouteMatch<{ path: M }>('/:path')
  const page = useRouteMatch<{ path: P }>('/*/:path')

  return [
    {
      key: 'module',
      children: moduleNames.get(module ? module.params.path : ''),
      sx: {
        color: 'grey.500',
        pointerEvents: 'none',
        textDecoration: 'none',
        fontSize: '15px',
      },
    },
    {
      key: 'page',
      children: pageNames.get(page ? page.params.path : ''),
      onClick: () => {
        history.push(page ? page.url : '')
      },
      sx: {
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '15px',
      },
    },
  ] as L[]
}
