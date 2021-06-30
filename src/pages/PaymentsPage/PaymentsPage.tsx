import { Layout, DataGrid } from 'components'

export const PaymentsPage = () => {
  return (
    <Layout.Page>
      <DataGrid
        columns={[
          { name: 'test', field: 'test' },
          { name: 'test 1', field: 'test1' },
          { name: 'test 2', field: 'test2' },
          { name: 'test 3', field: 'test3' },
          { name: 'test 4', field: 'test4' },
          { name: 'test 5', field: 'test5' },
        ]}
        data={Array(10).fill({ test: 0, test1: 1, test2: 2, test3: 3, test4: 4, test5: 5 })}
      />
    </Layout.Page>
  )
}
