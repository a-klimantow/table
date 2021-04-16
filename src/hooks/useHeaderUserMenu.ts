import { IHeaderMenuItem } from 'components'

export const useHeaderUserMenu = (): IHeaderMenuItem[] => [
  { name: 'Настройки', to: '/settings' },
  { name: 'Выход', to: '/logout' },
]
