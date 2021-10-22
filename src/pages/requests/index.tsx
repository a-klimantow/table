import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
// import { RewardsExport } from 'components/rewards_export'
import { RewardsImport } from 'components/rewards_import'
import { useRequestsStore } from './store'

export const Requests = observer(() => {
  const { grid } = useRequestsStore()
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          {/* <RewardsExport /> */}
          <RewardsImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
