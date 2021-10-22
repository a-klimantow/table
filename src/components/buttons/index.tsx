import * as React from 'react'
import * as Mui from '@mui/material'

import { Icon } from '../icon'

export const Export = React.memo<Mui.ButtonProps>((props) => (
  <Mui.Button {...props} startIcon={<Icon type="export" />}>
    Экспорт
  </Mui.Button>
))

export const Import = React.memo<Mui.ButtonProps>((props) => (
  <Mui.Button {...props} startIcon={<Icon type="import" />}>
    Импорт
  </Mui.Button>
))
