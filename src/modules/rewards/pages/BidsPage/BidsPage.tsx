import { observer } from 'mobx-react-lite'

import {
  PageLayout,
  Search,
  Table,
  TableWrapper,
  TableSection,
  UploadButton,
  TableColMenu,
} from 'components'
import { useBidsStore } from './useBidsStore'
import { useGetBids } from './useGetBids'

export const BidsPage = observer(() => {
  const store = useBidsStore()
  useGetBids(store)
  return (
    <PageLayout>
      <TableWrapper>
        <TableSection toolbar>
          <TableColMenu columns={store.columns} />
          <Search
            quickFilter={store.quickFilter}
            changeQuickFilter={(qf) => store.changeQuickFilter(qf)}
          />
        </TableSection>

        <Table columns={store.columns} rows={store.rows} loading={store.loading} />

        <TableSection>
          <UploadButton type="export" />
          <UploadButton type="import" />
        </TableSection>
      </TableWrapper>
    </PageLayout>
  )
})
