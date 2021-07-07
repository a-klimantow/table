import { observer } from 'mobx-react-lite'
import { styled } from '@material-ui/core'

import { useGridStore } from '../hooks'
import { Search } from './Search'
import { MenuColumns } from './MenuColumns'
import { MenuFilters } from './MenuFilters'

export const Toolbar = observer(() => {
  const { isActionToolbar } = useGridStore()
  return (
    <ToolbarStyled data-action={isActionToolbar}>
      <MenuColumns />
      <MenuFilters />
      <Search />
    </ToolbarStyled>
  )
})

const ToolbarStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey['300'],
  minHeight: theme.spacing(7),
  padding: theme.spacing(0, 0.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),

  '&[data-action=true]': {
    background: theme.palette.action.focus,
  },
}))
