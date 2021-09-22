import { action, makeAutoObservable, runInAction } from 'mobx'
import { ButtonProps, PopoverProps, InputBaseProps } from '@material-ui/core'
import sup from 'superagent'
import { useEffect, useRef } from 'react'
import { useAppStore, useUrl } from 'hooks'

type PayType = ImportStore['pays'][number]

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

class ImportStore {
  private ancor = null as null | HTMLElement
  private formData = null as null | FormData
  private pays = ['ЮKassa', 'WebMoney'] as const
  private activePay = null as PayType | null
  private file = null as null | IFile

  // fetch
  get loading() {
    return Boolean(this.formData)
  }

  createFile() {
    const req = sup
      .post('/api/v1/admin/1029695/content')
      .auth(this.token, { type: 'bearer' })

    if (this.formData) {
      req
        .send(this.formData)
        .then(({ body }) =>
          runInAction(() => {
            this.formData = null
            this.ancor = null
            this.file = body.data
          })
        )
        .catch(console.log)
    }

    return req
  }

  private get importUrl() {
    switch (this.activePay) {
      case 'WebMoney':
        return this.webUrl
      case 'ЮKassa':
        return this.kassaUrl

      default:
        return ''
    }
  }

  importFile() {
    const req = sup.post(this.importUrl).auth(this.token, { type: 'bearer' })

    if (this.file) {
      req.query({ fileId: this.file.id }).then(console.log).catch(console.log)
    }

    return req
  }

  // nodes
  private setFormData: InputBaseProps['onChange'] = (e) => {
    const { name } = e.currentTarget
    const form = e.currentTarget.closest('form')
    if (form) {
      this.activePay = name as PayType
      this.formData = new FormData(form)
    }
  }

  get button(): ButtonProps {
    return {
      children: 'Импорт',
      onClick: action((e) => (this.ancor = e.currentTarget)),
    }
  }

  get popover(): PopoverProps {
    return {
      open: Boolean(this.ancor),
      onClose: action(() => (this.ancor = null)),
      anchorEl: this.ancor,
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
    }
  }

  get items(): InputBaseProps[] {
    return this.pays.map((name) => ({
      name,
      type: 'file',
      sx: { display: 'none' },
      onChange: this.setFormData,
    }))
  }

  constructor(
    public token: string,
    public webUrl: string,
    public kassaUrl: string
  ) {
    makeAutoObservable(this)
  }
}

export const useImportStore = () => {
  const { user } = useAppStore()
  const store = useRef(
    new ImportStore(
      user.token,
      useUrl('withdrawal/importwebmoney'),
      useUrl('withdrawal/importyookassa')
    )
  ).current

  useEffect(() => {
    const request = store.createFile()
    return () => request.abort()
  }, [store, store.loading])

  useEffect(() => {
    const request = store.importFile()
    return () => request.abort()
  }, [store, store.loading])

  return store
}
