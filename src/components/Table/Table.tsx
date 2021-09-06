import { observer } from 'mobx-react-lite'

import { Table as MuiTable, TableHead, TableBody } from '@material-ui/core'

import { ICol } from 'types'
import { Provider, HeadList, Loader } from './atoms'

export interface TableProps {
  table: {
    head: ICol[]
    body: null | { [key: string]: unknown }[]
    loading?: boolean
  }
}

export const Table = observer<TableProps>((props) => {
  const table = useTable(props)
  return (
    <Provider>
      <Loader show={table.showLoadder} />
      <MuiTable>
        <TableHead>
          <HeadList items={table.head} />
        </TableHead>
        <TableBody></TableBody>
      </MuiTable>
    </Provider>
  )
})

function useTable({ table }: TableProps) {
  return {
    head: table.head,
    showLoadder: Boolean(table.loading),
  }
}
