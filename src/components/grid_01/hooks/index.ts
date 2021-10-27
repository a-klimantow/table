import * as Mobx from 'mobx-react-lite'
import * as mobx from 'mobx'

import { ArrCol, IDataItem } from '../types'

const items = mobx.observable.array<IDataItem>()

export const useGrid = (columns: ArrCol) => {
  return Mobx.useLocalObservable(() => ({
    search: '',

    // --------------

    page: 0,
    rows: 10,
    count: 0,

    setCount(c: number) {
      this.count = c
    },

    get top() {
      return this.rows
    },

    get skip() {
      return this.page * this.top
    },

    // --------------

    loading: false,

    setLoading(l: boolean) {
      this.loading = l
    },

    items,

    setItems(dataItems: IDataItem[]) {
      items.replace(dataItems)
    },

    get currentCols() {
      return columns.filter((i) => i.render ?? true)
    },
  }))
}
