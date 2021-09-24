import { useEffect, useRef } from 'react'
import { makeAutoObservable, reaction, runInAction } from 'mobx'
import superagent from 'superagent'
import f from 'odata-filter-builder'
import store from 'store'

import { ICol, IAccrualItem } from 'types'
import { useUrl, useAppStore } from 'hooks'

type QFType = keyof IAccrualItem

const KEY = 'rewards'

class Accruals {
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

  get search() {
    return this.state.search
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

  get quickFilter() {
    if (!this.search.value) return {}
    const filter = f('or')

    this.qfArr.forEach((name) => {
      filter.contains((x) => x.toLower(name), this.search.value.toLowerCase())
    })

    return filter.toString()
  }

  constructor(columns: ICol<IAccrualItem>[], qfArr: QFType[]) {
    const state = store.get(KEY) as Accruals['state'] | null

    this.state.columns = state ? state.columns : (columns as unknown as ICol[])
    this.state.search.value = state ? state.search.value : ''
    this.qfArr = qfArr

    this.columns.forEach((c) => {
      c.quickFilter = (qfArr as string[]).includes(c.key)
    })
    makeAutoObservable(this)

    reaction(
      () => [this.pagi.page, this.pagi.perPage, this.state.search.value],
      () => (this.loading = true)
    )
    reaction(
      () => [this.pagi.count, this.pagi.perPage],
      () => (this.pagi.page = 0)
    )

    reaction(
      () => this.state.columns.map((c) => c.hidden),
      () => store.set(KEY, this.state)
    )

    reaction(
      () => this.state.search.value,
      () => store.set(KEY, this.state)
    )
  }
}

export function useAccrualsPage() {
  const store = useRef(
    new Accruals(
      [
        { key: 'file_name', name: 'Файл' },
        { key: 'author_id', name: 'ID пользователя' },
        {
          key: 'created',
          name: 'Дата и время загрузки',
          renderCell: (i) =>
            new Intl.DateTimeFormat('ru-Ru', {
              dateStyle: 'short',
              timeStyle: 'short',
            }).format(new Date(i.created)),
        },
        { key: 'amount', name: 'Сумма' },
      ],
      ['file_name', 'author_id']
    )
  ).current

  useFetch(store)
  return store
}

function useFetch(store: Accruals) {
  const { user } = useAppStore()

  const url = useUrl('withdrawal-arbitrary')

  const request = superagent
    .get(url)
    .auth(user.token, { type: 'bearer' })
    .query({ $top: store.top })
    .query({ $skip: store.skip })
    .query({ $filter: store.quickFilter })

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
