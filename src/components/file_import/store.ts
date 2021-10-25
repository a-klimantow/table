import * as React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { useRouteMatch } from 'react-router-dom'

import { IListItem } from 'types'
import { useFetchImport, useFetchList } from 'hooks'

type A = null | Element
type D = null | FormData
type E = React.ChangeEvent<HTMLInputElement>
type L = null | IListItem[]

export type StateType = ReturnType<typeof useImportState>

const useState = () =>
  useLocalObservable(() => ({
    anchor: null as A,

    setAnchor(anchor: A) {
      this.anchor = anchor
    },

    list: null as L,

    setList(list: IListItem[]) {
      this.list = list
    },

    get startGet() {
      return Boolean(this.anchor) && !this.list
    },

    get items() {
      return (
        this.list?.map((item) => ({
          ...item,
          change: (e: E) => {
            const { files } = e.currentTarget
            files?.length && this.setData(files[0], item.name)
          },
        })) ?? []
      )
    },

    data: null as D,
    payName: '',

    setData(file: File, name: string) {
      this.data = new FormData()
      this.data.set(file.name, file)
      this.payName = name
    },

    get url() {
      return this.payName.replace(/Ю/gi, 'yoo').toLowerCase()
    },

    reset() {
      this.data = null
      this.anchor = null
    },
  }))

const useUrl = (state: StateType) => {
  const isAccruals = Boolean(useRouteMatch('/:m/accruals'))
  return isAccruals
    ? 'withdrawal-arbitrary/import'
    : `withdrawal/import${state.url}`
}

export const useImportState = () => {
  const state = useState()
  const url = useUrl(state)
  useFetchImport(url, state.data, state.reset)
  useFetchList('payment-systems', state.setList, state.startGet)
  return state
}
