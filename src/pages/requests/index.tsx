import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { FileImport } from 'components/file_import'
import { useRequestsGrid } from './hooks'

export const Requests = observer(() => {
  const grid = useRequestsGrid()
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          {/* <RewardsExport /> */}
          <FileImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
