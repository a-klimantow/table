import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { columns } from './columns'
import { useFetch, useFormatedColumns } from './hooks'

export const Accruals = observer(() => {
  const grid = Grid.useGrid(columns)
  useFormatedColumns(grid)
  useFetch(grid)
  return (
    <Grid.Provider value={grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.MenuColumns />
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
