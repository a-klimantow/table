import { useSnackbar as useHook, VariantType } from 'notistack'
import { useCallback } from 'react'

export function useSnackbar() {
  const hook = useHook()

  return useCallback(
    (msg: string, variant: VariantType = 'info') =>
      hook.enqueueSnackbar(msg, { variant }),
    [hook]
  )
}
