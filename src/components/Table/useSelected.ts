import { useState, SyntheticEvent } from 'react'
import { CheckboxProps } from '@material-ui/core'

export const useSelected = (totalRow: number) => {
  const [selected, dispatch] = useState<number[]>([])

  const selectedAll = Boolean(selected.length)
  const isIndeterminate = selectedAll && selected.length !== totalRow

  const hadnleSelectedAll = () =>
    selectedAll
      ? dispatch([])
      : dispatch(
          Array(totalRow)
            .fill(null)
            .map((_, i) => i)
        )

  const handleChange = (name: 'all' | number) => (
    e: SyntheticEvent<HTMLInputElement | HTMLElement>
  ) => {
    const { checked } = e.target as HTMLInputElement
    if (name === 'all') {
      dispatch(
        checked
          ? Array(totalRow)
              .fill(null)
              .map((_, i) => i)
          : []
      )
    } else {
      console.log(name)
      dispatch((s) => (s.includes(name) ? s.filter((i) => i !== name) : [...s, name]))
    }
  }

  return {
    checkboxAll: {
      checked: selectedAll,
      onChange: hadnleSelectedAll,
      indeterminate: isIndeterminate,
    } as CheckboxProps,

    checkboxRow: (idx: number): CheckboxProps => ({
      checked: selected.includes(idx),
      onChange: handleChange(idx),
    }),
    handleSelect: handleChange,
    isRowSelect: (idx: number) => selected.includes(idx) || null,
  }
}
