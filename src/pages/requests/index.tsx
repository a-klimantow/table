import { observer } from 'mobx-react-lite'
//
import { Pagination, usePagination } from 'components/pagination'
import { MenuColumns } from 'components/menu_columns'
import { Search, useSearch } from 'components/search'
import { Table, useTableHead, useTableBody } from 'components/table'
import { useQuery, useData, useFetchRequests } from './hooks'
import { Paper, Toolbar, Bottom } from './atoms'
import { columns } from './columns'
import { IRequestItem } from 'types'
import { useEffect } from 'react'

export const Requests = observer(() => {
  const data = useData()

  const search = useSearch()
  const pagination = usePagination()
  const query = useQuery(pagination, search.current)
  const head = useTableHead(columns)
  const body = useTableBody(data.items, columns)
  useFetchRequests(query, data)

  useEffect(() => {
    columns[0].renderCell = (item: IRequestItem) =>
      `${item.panel_name} ${item.country}`
  }, [])

  return (
    <Paper data-app-page>
      <Toolbar>
        <MenuColumns columns={columns} />
        <Search search={search} />
      </Toolbar>
      <Table head={head} body={body} />
      <Bottom>
        <Pagination pagination={pagination} count={data.count} />
      </Bottom>
    </Paper>
  )
})
