import { observer } from 'mobx-react-lite'
import { SwipeableDrawer } from '@material-ui/core'

import {
  PageLayout,
  Table,
  TableWrapper,
  TableSection,
  UploadButton,
  TableColMenu,
  PaymentRequestExport,
  FilterLevelOne,
  Pagination,
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
          <FilterLevelOne {...store.flev1.props} />
<<<<<<< HEAD
=======
          {/* <QuickFilter
            value={store.quickFilter}
            onChange={(e) => store.changeQuickFilter(e.target.value)}
            showCancel={store.showCancelQF}
            onCancel={() => store.changeQuickFilter('')}
          /> */}
>>>>>>> a2e6a543b739fbb793c2c9cf2bc4b2d3c64de653
        </TableSection>

        <Table
          columns={store.currentColumns}
          rows={store.rows}
          loading={store.loading}
        />

        <TableSection>
          <UploadButton type="export" onClick={() => exp.openModal()} />
          <UploadButton type="import" />
          <Pagination {...store.pagination.props} />
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
