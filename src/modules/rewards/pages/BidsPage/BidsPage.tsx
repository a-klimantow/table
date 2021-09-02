import { observer } from 'mobx-react-lite'
import { TablePagination, SwipeableDrawer } from '@material-ui/core'

import {
  PageLayout,
  Table,
  TableWrapper,
  TableSection,
  UploadButton,
  TableColMenu,
  QuickFilter,
  PaymentRequestExport,
} from 'components'

import { useExport } from '../../useExport'
import { useBidsPage } from './useBidsPage'

export const BidsPage = observer(() => {
  const store = useBidsPage()
  const exp = useExport()

  return (
    <PageLayout>
      <TableWrapper>
        <TableSection toolbar>
          <TableColMenu columns={store.colMenu} />
          <QuickFilter
            value={store.quickFilter}
            onChange={(e) => store.changeQuickFilter(e.target.value)}
            showCancel={store.showCancelQF}
            onCancel={() => store.changeQuickFilter('')}
          />
        </TableSection>

        <Table
          columns={store.currentColumns}
          rows={store.rows}
          loading={store.loading}
        />

        <TableSection>
          <UploadButton type="export" onClick={() => exp.openModal()} />
          <UploadButton type="import" />
          <TablePagination component="div" {...store.pagination.props} />
        </TableSection>
      </TableWrapper>
      <SwipeableDrawer
        anchor={'right'}
        open={exp.isOpen}
        onClose={() => exp.closeModal()}
        onOpen={() => exp.openModal()}
      >
        <PaymentRequestExport onClick={() => exp.closeModal()} />
      </SwipeableDrawer>
    </PageLayout>
  )
})
