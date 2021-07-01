import { FC } from 'react'
import { MenuItem } from '@material-ui/core'

export const MenuItemOption: FC<{ option: string }> = ({ option }) => (
  <MenuItem value={option}>{option}</MenuItem>
)
