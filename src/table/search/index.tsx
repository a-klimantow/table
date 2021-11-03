import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { useSeach } from './hooks'

export const Search = Mobx.observer(() => {
  const { input, showButton, button, disabled } = useSeach()

  return (
    <Mui.Paper square={false} data-section="search">
      <Icon.Search fontSize="small" color={disabled ? 'disabled' : 'inherit'} />
      <Mui.InputBase {...input} disabled={disabled} />
      {showButton ? (
        <Mui.IconButton {...button}>
          <Icon.Clear />
        </Mui.IconButton>
      ) : null}
    </Mui.Paper>
  )
})
