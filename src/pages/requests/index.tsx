import { observer } from 'mobx-react-lite'
//
import { Pagination, usePagination } from 'components/pagination'
import { MenuColumns } from 'components/menu_columns'
import { Search } from 'components/search'
import { Table, HeadCell } from 'components/table'
import { columns } from './columns'
import { useQuery, useData, useFetchRequests } from './hooks'
import { Paper, Toolbar, TableRow, Bottom } from './atoms'

export const Requests = observer(() => {
  const data = useData()
  const pagination = usePagination()
  const query = useQuery(pagination)
  useFetchRequests(query, data)
  return (
    <Paper data-app-page>
      <Toolbar>
        <MenuColumns columns={columns} />
        <Search />
      </Toolbar>
      <Table
        head={columns.map((col) => (
          <HeadCell key={col.key} col={col} />
        ))}
        body={data.items.map((item, i) => (
          <TableRow key={i} columns={columns} item={item} />
        ))}
      />
      <Bottom>
        <Pagination pagination={pagination} count={data.count} />
      </Bottom>
    </Paper>
  )
})
