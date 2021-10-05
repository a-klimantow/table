import { action, makeAutoObservable, runInAction } from 'mobx'
import { ButtonProps, PopoverProps, InputBaseProps } from '@material-ui/core'
import sup from 'superagent'
import { useEffect, useRef } from 'react'
import { useUser, useUrl } from 'hooks'

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
  get startCreate() {
    return Boolean(this.formData)
  }

  createFile() {
    const req = sup
      .post('/api/v1/admin/1029695/content')
      .auth(this.token, { type: 'bearer' })

    if (this.formData) {
      req.send(this.formData)
      ;(async () => {
        try {
          const { body } = await req.then()
          runInAction(() => {
            this.file = body.data
            this.formData = null
          })
        } catch (error) {
          console.log(error)
        }
      })()
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

  get startImport() {
    return Boolean(this.file)
  }

  importFile() {
    const req = sup
      .post(this.importUrl)
      .auth(this.token, { type: 'bearer' })
      .query({ fileId: this.file?.id })

    if (this.file) {
      ;(async () => {
        try {
          const { body } = await req.then()
          console.log(body)
        } catch (error) {
        } finally {
          runInAction(() => {
            this.file = null
            this.ancor = null
          })
        }
      })()
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
  const user = useUser()
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
  }, [store, store.startCreate])

  useEffect(() => {
    const request = store.importFile()
    return () => request.abort()
  }, [store, store.startImport])

  return store
}
