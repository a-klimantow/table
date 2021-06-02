import { Paper } from '@material-ui/core'
import { Layout, DataGrid } from 'components'

export const ProfitPage = () => (
  <Layout.Page>
    <Paper style={{ overflow: 'hidden' }}>
      <div>toolbar</div>
      <DataGrid />
    </Paper>
  </Layout.Page>
)
