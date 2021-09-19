import { FC, useMemo, memo, forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import {
  IconButton,
  Button,
  Stack,
  Typography,
  Switch,
  createTheme,
  ThemeProvider,
} from '@material-ui/core'

import { Icon } from 'components'
// import { ColMenuProps } from './ColMenu'

// export const Provider: FC = ({ children }) => {
//   const theme = useMemo(
//     () =>
//       createTheme({
//         components: {
//           MuiPopover: {
//             defaultProps: {
//               anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
//             },
//           },

//           MuiSwitch: {
//             defaultProps: {
//               size: 'small',
//             },
//           },

//           MuiButton: {
//             defaultProps: {
//               size: 'small',
//             },
//           },
//         },
//       }),
//     []
//   )
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
// }

// export const MenuButton = forwardRef<HTMLButtonElement, { click(): void }>(
//   ({ click }, ref) => (
//     <IconButton ref={ref} onClick={click}>
//       <Icon type="col_menu" />
//     </IconButton>
//   )
// )

// interface MenuItemProps {
//   item: ColMenuProps['menu']['items'][number]
//   change(): void
// }

// export const MenuItem = observer<MenuItemProps>(({ item, change }) => (
//   <Stack direction="row" gap={1}>
//     <Switch checked={!item.hidden} onChange={change} />
//     <Typography>{item.name}</Typography>
//   </Stack>
// ))

// export const Buttons = memo<{ onHidden(): void; onShow(): void }>((props) => (
//   <Stack direction="row" justifyContent="space-between" gap={1} mt={1}>
//     <Button onClick={props.onHidden}>скрыть все</Button>
//     <Button onClick={props.onShow}>показать все</Button>
//   </Stack>
// ))
