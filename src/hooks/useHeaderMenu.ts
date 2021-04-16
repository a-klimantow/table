import { IHeaderMenuItem } from 'components'

export const useHeaderAppMenu = (): IHeaderMenuItem[] => [
  { name: 'Управление панелями', to: '/panels' },
  { name: 'Вознаграждения', to: '/rewards' },
  { name: 'Администрирование', to: '/users' },
]
