import { useEffect, useRef } from 'react'
import { autorun, makeAutoObservable, reaction, runInAction, when } from 'mobx'
import superagent from 'superagent'
import f from 'odata-filter-builder'
import store from 'store'

import { ICol, IDataItem } from 'types'
import { useUrl, useAppStore } from 'hooks'
import {
  SearchType,
  useSearch,
  PaginationType,
  usePagination,
} from 'components'

type QFType = keyof IDataItem

const KEY = 'rewards'

class Requests {
  private state = {
    columns: [] as ICol[],
    search: { value: '' },
  }
  private qfArr: QFType[]

  data = []
  loading = true
  pagi = {
    count: 0,
    page: 0,
    perPage: 10,
  }

  get columns() {
    return this.state.columns
  }

  get top() {
    return this.pagi.perPage
  }

  get skip() {
    const { page, perPage } = this.pagi
    return page * perPage
  }

  constructor(
    columns: ICol<IDataItem>[],
    qfArr: QFType[],
    public search: SearchType,
    public pagination: PaginationType
  ) {
    const state = store.get(KEY) as Requests['state'] | null

    this.state.columns = state ? state.columns : (columns as unknown as ICol[])
    this.state.search.value = state ? state.search.value : ''
    this.qfArr = qfArr

    this.columns.forEach((c) => {
      c.quickFilter = (qfArr as string[]).includes(c.key)
    })
    makeAutoObservable(this)
    reaction(
      () => this.search.current,
      (v) => console.log(v)
    )
    // reaction(
    //   () => [this.pagi.page, this.pagi.perPage, this.state.search.value],
    //   () => (this.loading = true)
    // )
    // reaction(
    //   () => [this.pagi.count, this.pagi.perPage],
    //   () => (this.pagi.page = 0)
    // )

    // reaction(
    //   () => this.state.columns.map((c) => c.hidden),
    //   () => store.set(KEY, this.state)
    // )

    // reaction(
    //   () => this.state.search.value,
    //   () => store.set(KEY, this.state)
    // )

    // reaction(
    //   () => [this.srch.typing, this.search.value],
    //   ([t, v]) => {
    //     !t && console.log(v)
    //   }
    // )
  }
}

export function useRequestsPage() {
  const store = useRef(
    new Requests(
      [
        {
          key: 'panel_name',
          name: 'Название панели',
          renderCell: (i) => `${i.panel_name} ${i.country}`,
        },
        { key: 'old_requests', name: 'Старше 3 дней' },
        { key: 'old_requests_sum', name: 'Сумма (старше 3 дней)' },
        { key: 'all_requests', name: 'На рассмотрении' },
        { key: 'all_requests_sum', name: 'Сумма (на рассмотрении)' },
        { key: 'accept_requests', name: 'В обработке' },
      ],
      ['panel_name', 'country'],
      useSearch(),
      usePagination()
    )
  ).current

  // useFetch(store)
  return store
}

function useFetch(store: Requests) {
  const { user } = useAppStore()

  const url = useUrl('withdrawal')

  const request = superagent
    .get(url)
    .auth(user.token, { type: 'bearer' })
    .query({ $top: store.top })
    .query({ $skip: store.skip })

  useEffect(() => {
    if (!store.loading) return
    ;(async () => {
      try {
        const response = await request.then()
        const { items, metadata } = response.body
        const { total_count } = metadata.pagination
        runInAction(() => {
          store.data = items
          store.pagi.count = total_count
        })
      } catch (error) {
        console.log(error)
      } finally {
        runInAction(() => {
          store.loading = false
        })
      }
    })()
    return () => request.abort()
  }, [store, store.loading, request])
}
