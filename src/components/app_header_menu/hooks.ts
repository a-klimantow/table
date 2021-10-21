import * as React from 'react'
import * as Mui from '@mui/material'
import { useHistory, useRouteMatch } from 'react-router-dom'
//
import { moduleNames, pageNames } from 'assets'
import { useUser, useRouter } from 'hooks'
import { ModuleType as M, PageType as P } from 'types'

// menu

export const useMenu = () => {
  const [anchor, setAnchor] = React.useState<null | Element>(null)
  return {
    button: {
      onClick: (e) => setAnchor(e.currentTarget),
    } as Mui.ButtonProps,
    menu: {
      open: Boolean(anchor),
      anchorEl: anchor,
      onClick: () => setAnchor(null),
    } as Mui.MenuProps,
  }
}

// button names

export const useUserButtonName = () => useUser().name || 'Пользователь'

export const useModuleButtonName = () => {
  const module = useRouteMatch<{ module: M }>('/:module')?.params.module
  return module ? moduleNames.get(module) : 'Меню'
}

// menu items

const moduleItems: M[] = ['projects', 'panels', 'rewards', 'administration']

export const useModuleMenuItems = () =>
  React.useMemo(
    () =>
      moduleItems.map((i) => ({
        name: moduleNames.get(i),
        link: `/${i}/`,
      })),
    []
  )

const userItems: P[] = ['user_settings', 'logout']

export const useUserMenuItems = () =>
  React.useMemo(
    () =>
      userItems.map((i) => ({
        name: pageNames.get(i),
        link: `/user/${i}/`,
      })),
    []
  )

// item

export type ItemType =
  | ReturnType<typeof useModuleMenuItems>[number]
  | ReturnType<typeof useUserMenuItems>[number]

export const useItem = (item: ItemType): Mui.MenuItemProps => {
  const router = useRouter()
  const { push, location } = useHistory()
  const { pathname } = location

  const prommMod = router.prommited.modules
  const isDisabled = !prommMod.some((m) => item.link.includes(m))

  const isSelected = pathname.includes(item.link)

  return {
    children: item.name,
    onClick: () => push(item.link),
    selected: isSelected,
    disabled: item.name === 'Выход' ? false : isDisabled,
  }
}
