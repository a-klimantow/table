import { ButtonProps } from '@material-ui/core'

export interface IHeaderMenu {
  endIcon?: ButtonProps['endIcon']
  startIcon?: ButtonProps['startIcon']
  name: string
  data: string[][]
}
