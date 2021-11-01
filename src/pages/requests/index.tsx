import { observer } from 'mobx-react-lite'

import { Table, useTable, ICol } from 'components/table'
import { useFetch } from './fetch'

const columns: ICol[] = [
  {
    key: 'panel_name',
    name: 'Наименование панели',
    quickFilter: true,
    type: 'string',
  },
  {
    key: 'country',
    name: 'Страна',
    quickFilter: true,
    type: 'string',
  },
  {
    key: 'old_requests',
    name: 'Старше 3 дней',
    type: 'number',
  },
  {
    key: 'old_requests_sum',
    name: 'Сумма (старше 3 дней)',
    type: 'number',
  },
  {
    key: 'all_requests',
    name: 'На рассмотрении',
    type: 'number',
  },
  {
    key: 'all_requests_sum',
    name: 'Сумма (на рассмотрении)',
    type: 'number',
  },
  {
    key: 'accept_requests',
    name: 'В обработке',
    type: 'number',
  },
]

export const Requests = observer(() => {
  const table = useTable(columns)
  useFetch(table)
  return <Table data-app-page table={table} />
})
