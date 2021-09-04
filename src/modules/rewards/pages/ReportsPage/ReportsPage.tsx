import { useLocalObservable, observer } from 'mobx-react-lite'
import { PageLayout } from 'components'

import { TablePaper, TableToolbar } from './components/atoms'
import { Search } from './components/Search'
import { TableColMenu } from './components/TableColMenu'

function usePage() {
  const store = useLocalObservable(() => ({
    search: '',
    test: 1,

    changeSearch(s: string) {
      this.search = s
    },

    toString() {
      return JSON.stringify(this)
    },
  }))

  return store
}

export const ReportsPage = observer(() => {
  const page = usePage()
  console.log(page.toString())
  return (
    <PageLayout>
      <TablePaper>
        <TableToolbar>
          <TableColMenu />
          <Search
            search={page.search}
            onSearchChange={(s) => page.changeSearch(s)}
          />
        </TableToolbar>
      </TablePaper>
    </PageLayout>
  )
})
