import {
  Box,
  Button,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemText,
  Switch,
  styled,
} from '@material-ui/core'
import { ViewWeek as ColIcon, DragIndicator as DragIcon } from '@material-ui/icons'

import { useDataGridContext, usePopover } from '../hooks'

export const ToolbarColMenu = () => {
  const { columns, hiddenFields, handleChangeHidden, handleChangeHiddenAll } = useDataGridContext()
  const popover = usePopover()

  return (
    <>
      <IconButton onClick={popover.open}>
        <ColIcon />
      </IconButton>
      <Popover {...popover.props}>
        <ListStyled disablePadding>
          {columns.map(({ name, field }, i) => (
            <ListItem key={i} disableGutters>
              <Switch
                size="small"
                color="primary"
                checked={!hiddenFields.includes(field)}
                onChange={handleChangeHidden(field)}
              />
              <ListItemText primary={name} />
              <DragIcon />
            </ListItem>
          ))}
        </ListStyled>
        <Box m={1} display="flex" justifyContent="space-between">
          <Button size="small" color="primary" onClick={handleChangeHiddenAll(false)}>
            Показать все
          </Button>
          <Button size="small" color="primary" onClick={handleChangeHiddenAll(true)}>
            Скрыть все
          </Button>
        </Box>
      </Popover>
    </>
  )
}

const ListStyled = styled(List)(({ theme }) => ({
  minWidth: 300,

  '& li': {
    padding: theme.spacing(0, 1),
    display: 'flex',
    gap: theme.spacing(1),
  },

  '& svg': {
    color: theme.palette.action.active,

    '&:hover': {
      color: 'initial',
      cursor: 'grab',
    },
  },
}))
