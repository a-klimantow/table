import { Layout, Table, IColumn } from 'components'

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
  { name: 'Сумма (старше 3 дней)', field: 'reqOldSum' },
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
    <Layout.Page>
      <Table data={data} columns={columns} showCheckbox onCheckedChange={console.log} />
    </Layout.Page>
  )
}
