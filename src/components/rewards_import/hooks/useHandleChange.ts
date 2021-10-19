import * as React from 'react'

import { useSnackbar } from 'hooks'
import { useImportContext } from '../context'

type Evt = React.ChangeEvent<HTMLInputElement>

export const useHandleChange = (name: string) => {
  const msg = useSnackbar()
  const imp = useImportContext()

  return (e: Evt) => {
    if (imp.data) return

    const { files } = e.currentTarget
    if (files?.length) {
      imp.setData(files[0], name)
    } else {
      msg('Неправельный формат файла', 'error')
    }
  }
}
