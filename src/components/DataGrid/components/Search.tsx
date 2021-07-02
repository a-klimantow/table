import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Paper, InputBase, styled } from '@material-ui/core'
import { Search as Icon } from '@material-ui/icons'
import { useGridStore } from '../hooks'

export const Search: FC = observer(() => {
  const store = useGridStore()
  return (
    <SearchStaled variant="outlined">
      <Icon fontSize="small" color="action" />
      <InputBase
        placeholder="Поиск..."
        value={store.search}
        onChange={(e) => store.changeSearch(e.currentTarget.value)}
      />
    </SearchStaled>
  )
})

const SearchStaled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),

  '&:focus-within': {
    borderColor: theme.palette.primary.main,
  },
}))
