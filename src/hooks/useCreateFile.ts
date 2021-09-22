import { useEffect } from 'react'
import sup from 'superagent'
import { InputProps } from '@material-ui/core'
import { useLocalObservable } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { useAppStore } from 'hooks'

interface IFile {
  checksum: number
  file_name: string
  file_size: number
  id: number
  original_name: string
  parent_id: number
  parent_type: string
  updated: Date
  url: string
}

const initialState = {
  file: null as null | IFile,
  form: null as null | HTMLFormElement,

  setForm(form: HTMLFormElement) {
    this.form = form
  },

  setFile(file: IFile) {
    this.file = file
    this.form = null
  },

  fail() {
    this.form = null
  },

  get loading() {
    return Boolean(this.form)
  },
}

export function useCreateFile() {
  const state = useLocalObservable(() => initialState)
  const { user } = useAppStore()

  const createFile = sup
    .post('/api/v1/admin/1029695/content')
    .auth(user.token, { type: 'bearer' })
    .send(new FormData(state.form ?? undefined))

  useEffect(() => {
    if (!state.loading) return

    createFile
      .then((res) => state.setFile(res.body.data))
      .catch(() => state.fail())

    return () => createFile.abort()
  }, [state, createFile])

  const handleSetFrom: InputProps['onChange'] = (e) => {
    const form = e.currentTarget.closest('form')
    form && state.setForm(form)
  }

  return { file: toJS(state.file), handleSetFrom }
}
