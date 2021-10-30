import * as Mui from '@mui/material'
import * as Icon from '@mui/icons-material'
import * as Mobx from 'mobx-react-lite'

import { useSeach } from './hooks'

export const Search = Mobx.observer(() => {
  const { input, showButton, button } = useSeach()

  return (
    <Mui.Paper square={false} data-section="search">
      <Icon.Search fontSize="small" />
      <Mobx.Observer>{() => <Mui.InputBase {...input} />}</Mobx.Observer>
      <Mobx.Observer>
        {() =>
          showButton ? (
            <Mui.IconButton {...button}>
              <Icon.Clear />
            </Mui.IconButton>
          ) : null
        }
      </Mobx.Observer>
    </Mui.Paper>
  )
})
