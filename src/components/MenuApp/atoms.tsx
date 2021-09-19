import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  MenuItem,
  MenuItemProps,
} from '@material-ui/core'

import { Icon } from 'components'
import { MenuAppProps } from './MenuApp'

export const Provider = observer<MenuAppProps>(({ children, type }) => (
  <ThemeProvider
    theme={createTheme({
      components: {
        MuiButton: {
          defaultProps: {
            startIcon: type === 'home' && <Icon type={type} />,
            endIcon: type !== 'home' && <Icon type="dropdown" />,
            color: 'inherit',
            sx: {
              textTransform: 'unset',
              fontWeight: 400,
            },
          },
        },
        MuiMenu: {
          defaultProps: {},
        },
      },
    })}
  >
    {children}
  </ThemeProvider>
))

type ItemProps = MenuItemProps

export const Item = observer<{ item: ItemProps }>(({ item }) => {
  const { location, push } = useHistory()

  const isSelect = location.pathname.includes(item.key as string)
  return (
    <MenuItem
      {...item}
      onClick={() => push(`/${item.key}/`)}
      selected={isSelect}
    />
  )
})
