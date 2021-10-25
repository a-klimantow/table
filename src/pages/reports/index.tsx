import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { useReportsGrid } from './hooks'

export const Reports = observer(() => {
  const grid = useReportsGrid()

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
