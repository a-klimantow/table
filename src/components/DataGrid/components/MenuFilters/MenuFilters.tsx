import { Box, Button, IconButton, Popover } from '@material-ui/core'
import { FilterList as FilterIcon, Add as PlusIcon } from '@material-ui/icons'

import { useGridStore, usePopover } from '../../hooks'
import { MenuList } from './MenuList'

export const MenuFilters = () => {
  const popover = usePopover()
  const store = useGridStore()
  return (
    <>
      <IconButton onClick={popover.open}>
        <FilterIcon />
      </IconButton>
      <Popover {...popover.props}>
        <Box m={1} mt={2}>
          <MenuList />
          <Button startIcon={<PlusIcon />} color="primary" onClick={() => store.addFilter()}>
            Добавить
          </Button>
        </Box>
      </Popover>
    </>
  )
}
