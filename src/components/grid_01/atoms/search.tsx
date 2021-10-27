import * as React from 'react'
import * as Mui from '@mui/material'
import * as mobx from 'mobx'

import { Icon } from 'components/icon'
import { useGridContext } from '../context'

function usePaper(): Mui.PaperProps {
  const { palette } = Mui.useTheme()
  return {
    variant: 'outlined',
    sx: {
      width: 230,
      display: 'grid',
      gridTemplate: '32px / auto 1fr auto',
      alignItems: 'center',
      px: 1,
      gap: 1,
      '&:focus-within': {
        boxShadow: `0 0 0 2px ${palette.primary.light}`,
        transition: 'box-shadow 0.2s ease-in-out',
      },
    },
  }
}

function useSearch() {
  const grid = useGridContext()
  const [value, setValue] = React.useState(grid.search)
  const [touched, setTouched] = React.useState(false)

  const updateSearch = mobx.action(() => (grid.search = value))

  React.useEffect(() => {
    const timer = setTimeout(() => {
      touched && updateSearch()
    }, 1000)
    return () => clearInterval(timer)
  })

  const change = (str = '') => {
    setValue(str)
    setTouched(true)
  }

  return {
    input: {
      value,
      onChange: (e) => change(e.target.value),
      placeholder: 'Поиск...',
      sx: { fontSize: 14 },
    } as Mui.InputBaseProps,

    button: {
      onClick: () => change(''),
      size: 'small',
    } as Mui.IconButtonProps,

    showButton: !!value,
  }
}

export const Search = React.memo(() => {
  const paper = usePaper()
  const { input, button, showButton } = useSearch()
  return (
    <Mui.Paper {...paper}>
      <Icon type="search" color="action" fontSize="small" />
      <Mui.InputBase {...input} />
      {showButton && (
        <Mui.IconButton {...button}>
          <Icon type="search_clear" fontSize="inherit" />
        </Mui.IconButton>
      )}
    </Mui.Paper>
  )
})
