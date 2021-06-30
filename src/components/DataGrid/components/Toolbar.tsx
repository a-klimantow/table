import { styled } from '@material-ui/core'

import { ToolbarColMenu } from './ToolbarColMenu'
import { ToolbarFilterMenu } from './ToolbarFilterMenu'
import { ToolbarSearch } from './ToolbarSearch'

export const Toolbar = () => {
  return (
    <ToolbarStyled>
      <ToolbarColMenu />
      <ToolbarFilterMenu />
      <ToolbarSearch />
    </ToolbarStyled>
  )
}

const ToolbarStyled = styled('div')(({ theme }) => ({
  background: theme.palette.grey['300'],
  minHeight: theme.spacing(7),
  padding: theme.spacing(0, 0.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),

  '&[data-action=true]': {
    background: theme.palette.action.focus,
  },
}))
