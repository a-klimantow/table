import { observer } from 'mobx-react-lite'
import { Box, Switch, SwitchProps, Typography } from '@material-ui/core'

interface MenuItemProps extends Pick<SwitchProps, 'onChange' | 'checked'> {
  name: string
}

export const MenuItem = observer<MenuItemProps>(({ name, onChange, checked }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 1,
      pr: 1,
      alignItems: 'center',
    }}
  >
    <Switch size="small" checked={checked} onChange={onChange} />
    <Typography variant="body2">{name}</Typography>
  </Box>
))
