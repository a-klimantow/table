import { observer } from 'mobx-react-lite'
import { styled, Collapse } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { Icon } from './Icon'
import { FilterList } from './FilterList'

export const AppliedFilters = observer(() => {
  const store = useGridStore()

  return (
    <Collapse in={Boolean(store.renderFilter.length)}>
      <Wrapper>
        <Icon />
        <FilterList />
      </Wrapper>
    </Collapse>
  )
})

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  gap: theme.spacing(2),
}))
