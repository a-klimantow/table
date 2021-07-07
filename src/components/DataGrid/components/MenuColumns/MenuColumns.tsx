import { IconButton, Popover, Box } from '@material-ui/core'
import { ViewWeek as ColIcon } from '@material-ui/icons'

import { usePopover } from '../../hooks'
import { MenuList } from './MenuList'
import { Buttons } from './Buttons'

export const MenuColumns = () => {
  const popover = usePopover()
  return (
    <>
      <IconButton onClick={popover.open}>
        <ColIcon />
      </IconButton>
      <Popover {...popover.props}>
        <Box m={1} minWidth={300}>
          <MenuList />
          <Buttons />
        </Box>
      </Popover>
    </>
  )
}
