import { observer } from 'mobx-react-lite'
import { observable, autorun, reaction } from 'mobx'
// import * as Grid from 'components/grid'

import { IRequestItem } from 'types'
import { ICol } from 'components/grid_01/types'
import * as Grid from 'components/grid_01'
import { FileImport } from 'components/file_import'
import { FileExport } from 'components/file_export'
import { useRequestsGrid } from './hooks'
import { useFetch, useFetchAuth, useFetchAbort, useFetchRedirect } from 'hooks'
import React, { useEffect } from 'react'

const cols = observable.array<ICol>([
  {
    key: 'panel_name',
    name: 'Наименование панели',
    type: 'string',
    filterQuick: true,
  },
  { key: 'country', name: 'Страна', filterQuick: true, type: 'string' },
  {
    key: 'old_requests',
    name: 'Старше 3 дней',
    type: 'number',
  },
  { key: 'old_requests_sum', name: 'Сумма (старше 3 дней)', type: 'number' },
  { key: 'all_requests', name: 'На рассмотрении', type: 'number' },
  { key: 'all_requests_sum', name: 'Сумма (на рассмотрении)', type: 'number' },
  { key: 'accept_requests', name: 'В обработке', type: 'number' },
])

export const Requests = observer(() => {
  const grid = Grid.useGrid(cols, 'rewards')
  const fetch = useFetch('withdrawal')
  useFetchAuth(fetch)
  useFetchRedirect(fetch)
  useFetchAbort(fetch)

  fetch.query(grid.query)

  React.useEffect(() => {
    grid.setLoaging(true)
    ;(async () => {
      try {
        const res = await fetch
        const { items, metadata } = res.body
        grid.setItems(items)
        grid.setCount(metadata.pagination.total_count)
        grid.setLoaging(false)
      } catch (error) {}
    })()
  }, [grid, fetch])

  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.MenuCols />
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
