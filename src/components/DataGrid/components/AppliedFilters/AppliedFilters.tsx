import { observer } from 'mobx-react-lite'
import { styled } from '@material-ui/core'

import { useGridStore } from '../../hooks'
import { Icon } from './Icon'
import { FilterList } from './FilterList'

export const AppliedFilters = observer(() => {
  const store = useGridStore()
  if (!store.renderFilter.length) return <div />

  return (
    <Wrapper>
      <Icon />
      <FilterList />
    </Wrapper>
  )
})

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  gap: theme.spacing(2),
}))
