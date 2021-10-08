import * as Mui from '@material-ui/icons'

export const mui_icons = {
  close: Mui.Close,
  col_menu: Mui.ViewColumn,
  dropdown: Mui.ArrowDropDown,
  error: Mui.ErrorOutline,
  eye_off: Mui.VisibilityOff,
  eye_on: Mui.Visibility,
  filter: Mui.FilterList,
  home: Mui.HomeOutlined,
  menu: Mui.Menu,
  minus: Mui.IndeterminateCheckBoxOutlined,
  plus: Mui.AddBoxOutlined,
  search: Mui.Search,
  search_clear: Mui.Cancel,
  success: Mui.CheckCircleOutlineOutlined,
  warning: Mui.WarningOutlined,
}

export type IconType = keyof typeof mui_icons