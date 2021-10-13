import * as Mui from '@material-ui/core'
import { useState } from 'react'

import { ModuleType as M, PageType as P } from 'types'

const moduleItems: M[] = ['projects', 'panels', 'rewards', 'administration']

const userItems: P[] = ['user_settings', 'logout']

const useMenu = () => {
  const [anchor, setAnchor] = useState<null | Element>(null)

  return {
    button: {
      onClick: (e) => setAnchor(e.currentTarget),
    } as Mui.ButtonProps,
    menu: {
      open: Boolean(anchor),
      anchorEl: anchor,
      onClick: () => setAnchor(null),
    } as Mui.MenuProps,
  }
}
