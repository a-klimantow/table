import * as React from 'react'
import * as Mui from '@mui/material'

import { MenuColumns } from '../menu_columns'
import { Search } from '../search'
import { TableLoader } from '../table_loader'

export const Toolbar = React.memo(() => (
  <Mui.Paper data-section="toolbar" square>
    <MenuColumns />
    <Search />
    <TableLoader />
  </Mui.Paper>
))
