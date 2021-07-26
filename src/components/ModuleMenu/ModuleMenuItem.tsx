import { observer } from 'mobx-react-lite'
import { Typography } from '@material-ui/core'

import { ItemStyled } from './styled'
import { ModuleMenuItemProps } from './types'

export const ModuleMenuItem = observer<ModuleMenuItemProps>(
  ({ icon: Icon, children, name, onClick }) => (
    <ItemStyled onClick={onClick}>
      {Icon && <Icon />}
      <Typography variant="button">{name}</Typography>
      {children}
    </ItemStyled>
  )
)
