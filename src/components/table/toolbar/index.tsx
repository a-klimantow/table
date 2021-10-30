import * as React from 'react'
import * as Mui from '@mui/material'

import { MenuColumns } from '../menu_columns'
import { Search } from '../search'

export const Toolbar = React.memo(() => (
  <Mui.Paper data-section="toolbar" square>
    <MenuColumns />
    <Search />
  </Mui.Paper>
))
