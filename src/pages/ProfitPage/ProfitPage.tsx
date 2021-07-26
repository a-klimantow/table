import {
  Table,
  TableToolbar,
  TableWrapper,
  // TableActiveFilters,
  TableFooter,
  IColumn,
} from 'components'

import { Button } from '@material-ui/core'

const data = new Array(10).fill({
  name: 'Экспертное мнение',
  req: 256,
  reqSum: 4528,
  reqAll: 544,
  reqOld: 544,
  reqOldSum: 5686,
  inProcessing: 256,
})

const columns: IColumn[] = [
  { name: 'Название панели', field: 'name' },
  { name: 'Старше 3 дней', field: 'reqOld' },
  { name: 'Сумма (старше 3 дней)', field: 'reqOldSum', align: 'right' },
  { name: 'Всего заявок', field: 'reqAll' },
  { name: 'Сумма (всего заяв ок)', field: 'reqSum' },
  { name: 'В обработке', field: 'name' },
  { name: 'В обработке1', field: 'name' },
  { name: 'В обработке2', field: 'name' },
  { name: 'В обработке3', field: 'name' },
  { name: 'В обработке4', field: 'name' },
  { name: 'В обработке5', field: 'name' },
  { name: 'В обработке6', field: 'name' },
  { name: 'В обработке7', field: 'name' },
]

export const ProfitPage = () => {
  return (
    <>
      <TableWrapper>
        <TableToolbar />
        {/* <TableActiveFilters filters={Array(20).fill('thlleo = tu')} /> */}
        <Table data={data} columns={columns} onCheckedChange={console.log} showCheckbox />
        <TableFooter>
          <Button color="primary">Экспорт</Button>
          <Button color="primary">Импорт</Button>
        </TableFooter>
      </TableWrapper>
    </>
  )
}
