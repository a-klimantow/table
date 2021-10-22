import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { RewardsImport } from 'components/rewards_import'
import { useAccrualsStore } from './store'

export const Accruals = observer(() => {
  const { grid } = useAccrualsStore()
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          <RewardsImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
