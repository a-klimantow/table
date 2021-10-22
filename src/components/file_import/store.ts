import * as React from 'react'
import * as Mui from '@mui/material'
import { useLocalObservable } from 'mobx-react-lite'

import { paymentNames } from 'assets'
import { useFetchImport } from 'hooks'
import { useRouteMatch } from 'react-router'

type A = null | Element
type D = null | FormData
type E = React.ChangeEvent<HTMLInputElement>

export type StoreType = ReturnType<typeof useImportStore>

export const useImportStore = () => {
  const isAccruals = Boolean(useRouteMatch('/:m/accruals'))
  const store = useLocalObservable(() => ({
    anchor: null as A,

    setAnchor(anchor: A) {
      this.anchor = anchor
    },

    pay: '',
    data: null as D,

    setData(data: D, pay: string) {
      this.data = data
      this.pay = pay
    },

    get url() {
      if (isAccruals) return 'withdrawal-arbitrary/import'
      return `withdrawal/import${this.pay}`
    },

    get menu(): Mui.MenuProps {
      return {
        open: Boolean(this.anchor),
        anchorEl: this.anchor,
        onClose: () => this.setAnchor(null),
      }
    },

    get items() {
      return (['yookassa', 'webmoney'] as const).map((item) => ({
        key: item,
        name: paymentNames.get(item),
        onChange: (e: E) => {
          const { files } = e.currentTarget
          if (files?.length) {
            const data = new FormData()
            data.set(files[0].name, files[0])
            this.setData(data, item)
          }
        },
      }))
    },
  }))

  const fetchImport = useFetchImport(store.url, store.data)

  React.useEffect(() => {
    if (store.data) fetchImport()
  }, [store, fetchImport])

  return store
}
