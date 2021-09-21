import { Stack } from '@material-ui/core'

import { Toolbar, Table, Pagination } from 'components'
import { Page } from './atoms'
import { useAccrualsPage } from './useAccrualsPage'

export const AccrualsPage = () => {
  const page = useAccrualsPage()
  return (
    <Page template="auto 1fr auto">
      <Toolbar.Wrapper>
        <Toolbar.ColMenu columns={page.columns} />
        <Toolbar.Search search={page.search} />
      </Toolbar.Wrapper>
      <Table columns={page.columns} />
      <Stack px={1} borderTop={1} borderColor="divider">
        <Pagination pagination={page.pagi} />
      </Stack>
    </Page>
  )
}
