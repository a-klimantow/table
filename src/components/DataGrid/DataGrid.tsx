import { FC } from 'react'

import { Paper, styled } from '@material-ui/core'

import { IDataGridProps } from './types'
import { Toolbar, AppliedFilters, Grid, Footer } from './components'
import { GridContext } from './context'
import { GridStore } from './store'

export const DataGrid: FC<IDataGridProps> = ({ columns }) => {
  return (
    <GridContext.Provider value={new GridStore(columns)}>
      <Wrapper variant="outlined">
        <Toolbar />
        <AppliedFilters />
        <Grid />
        <Footer />
      </Wrapper>
    </GridContext.Provider>
  )
}

const Wrapper = styled(Paper)({
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  overflow: 'hidden',
  maxHeight: 'calc(100vh - 120px)',
})
