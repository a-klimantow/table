import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { FileImport } from 'components/file_import'
import { useAccrualsGrid } from './hooks'

export const Accruals = observer(() => {
  const grid = useAccrualsGrid()
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table />
        <Grid.Bottom>
          <FileImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
