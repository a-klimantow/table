import { useCallback, useState, useEffect } from 'react'
import { OutlinedInputProps as OIProps } from '@material-ui/core'

import { SearchProps } from './Search'

export function useSearch(search: SearchProps) {
  const [value, setValue] = useState(search.value as string)

  const change: OIProps['onChange'] = useCallback(
    (e) => setValue(e.target.value),
    []
  )
  const clear = useCallback(() => setValue(''), [])

  const memoUpdate = useCallback(
    () => search.update && search.update(value),
    [search, value]
  )

  useEffect(() => {
    const timer = setTimeout(memoUpdate, 1000)
    return () => clearTimeout(timer)
  }, [memoUpdate])

  return {
    value,
    change,
    clear,
    showClear: Boolean(value.trim()),
  }
}
