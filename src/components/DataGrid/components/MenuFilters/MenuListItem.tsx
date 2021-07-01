import { observer } from 'mobx-react-lite'
import { styled, IconButton, TextField } from '@material-ui/core'
import { Close as Icon } from '@material-ui/icons'

import { useGridStore } from '../../hooks'

interface Props {
  index: number
}

export const MenuListItem = observer<Props>(({ index }) => {
  const store = useGridStore()
  const { name, condition, value } = store.filters[index]
  return (
    <ListItemStyled>
      <IconButton size="small" onClick={() => store.deleteFilter(index)}>
        <Icon fontSize="small" />
      </IconButton>
      <div>
        <TextField
          label="Колонка"
          value={name}
          onChange={(e) => store.changeFilter(index, 'name', e.currentTarget.value)}
        />
        <TextField
          label="Условие"
          value={condition}
          onChange={(e) => store.changeFilter(index, 'condition', e.currentTarget.value)}
        />
        <TextField
          label="Значение"
          value={value}
          onChange={(e) => store.changeFilter(index, 'value', e.currentTarget.value)}
        />
      </div>
    </ListItemStyled>
  )
})

const ListItemStyled = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}))
