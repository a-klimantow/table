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
} from 'components'
import { PageStore } from './store'
import { useFetch } from './useFetch'

export const RequestsPage = observer(() => {
  const page = useRef(new PageStore()).current
  useFetch(page)
  return (
    <PageLayout>
      <Toolbar>
        <ColMenu columns={page.columns} />
        <Search search={page.search} />
      </Toolbar>
      <Grid grid={page.grid} />
      <GridBottom>
        <Stack direction="row">
          <ExportRrewards exp={page.exp} />
        </Stack>
        <Pagination pagination={page.pagination} />
      </GridBottom>
    </PageLayout>
  )
})
