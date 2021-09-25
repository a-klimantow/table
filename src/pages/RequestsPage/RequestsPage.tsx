import { observer } from 'mobx-react-lite'

import { PageLayout, Toolbar, ColMenu } from 'components'
import { useRequestsPage } from './useRequestPage'

export const RequestsPage = observer(() => {
  const page = useRequestsPage()
  return (
    <PageLayout>
      <Toolbar>
        <ColMenu columns={page.columns} />
      </Toolbar>
    </PageLayout>
  )
})
