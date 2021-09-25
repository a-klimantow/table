import { observer } from 'mobx-react-lite'

import { PageLayout, Toolbar, ColMenu, Search } from 'components'
import { useRequestsPage } from './useRequestPage'

export const RequestsPage = observer(() => {
  const page = useRequestsPage()
  return (
    <PageLayout>
      <Toolbar>
        <ColMenu columns={page.columns} />
        <Search search={page.search} />
      </Toolbar>
    </PageLayout>
  )
})
