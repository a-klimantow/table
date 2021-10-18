import * as Mui from '@mui/icons-material'

export const mui_icons = {
  close: Mui.Close,
  col_menu: Mui.ViewColumn,
  dropdown: Mui.ArrowDropDown,
  error: Mui.ErrorOutline,
  eye_off: Mui.VisibilityOff,
  eye_on: Mui.Visibility,
  export: Mui.FileUpload,
  filter: Mui.FilterList,
  home: Mui.HomeOutlined,
  import: Mui.FileDownload,
  menu: Mui.Menu,
  minus: Mui.IndeterminateCheckBoxOutlined,
  plus: Mui.AddBoxOutlined,
  search: Mui.Search,
  search_clear: Mui.Cancel,
  success: Mui.CheckCircleOutlineOutlined,
  warning: Mui.WarningOutlined,
}

export type IconType = keyof typeof mui_icons
