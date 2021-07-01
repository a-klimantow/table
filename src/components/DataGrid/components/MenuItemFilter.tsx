import { FC } from 'react'
import { IconButton, ListItem, TextField } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

import { IFilterItem } from '../types'

interface Props extends IFilterItem {
  a?: null
}

export const MenuItemFilter: FC<Props> = ({ name, condition, value }) => (
  <ListItem disableGutters>
    <IconButton size="small">
      <CloseIcon fontSize="small" />
    </IconButton>
    <div>
      <TextField label="Колонка" value={name}></TextField>
      <TextField label="Условие" value={condition} />
      <TextField label="Значение" value={value} />
    </div>
  </ListItem>
)
