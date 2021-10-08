import { PageType, ModuleType } from '../types'

type K = PageType | ModuleType

export const names = new Map<K, string>()

// pages
names.set('accruals', '')
names.set('login', 'Вход')
names.set('logout', 'Выход')
names.set('reports', '')
names.set('requests', '')
names.set('settings', 'Настройки')

// modules
names.set('administration', 'Администрирование')
names.set('panels', 'Панели')
names.set('projects', 'Проекты')
names.set('rewards', 'Вознаграждения')
