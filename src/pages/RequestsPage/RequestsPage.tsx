import { observer, Observer } from 'mobx-react-lite'
import { Stack } from '@material-ui/core'

import { useRequestsPage } from './useRequestPage'
import { Page } from './atoms'

import { Toolbar, Table, Pagination, ImportRewards } from 'components'

export const RequestsPage = observer(() => {
  const page = useRequestsPage()

  return (
    <Page template="auto 1fr auto">
      <Toolbar.Wrapper>
        <Toolbar.ColMenu columns={page.columns} />
        <Toolbar.Search search={page.search} />
      </Toolbar.Wrapper>
      <Observer>
        {() => (
          <Table
            columns={page.columns}
            data={page.data}
            loading={page.loading}
          />
        )}
      </Observer>
      <Stack
        px={1}
        borderTop={1}
        borderColor="divider"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ImportRewards />
        <Pagination pagination={page.pagi} />
      </Stack>
    </Page>
  )
})
