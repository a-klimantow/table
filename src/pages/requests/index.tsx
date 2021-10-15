import * as React from 'react'
import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { useRequests } from './hooks'

export const Requests = observer(() => {
  const grid = useRequests()
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
