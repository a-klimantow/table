import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { RewardsExport } from 'components/rewards_export'
import { RewardsImport } from 'components/rewards_import'
import { columns } from './columns'
import { useFetch, useFormatedColumns } from './hooks'

export const Requests = observer(() => {
  const grid = Grid.useGrid(columns)
  useFormatedColumns(grid)
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
          <RewardsImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
