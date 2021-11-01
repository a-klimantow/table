import * as React from 'react'
import * as Mui from '@mui/material'
import * as Mobx from 'mobx-react-lite'

import { useTableContext } from '../context'

const initialState = (value = '') => ({
  value,
  touched: false,
  setValue(value: string) {
    this.value = value
    this.touched = true
  },

  get showButton() {
    return !!this.value
  },
})

export function useSeach() {
  const table = useTableContext()
  const state = Mobx.useLocalObservable(() => initialState(table.search))

  const update = () => state.touched && (table.search = state.value)

  React.useEffect(() => {
    const timer = setTimeout(update, 1000)
    return () => clearTimeout(timer)
  })

  return {
    input: {
      value: state.value,
      onChange: (e) => state.setValue(e.target.value),
      placeholder: 'Поиск...',
    } as Mui.InputBaseProps,

    disabled: !table.quickFilterCols.length,

    showButton: state.showButton,

    button: {
      onClick: () => state.setValue(''),
      size: 'small',
    } as Mui.IconButtonProps,
  }
}
