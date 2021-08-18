import { observer } from 'mobx-react-lite'

import { PageLayout, Search, Table, TableWrapper, UploadButton } from 'components'

export const ProfitPage = observer(() => {
  return (
    <PageLayout>
      <TableWrapper toolbar={<Search />} bottom={<UploadButton type="import" />}>
        <Table columns={[]} rows={[]} />
      </TableWrapper>
    </PageLayout>
  )
})
