import { ChangeEvent, useState } from 'react'
import { CheckboxProps } from '@material-ui/core'

export const useCheckboxes = (arr: number[]) => {
  const [checkRows, setCheckRows] = useState<number[]>([])

  const isCheckAll = Boolean(checkRows.length)
  const isIndeterminate = Boolean(checkRows.length) && arr.length !== checkRows.length

  const handleChangeAll = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget
    setCheckRows(() => (checked ? arr : []))
  }

  const handleChangeRow = (idx: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget
    setCheckRows((s) => (checked ? [...s, idx] : s.filter((i) => i !== idx)))
  }

  return {
    all: {
      color: 'primary',
      onChange: handleChangeAll,
      indeterminate: isIndeterminate,
      checked: isCheckAll,
    } as CheckboxProps,
    row: (idx: number) =>
      ({
        color: 'primary',
        checked: checkRows.includes(idx),
        onChange: handleChangeRow(idx),
      } as CheckboxProps),
  }
}
