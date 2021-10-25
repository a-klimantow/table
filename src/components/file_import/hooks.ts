import * as React from 'react'

import { useRouteMatch } from 'react-router-dom'
import { IListItem } from 'types'
import { useFetchImport, useFetchImportList, useMenu } from 'hooks'
import { computed, observable } from 'mobx'

type E = React.ChangeEvent<HTMLInputElement>
type D = null | FormData
type L = IListItem

const paySystems = observable.array<L>([])

const updateList = (list: L[]) => paySystems.replace(list)

const data = observable.box<D>(null)

const payName = observable.box('')

const payLink = computed(() =>
  payName.get().replace(/ю/gi, 'yoo').toLowerCase()
)

const changeData = (item: L, e: E) => {
  const { files } = e.currentTarget
  if (files) {
    const [file] = files
    const fd = new FormData()
    fd.set(file.name, file)
    data.set(fd)
    payName.set(item.name)
  }
}

const useUrl = () =>
  Boolean(useRouteMatch('/:m/accruals'))
    ? 'withdrawal-arbitrary/import'
    : `withdrawal/import${payLink.get()}`

export const useImportState = () => {
  const menu = useMenu()
  const url = useUrl()

  const loading = computed(() =>
    [menu.anchor, !paySystems.length].every(Boolean)
  )

  const reset = () => {
    data.set(null)
    menu.setAnchor(null)
  }

  useFetchImportList(updateList, loading.get())
  useFetchImport(url, data.get(), reset)

  return {
    menu,
    items: paySystems.map((item) => ({ ...item, changeData })),
    loading,
  }
}
