import { observer } from 'mobx-react-lite'
import { observable, autorun, reaction } from 'mobx'
// import * as Grid from 'components/grid'

import { ICol } from 'components/grid_01/types'
import * as Grid from 'components/grid_01'
import { FileImport } from 'components/file_import'
import { FileExport } from 'components/file_export'
import { useRequestsGrid } from './hooks'
import { useFetch, useFetchAuth, useFetchAbort, useFetchRedirect } from 'hooks'
import React from 'react'

const cols = observable.array<ICol>([
  {
    key: 'panel_name',
    name: 'Наименование панели',
    filterQuick: true,
    renderCell() {
      return 'fafa'
    },
  },
  { key: 'old_requests', name: 'Старше 3 дней', type: 'number' },
  { key: 'old_requests_sum', name: 'Сумма (старше 3 дней)', type: 'number' },
  { key: 'all_requests', name: 'На рассмотрении', type: 'number' },
  { key: 'all_requests_sum', name: 'Сумма (на рассмотрении)', type: 'number' },
  { key: 'accept_requests', name: 'В обработке', type: 'number' },
])

reaction(
  () => cols.map((c) => c.width),
  (w) => console.log(JSON.stringify(cols))
)

export const Requests = observer(() => {
  // const { grid, query } = useRequestsGrid()
  // return (
  //   <Grid.Provider value={grid}>
  //     <Grid.Paper data-app-page>
  //       <Grid.Toolbar>
  //         <Grid.Search />
  //       </Grid.Toolbar>
  //       <Grid.Table />
  //       <Grid.Bottom>
  //         <FileExport query={query} />
  //         <FileImport />
  //         <Grid.Pagination />
  //       </Grid.Bottom>
  //     </Grid.Paper>
  //   </Grid.Provider>
  // )

  const grid = Grid.useGrid(cols)
  const fetch = useFetch('withdrawal')
  useFetchAuth(fetch)
  useFetchRedirect(fetch)
  useFetchAbort(fetch)

  React.useEffect(() => {
    grid.setLoading(true)
    ;(async () => {
      try {
        const res = await fetch
        const { items } = res.body
        grid.setItems(items)
        grid.setLoading(false)
      } catch (error) {}
    })()
  })

  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.MenuCols />
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
      </Grid.Paper>
    </Grid.Provider>
  )
})
