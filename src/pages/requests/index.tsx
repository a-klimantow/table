import * as React from 'react'
import { observer } from 'mobx-react-lite'
//
import * as Grid from 'components/grid'
import { useRequests } from './hooks'

export const Requests = observer(() => {
  const page = useRequests()
  return (
    <Grid.Provider value={page.grid}>
      <Grid.Paper data-app-page>
        <Grid.Toolbar>
          <Grid.MenuColumns />
          <Grid.Search />
        </Grid.Toolbar>
        <Grid.Table>
          <Grid.TableHead />
          <Grid.TableBody></Grid.TableBody>
        </Grid.Table>
        <Grid.Bottom>
          <Grid.Pagination />
        </Grid.Bottom>
      </Grid.Paper>
    </Grid.Provider>
  )
})
