import { CheckboxProps } from '@material-ui/core'

interface IGridCol {
  field: string
  name: string
  width: number
}

export interface IGridProps {
  columns?: IGridCol[]
}

export interface ICheckboxCellProps extends CheckboxProps {
  head?: boolean | null
  cell?: boolean | null
}
