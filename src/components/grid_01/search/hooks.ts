import * as React from 'react'
import * as Mobx from 'mobx-react-lite'
import * as Mui from '@mui/material'

import { useGridContext } from '../context'

const searchState = (value = '') => ({
  value,

  touched: false,

  setValue(v: string) {
    this.value = v
    this.touched = true
  },
})

export function useSearch() {
  const grid = useGridContext()
  const state = Mobx.useLocalObservable(() => searchState(grid.search))

  const update = () => state.touched && grid.setSearch(state.value)

  React.useEffect(() => {
    const timer = setTimeout(() => update(), 1000)
    return () => clearTimeout(timer)
  })

  return {
    input: {
      value: state.value,
      onChange: (e) => state.setValue(e.target.value),
    } as Mui.InputProps,

    button: {
      onClick: () => state.setValue(''),
    } as Mui.ButtonProps,

    showButton: Boolean(state.value),
  }
}
