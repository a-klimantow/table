import React from 'react'
import { observer } from 'mobx-react-lite'

import { useSuperagent } from 'hooks'
import {
  PageLayout,
  Table,
  Search,
  TableWrapper,
  TableSection,
  UploadButton,
  TableColMenu,
} from 'components'
import { IBidItem } from 'modules/rewards/types'

import { Store } from './store'

export const BidsPage = observer(() => {
  const [store] = React.useState(
    () =>
      new Store<IBidItem>(
        [
          {
            name: 'Наименование панели',
            key: 'panel_name',
            renderCell(item: IBidItem) {
              const { country: c, panel_name: n } = item
              return `${n} ${c}`
            },
          },
          { name: 'Старше 3 дней', key: 'old_requests' },
          { name: 'Сумма (старше 3 дней)', key: 'old_requests_sum' },
          { name: 'Всего заявок', key: 'all_requests' },
          { name: 'Сумма (всего заявок)', key: 'all_requests_sum' },
          { name: 'В обработке', key: 'accept_requests' },
        ],
        ['panel_name', 'country']
      )
  )
  console.log(store.query)
  const getData = useSuperagent('withdrawal' + store.query)

  React.useEffect(() => {
    getData
      .then((res) => store.successGet(res.body))
      .catch(console.log)
      .finally(() => store.final())
  }, [getData, store, store.query])

  return (
    <PageLayout>
      <TableWrapper>
        <TableSection toolbar>
          <TableColMenu columns={store.colMenu} />
          <Search
            quickFilter={store.quickFilter.value}
            changeQuickFilter={(v) => store.quickFilter.changeValue(v)}
          />
        </TableSection>

        <Table columns={store.cols} rows={store.rows} loading={store.loading} />

        <TableSection>
          <UploadButton type="export" />
          <UploadButton type="import" />
        </TableSection>
      </TableWrapper>
    </PageLayout>
  )
})
