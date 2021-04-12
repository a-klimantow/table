const userMenu = [
  ['Настройка почты', '/settings'],
  ['Отрывать при входе', '/'],
  ['Выход', '/logout'],
]

export const useUserMenu = (): { userMenu: string[][]; userName: string } => {
  return {
    userMenu,
    userName: 'Admin',
  }
}
