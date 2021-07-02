import { Layout, DataGrid } from 'components'

export const PaymentsPage = () => {
  return (
    <Layout.Page>
      <DataGrid
        columns={[
          { name: 'test очень длинное название колонки', field: 'test' },
          { name: 'test 1 очень длинное название колонки', field: 'test1' },
          { name: 'test 2 очень длинное название колонки', field: 'test2' },
          { name: 'test 3 очень длинное название колонки', field: 'test3' },
          { name: 'test 4 очень длинное название колонки', field: 'test4' },
          { name: 'test 5 очень длинное название колонки', field: 'test5' },
          { name: 'test 6 очень длинное название колонки', field: 'test6' },
          { name: 'test 7 очень длинное название колонки', field: 'test7' },
        ]}
        data={Array(10).fill({ test: 0, test1: 1, test2: 2, test3: 3, test4: 4, test5: 5 })}
      />
    </Layout.Page>
  )
}
