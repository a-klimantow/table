import { observer } from 'mobx-react-lite'
import { Chip, styled } from '@material-ui/core'

import { useGridStore } from '../../hooks'

export const FilterList = observer(() => {
  const store = useGridStore()
  return (
    <FilterListStyled>
      {store.renderFilter.map((filter, i) => (
        <Chip key={i} label={filter} size="small" onDelete={() => store.deleteFilter(i)} />
      ))}
    </FilterListStyled>
  )
})

const FilterListStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}))
