import * as React from 'react'
import * as Mui from '@material-ui/core'
import { observer, Observer } from 'mobx-react-lite'

import { Icon } from '../icon'
import { SearchContextProvider, useSearchContext } from './hooks'

export const SearchProvider: React.FC = ({ children }) => (
  <Mui.ThemeProvider
    theme={React.useMemo(
      () =>
        Mui.createTheme({
          components: {
            MuiOutlinedInput: {
              defaultProps: {
                startAdornment: <SearchIcon />,
                endAdornment: <Button />,
                placeholder: 'Поиск...',
                size: 'small',
                sx: { bgcolor: 'background.paper', fontSize: 14 },
              },
            },

            MuiSvgIcon: {
              defaultProps: { fontSize: 'small' },
            },

            MuiIconButton: {
              defaultProps: { size: 'small' },
            },
          },
        }),
      []
    )}
  >
    {children}
  </Mui.ThemeProvider>
)

export const SearchIcon = React.memo(() => (
  <Mui.InputAdornment position="start">
    <Icon type="search" />
  </Mui.InputAdornment>
))

export const Button = observer(() => {
  const search = useSearchContext()

  if (!search.value.trim()) return null

  return (
    <Mui.InputAdornment position="end">
      <Mui.IconButton onClick={() => search.setValue()}>
        <Icon type="search_clear" />
      </Mui.IconButton>
    </Mui.InputAdornment>
  )
})

export const SearchInput = observer(() => {
  const search = useSearchContext()
  return (
    <Mui.OutlinedInput
      value={search.value}
      onChange={(e) => search.setValue(e.target.value)}
    />
  )
})
