import { FC } from 'react'
import { Divider } from '@material-ui/core'
import { HomeOutlined, ExpandMore } from '@material-ui/icons'

import { HeaderMenu } from './HederMenu'
import { useAppMenu, useUserMenu, useStylesHeader } from './hooks'

export const Header: FC = () => {
  const s = useStylesHeader()
  const { appMenu, appMenuName } = useAppMenu()
  const { userMenu, userName } = useUserMenu()
  return (
    <>
      <header className={s.root}>
        <HeaderMenu name={appMenuName} data={appMenu} startIcon={<HomeOutlined />} />
        <HeaderMenu name={userName} data={userMenu} endIcon={<ExpandMore />} />
      </header>
      <Divider />
    </>
  )
}
