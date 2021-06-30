import { FC } from 'react'
import { Paper, styled } from '@material-ui/core'

import { DataGridProvider } from './DataGridProvider'

import { IDataGridProps } from './types'
import { Toolbar, Filters, Grid, Footer } from './components'

export const DataGrid: FC<IDataGridProps> = (props) => (
  <DataGridProvider {...props}>
    <Wrapper variant="outlined">
      <Toolbar />
      <Filters />
      <Grid />
      <Footer />
    </Wrapper>
  </DataGridProvider>
)

const Wrapper = styled(Paper)({
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  overflow: 'hidden',
  maxHeight: 'calc(100vh - 120px)',
})
