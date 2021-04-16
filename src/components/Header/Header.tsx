import { HomeOutlined as HomeIcon, ExpandMoreOutlined as ArrowIcon } from '@material-ui/icons'

import { useHeaderAppMenu, useHeaderUserMenu } from 'hooks'
import { HeaderWrap } from './styles'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
  const appMenu = useHeaderAppMenu()
  const userMenu = useHeaderUserMenu()
  return (
    <HeaderWrap>
      <HeaderMenu
        button={{
          startIcon: <HomeIcon />,
          children: 'Меню',
        }}
        data={appMenu}
      />
      <HeaderMenu
        button={{
          endIcon: <ArrowIcon />,
          children: 'User',
        }}
        data={userMenu}
      />
    </HeaderWrap>
  )
}
