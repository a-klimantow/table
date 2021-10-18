import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { RewardsExport } from 'components/rewards_export'
import { columns } from './columns'
import { useFetch, useAddRender } from './hooks'

export const Requests = observer(() => {
  const grid = Grid.useGrid(columns)
  useAddRender(grid)
  useFetch(grid)
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          <RewardsExport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
