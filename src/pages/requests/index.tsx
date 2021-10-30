import { observer } from 'mobx-react-lite'

import { Table, useTable } from 'components/table'

export const Requests = observer(() => {
  const table = useTable()
  // return null
  return <Table table={table} data-app-page />
})
