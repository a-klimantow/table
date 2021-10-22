import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { useReportsStore } from './store'

export const Reports = observer(() => {
  const { grid } = useReportsStore()

  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
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
