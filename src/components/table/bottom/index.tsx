import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'

import { TablePagination } from '../table_pagination'

export const Bottom = React.memo(() => (
  <Mui.Paper data-section="bottom" square>
    <Mui.Button startIcon={<Icon.FileUpload />}>Экспорт</Mui.Button>
    <Mui.Button startIcon={<Icon.FileDownload />}>Импорт</Mui.Button>
    <TablePagination />
  </Mui.Paper>
))
