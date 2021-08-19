import { observer } from 'mobx-react-lite'

import { PageLayout, Search, Table, TableWrapper, UploadButton, TableColMenu } from 'components'
import { useBidsStore } from './useBidsStore'
import { useGetBids } from './useGetBids'

export const BidsPage = observer(() => {
  const store = useBidsStore()
  useGetBids(store)
  return (
    <PageLayout>
      <TableWrapper
        toolbar={
          <>
            <TableColMenu columns={store.columns} />
            <Search />
          </>
        }
        bottom={
          <>
            <UploadButton type="export" />
            <UploadButton type="import" />
          </>
        }
        pagination={store.pagination}
      >
        <Table columns={store.columns} rows={store.rows} loading={store.loading} />
      </TableWrapper>
    </PageLayout>
  )
})
