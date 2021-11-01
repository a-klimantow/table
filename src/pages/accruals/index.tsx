import { observer } from 'mobx-react-lite'

import { dateFormate, numberFormate } from 'utils'
import { Table, useTable, ICol } from 'components/table'
import { useFetch } from './fetch'

const columns: ICol[] = [
  {
    key: 'file/file_name',
    name: 'Файл',
    quickFilter: true,
    type: 'string',
  },
  {
    key: 'author_id',
    name: 'ID пользователя',
    quickFilter: true,
    type: 'number',
  },
  {
    key: 'created',
    name: 'Дата и время загрузки',
    type: 'date',
    formated: dateFormate,
  },
  {
    key: 'amount',
    name: 'Сумма',
    type: 'number',
    formated: numberFormate,
    sortable: false,
  },
]

export const Accruals = observer(() => {
  const table = useTable(columns, 'accruals')
  useFetch(table)
  return <Table isPage table={table} onImportClick={() => null} />
})
