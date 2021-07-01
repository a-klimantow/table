import { observer } from 'mobx-react-lite'
import { ListItemText, Switch, SwitchProps, styled } from '@material-ui/core'

type Props = {
  name: string
  hidden: boolean
  onChange: SwitchProps['onChange']
}

export const MenuListItem = observer<Props>(({ hidden, onChange, name }) => (
  <ListItemStyled>
    <Switch size="small" color="primary" checked={!hidden} onChange={onChange} />
    <ListItemText primary={name} />
  </ListItemStyled>
))

export const ListItemStyled = styled('li')({
  display: 'flex',
  alignItems: 'center',
})
