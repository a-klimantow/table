import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import {
  PageLayout,
  Toolbar,
  ColMenu,
  Search,
  Pagination,
  Grid,
  GridBottom,
  ExportRrewards,
  ImportRewards,
} from 'components'
import { PageStore } from './store'
import { useFetch } from './useFetch'

export const RequestsPage = observer(() => {
  const page = useRef(new PageStore()).current
  useFetch(page)
  return (
    <PageLayout>
      <Toolbar>
        <ColMenu colMenu={page.colMenu} />
        <Search search={page.search} />
      </Toolbar>
      <Grid grid={page.grid} />
      <GridBottom>
        <Stack direction="row" gap={1}>
          <ExportRrewards exp={page.exp} />
          <ImportRewards />
        </Stack>
        <Pagination pagination={page.pagination} />
      </GridBottom>
    </PageLayout>
  )
})
