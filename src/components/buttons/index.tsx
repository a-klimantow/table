import * as React from 'react'
import * as Mui from '@mui/material'

import { Icon } from '../icon'

type BProps = Mui.ButtonProps
type IBProps = Mui.IconButtonProps

export const Export = React.memo<BProps>((props) => (
  <Mui.Button {...props} startIcon={<Icon type="export" />}>
    Экспорт
  </Mui.Button>
))

export const Import = React.memo<BProps>((props) => (
  <Mui.Button {...props} startIcon={<Icon type="import" />}>
    Импорт
  </Mui.Button>
))

type SubmitProps = BProps & { loading?: boolean }

export const Submit = React.memo<SubmitProps>(
  ({ loading = false, ...props }) => (
    <Mui.Button {...props} type="submit">
      {props.children}
      {loading && (
        <Mui.LinearProgress
          sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        />
      )}
    </Mui.Button>
  )
)

type TogglePassProps = IBProps & { hidden: boolean }

export const TogglePass = React.memo<TogglePassProps>(
  ({ hidden, ...props }) => (
    <Mui.IconButton {...props}>
      <Icon type={hidden ? 'eye_off' : 'eye_on'} fontSize="inherit" />
    </Mui.IconButton>
  )
)
