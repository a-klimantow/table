import { observer } from 'mobx-react-lite'
import { ListItemButtonProps, Typography } from '@material-ui/core'
import { Menu as OpenIcon, Close as CloseIcon } from '@material-ui/icons'

import { ItemStyled } from './styled'

interface ModuleMenuToggleProps extends ListItemButtonProps {
  isOpen: boolean
}

export const ModuleMenuToggle = observer<ModuleMenuToggleProps>(({ children, onClick, isOpen }) => (
  <ItemStyled onClick={onClick}>
    {isOpen ? <CloseIcon /> : <OpenIcon />}
    <Typography variant="button">{children}</Typography>
  </ItemStyled>
))
