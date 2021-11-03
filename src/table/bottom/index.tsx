import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'

import { TablePagination } from '../table_pagination'
import { useTableContext } from '../context'

export const Bottom = React.memo(() => {
  const { onExportClick, onImportClick } = useTableContext()
  return (
    <Mui.Paper data-section="bottom" square>
      {onExportClick ? (
        <Mui.Button startIcon={<Icon.FileUpload />} onClick={onExportClick}>
          Экспорт
        </Mui.Button>
      ) : null}
      {onImportClick ? (
        <Mui.Button startIcon={<Icon.FileDownload />} onClick={onImportClick}>
          Импорт
        </Mui.Button>
      ) : null}
      <TablePagination />
    </Mui.Paper>
  )
})
