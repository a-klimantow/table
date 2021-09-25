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
      <Stack
        display="grid"
        gridTemplateColumns="1fr auto"
        alignItems="center"
        gap={1}
        pl={1}
        borderTop={1}
        borderColor="divider"
      >
        <div />
        <Pagination pagination={page.pagination} />
      </Stack>
    </PageLayout>
  )
})
