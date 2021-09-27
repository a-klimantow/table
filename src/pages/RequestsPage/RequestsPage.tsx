import { useRef } from 'react'
import { observer } from 'mobx-react-lite'

import {
  PageLayout,
  Toolbar,
  ColMenu,
  Search,
  Pagination,
  Grid,
  GridBottom,
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
        <div />
        <Pagination pagination={page.pagination} />
      </GridBottom>
    </PageLayout>
  )
})
