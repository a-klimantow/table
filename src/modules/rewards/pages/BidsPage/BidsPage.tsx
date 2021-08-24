import { observer } from 'mobx-react-lite'
import { TablePagination } from '@material-ui/core'

import {
  PageLayout,
  Table,
  Search,
  TableWrapper,
  TableSection,
  UploadButton,
  TableColMenu,
} from 'components'

import { useBidsPage } from './useBidsPage'

export const BidsPage = observer(() => {
  const store = useBidsPage()

  return (
    <PageLayout>
      <TableWrapper>
        <TableSection toolbar>
          <TableColMenu columns={store.colMenu} />
        </TableSection>

        <Table
          columns={store.currentColumns}
          rows={store.rows}
          loading={store.loading}
        />

        <TableSection>
          <UploadButton type="export" />
          <UploadButton type="import" />
          <TablePagination
            component="div"
            count={store.pagination.count}
            page={store.pagination.page}
            rowsPerPage={store.pagination.rowsPerPage}
            onPageChange={(_, page) => store.changePage(page)}
            onRowsPerPageChange={(e) => store.changePerPage(+e.target.value)}
          />
        </TableSection>
      </TableWrapper>
    </PageLayout>
  )
})
