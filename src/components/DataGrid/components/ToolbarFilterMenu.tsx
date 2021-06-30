import {
  Box,
  Button,
  IconButton,
  Popover,
  TextField,
  List,
  ListItem,
  MenuItem,
  Select,
  styled,
} from '@material-ui/core'
import { FilterList as FilterIcon, Close as CloseIcon, Add as PlusIcon } from '@material-ui/icons'

import { usePopover, useDataGridContext } from '../hooks'

export const ToolbarFilterMenu = () => {
  const popover = usePopover()
  const { columns } = useDataGridContext()

  return (
    <>
      <IconButton onClick={popover.open}>
        <FilterIcon />
      </IconButton>
      <Popover {...popover.props}>
        <ListStyled disablePadding>
          <ListItem disableGutters>
            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
            <div>
              <Select label="Колонка" defaultValue={columns[0].name}>
                {columns.map(({ name }) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <TextField label="Условие" />
              <TextField label="Значение" />
            </div>
          </ListItem>
        </ListStyled>
        <Box m={1}>
          <Button startIcon={<PlusIcon />} color="primary">
            Добавить
          </Button>
        </Box>
      </Popover>
    </>
  )
}

const ListStyled = styled(List)(({ theme }) => ({
  margin: theme.spacing(1),
  '& li': {
    display: 'flex',
    alignItems: 'flex-end',
    gap: theme.spacing(1),
  },
}))
