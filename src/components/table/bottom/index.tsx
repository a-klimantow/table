import * as React from 'react'
import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'

export const Bottom = React.memo(() => (
  <Mui.Paper data-section="bottom" square>
    <Mui.Button startIcon={<Icon.FileUpload />}>Экспорт</Mui.Button>
    <Mui.Button startIcon={<Icon.FileDownload />}>Импорт</Mui.Button>
    <Mui.TablePagination
      component="div"
      page={0}
      count={100}
      rowsPerPage={10}
      rowsPerPageOptions={[10, 20, 30]}
      onPageChange={() => null}
    />
  </Mui.Paper>
))
