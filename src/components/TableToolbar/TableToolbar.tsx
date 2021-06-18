import { FC } from 'react'
import { styled, IconButton, OutlinedInput } from '@material-ui/core'
import {
  ViewWeek as ColsIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
} from '@material-ui/icons'

export const TableToolbar: FC = () => (
  <ToolbarStyled>
    <IconButton>
      <ColsIcon />
    </IconButton>
    <IconButton>
      <FilterIcon />
    </IconButton>
    <OutlinedInputStyled startAdornment={<SearchIcon color="action" />} placeholder="Поиск..." />
  </ToolbarStyled>
)

const ToolbarStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.75, 1),
  backgroundColor: theme.palette.grey['300'],
}))

const OutlinedInputStyled = styled(OutlinedInput)(({ theme }) => ({
  background: theme.palette.background.paper,
  maxHeight: 40,
  fontSize: 12,

  '& svg': {
    marginRight: theme.spacing(1),
  },
}))
