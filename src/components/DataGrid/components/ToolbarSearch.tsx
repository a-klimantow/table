import { FC } from 'react'
import { Paper, InputBase, InputBaseProps, styled } from '@material-ui/core'
import { Search as Icon } from '@material-ui/icons'

import { useDataGridContext } from '../hooks'

export const ToolbarSearch: FC<InputBaseProps> = () => {
  const { search, handleChangeSearch } = useDataGridContext()

  return (
    <SearchStaled variant="outlined">
      <Icon fontSize="small" color="action" />
      <InputBase placeholder="Поиск..." value={search} onChange={handleChangeSearch} />
    </SearchStaled>
  )
}
const SearchStaled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),

  '&:focus-within': {
    borderColor: theme.palette.primary.main,
  },
}))
