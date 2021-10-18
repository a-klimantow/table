import { PageType as P, ModuleType as M } from '../types'

export const moduleNames = new Map<M, string>([
  ['administration', 'Администрирование'],
  ['panels', 'Панели'],
  ['projects', 'Проекты'],
  ['rewards', 'Вознаграждения'],
  ['user', 'Пользователь'],
])

export const pageNames = new Map<P, string>([
  ['accruals', 'Начисления'],
  ['login', 'Вход'],
  ['logout', 'Выход'],
  ['reports', 'Отчеты'],
  ['requests', 'Заявки'],
  ['user_settings', 'Настройки'],
])

export const submenuNames = new Map<M, string>([['rewards', 'Выплаты']])

type Payments = 'yookassa' | 'webmoney'

export const paymentNames = new Map<Payments, string>([
  ['yookassa', 'ЮKassa'],
  ['webmoney', 'WebMoney'],
])
