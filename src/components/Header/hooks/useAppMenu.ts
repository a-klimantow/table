import { useLocation } from 'react-router-dom'

const appMenu = [
  ['Проекты', '/projects'],
  ['Управление панелями', '/panels'],
  ['Вознаграждения', '/payments'],
  ['Администрирование', '/admin'],
]

interface IUseAppMenu {
  appMenu: string[][]
  appMenuName: string
}

export const useAppMenu = (): IUseAppMenu => {
  const { pathname } = useLocation()
  const [appMenuName = 'Меню'] = appMenu.find(([, path]) => pathname.startsWith(path)) ?? []

  return {
    appMenu,
    appMenuName,
  }
}
