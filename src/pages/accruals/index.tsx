import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { FileImport } from 'components/file_import'
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
          <FileImport />
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
