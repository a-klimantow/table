import { memo } from 'react'

import {
  PageLayout,
  ColMenu,
  Search,
  TableContainer,
  TableSection,
  Table,
  Pagination,
} from 'components'

import { useReportPage } from './useReportPage'

export const ReportsPage = memo(() => {
  const page = useReportPage()
  return (
    <PageLayout>
      <TableContainer>
        <TableSection section="toolbar">
          <ColMenu menu={page.colMenu} />
          <Search search={page.search} />
        </TableSection>
        <TableSection section="table">
          <Table table={page.table} />
        </TableSection>
        <TableSection section="bottom">
          <Pagination pagination={page.pagination} />
        </TableSection>
      </TableContainer>
    </PageLayout>
  )
})
