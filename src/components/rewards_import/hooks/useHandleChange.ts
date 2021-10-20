import * as React from 'react'

import { useImportContext } from '../context'

type Evt = React.ChangeEvent<HTMLInputElement>

export const useHandleChange = (name: string) => {
  const imp = useImportContext()

  return (e: Evt) => {
    if (imp.data) return

    const { files } = e.currentTarget
    if (files?.length) {
      imp.setData(files[0], name)
    }
  }
}
