import { ICol as C, IData as I } from './types'

export const columns: C[] = [
  { name: 'Страна', key: 'country', quickFilter: true },
  { name: 'Наименование колонки', key: 'panel_name' },
  { name: 'Наименование колонки', key: 'panel_name1' },
  { name: 'Наименование колонки', key: 'panel_name2' },
  { name: 'Наименование колонки', key: 'panel_name3' },
  { name: 'Наименование колонки', key: 'panel_name4' },
  { name: 'Наименование колонки', key: 'panel_name5' },
  { name: 'Наименование колонки', key: 'panel_name6' },
  { name: 'Наименование колонки', key: 'panel_name7' },
  { name: 'Наименование колонки', key: 'panel_name8' },
  { name: 'Наименование колонки', key: 'panel_name9' },
  { name: 'Наименование колонки', key: 'panel_name0' },
]

export const data: I[] = Array(10).fill({
  panel_name: 'Экспертное мнение',
  country: 'RussionFedefatin',
})
