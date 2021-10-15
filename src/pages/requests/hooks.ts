import * as React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import buildQueries from 'odata-query'
import f from 'odata-filter-builder'
import { entries } from 'mobx'
import * as uuid from 'uuid'

//
import { IRequestItem } from 'types'
import { useFetchRewards } from 'hooks'
import * as Grid from 'components/grid'

const columns = new Map<keyof IRequestItem, Grid.IGridCol>()
  .set('panel_name', { name: 'Наименование панели', quickFilter: true })
  .set('old_requests', { name: 'Старше 3 дней' })
  .set('old_requests_sum', { name: 'Сумма (старше 3 дней)' })
  .set('all_requests', { name: 'На рассмотрении' })
  .set('all_requests_sum', { name: 'Сумма (на рассмотрении)' })
  .set('accept_requests', { name: 'В обработке' })

export const useRequests = () => {
  const page = useLocalObservable(() => ({
    grid: new Grid.Store('rewards', columns),

    items: [] as IRequestItem[],

    get quickFilter() {
      if (!this.grid.search) return ''
      return f
        .or()
        .contains('panel_name', this.grid.search)
        .contains('country', this.grid.search)
        .toString()
    },

    get query() {
      return buildQueries({
        top: this.grid.top,
        skip: this.grid.skip,
        filter: this.quickFilter,
      }).slice(1)
    },

    success(data: { items: IRequestItem[]; count: number }) {
      this.grid.count = data.count
      this.items = data.items
      console.log(data.items)
    },

    get body() {
      return this.items.map((item) =>
        entries(this.grid.columns).map(([k, c]) => ({
          key: c.name,
          cell: c.renderCell
            ? c.renderCell(item)
            : item[k as keyof IRequestItem],
        }))
      )
    },
  }))

  useFetch(page)

  return page
}

function useFetch(page: ReturnType<typeof useRequests>) {
  const fetch = useFetchRewards('requests', page.query)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { count, items } = await fetch()
        page.success({
          count,
          items: items.map((item: IRequestItem) => ({
            ...item,
            key: uuid.v4(),
            cells: [...columns].map(([key, cell]) => ({
              key,
              cell: cell.renderCell ? cell.renderCell(item) : item[key],
            })),
          })),
        })
      } catch (error) {}
    })()
  }, [page, fetch])
}
