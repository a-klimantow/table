import * as React from 'react'
import * as Mui from '@mui/material'

import { Icon } from 'components'
import { useGridContext } from '../context'

export const Search = React.memo(() => {
  const grid = useGridContext()
  const [state, setState] = React.useState({
    value: grid.search,
    touched: false,
  })

  React.useEffect(() => {
    const timer = setTimeout(() => {
      state.touched && grid.setSearch(state.value)
    }, 1000)
    return () => clearTimeout(timer)
  }, [state.touched, state.value, grid])

  const handleChange = (value = '') => setState({ value, touched: true })

  return (
    <Mui.OutlinedInput
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      size="small"
      sx={{ bgcolor: 'background.paper', fontSize: 14, width: 250 }}
      startAdornment={<IconSearch />}
      endAdornment={
        <Button show={Boolean(state.value)} clear={() => handleChange()} />
      }
    />
  )
})

const Button = React.memo<{ show: boolean; clear(): void }>(
  ({ show, clear }) => (
    <Mui.InputAdornment position="end">
      {show ? (
        <Mui.IconButton size="small" onClick={clear}>
          <Icon type="search_clear" fontSize="inherit" />
        </Mui.IconButton>
      ) : null}
    </Mui.InputAdornment>
  )
)

const IconSearch = React.memo(() => (
  <Mui.InputAdornment position="start">
    <Icon type="search" fontSize="small" />
  </Mui.InputAdornment>
))
