import { PageType as P, ModuleType as M, IconType as Ic } from '../types'

type K = P | M | `${M}_submenu`

const names = new Map<K, string>([
  ['accruals', 'Начисления'],
  ['administration', 'Администрирование'],
  ['login', 'Вход'],
  ['logout', 'Выход'],
  ['reports', 'Отчеты'],
  ['requests', 'Заявки'],
  ['rewards', 'Вознаграждения'],
  ['rewards_submenu', 'Выплаты'],
  ['panels', 'Панели'],
  ['projects', 'Проекты'],
  ['user_settings', 'Настройки'],
] as const)

export const name = (key: K) => {
  if (!names.has(key)) console.error(key, 'не найдено')
  return names.get(key) ?? ''
}

// ----------------------- icons

const menuIcons = new Map<K, Ic>([
  ['accruals', 'plus'],
  ['rewards', 'minus'],
])

export const icon = (key: K) => {
  if (!menuIcons.has(key)) console.error(key, 'не найдено')
  return menuIcons.get(key) ?? null
}
