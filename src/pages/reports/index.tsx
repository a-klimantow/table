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
    key: 'processed_date',
    name: 'Дата',
    type: 'date',
    formated(date) {
      return new Date(date as string).toLocaleDateString()
    },
  },
  {
    key: 'payment_type_name',
    name: 'Тип выплат',
    type: 'string',
  },
  {
    key: 'total_success_requests',
    name: 'Количество выплат',
    type: 'number',
  },
  {
    key: 'amount',
    name: 'Сумма',
    type: 'number',
    formated(sum) {
      return Number(sum).toLocaleString()
    },
  },
  {
    key: 'currency_name',
    name: 'Валюта',
    type: 'string',
  },
]

export const Reports = observer(() => {
  const table = useTable(columns, 'reports')
  useFetch(table)
  return <Table isPage table={table} onExportClick={() => null} />
})
