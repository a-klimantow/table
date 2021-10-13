import * as React from 'react'
import * as Mui from '@material-ui/core'

import { Icon } from '../icon'
import { useLocalObservable } from 'mobx-react-lite'

export const Search = React.memo(() => {
  return (
    <Mui.OutlinedInput
      sx={{ bgcolor: 'background.paper', fontSize: 14 }}
      placeholder="Поиск..."
      size="small"
      startAdornment={
        <Mui.InputAdornment position="start">
          <Icon type="search" fontSize="small" />
        </Mui.InputAdornment>
      }
      endAdornment={
        <Mui.InputAdornment position="end">
          <Mui.IconButton size="small">
            <Icon type="search_clear" fontSize="inherit" />
          </Mui.IconButton>
        </Mui.InputAdornment>
      }
    />
  )
})

export const useSearch = () => useLocalObservable(() => ({}))
